"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export const TOTAL_HERO_FRAMES = 480;
const CONCURRENT_LOAD_LIMIT = 4;

export interface FrameLoaderHandle {
  getFrameImage: (frameIndex: number) => HTMLImageElement | null;
  isFirstFrameLoaded: boolean;
  totalFrames: number;
  prioritizeFrame: (frameIndex: number, direction: 1 | -1) => void;
}

export function useHeroFrameLoader(
  onFirstFrameReady?: () => void,
  onFrameLoaded?: (frameIndex: number) => void
): FrameLoaderHandle {
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const decodedRef = useRef<boolean[]>([]);
  const inFlightRef = useRef<boolean[]>([]);
  const isCancelledRef = useRef<boolean>(false);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState<boolean>(false);

  const priorityQueueRef = useRef<number[]>([]);
  const backgroundIndexRef = useRef<number>(1);
  const activeWorkersRef = useRef<number>(0);

  const onFirstFrameReadyRef = useRef(onFirstFrameReady);
  const onFrameLoadedRef = useRef(onFrameLoaded);

  useEffect(() => {
    onFirstFrameReadyRef.current = onFirstFrameReady;
    onFrameLoadedRef.current = onFrameLoaded;
  }, [onFirstFrameReady, onFrameLoaded]);

  // Helper to format frame path
  const getFramePath = useCallback((index: number) => {
    const clamped = Math.max(1, Math.min(TOTAL_HERO_FRAMES, Math.round(index)));
    const padded = clamped.toString().padStart(4, "0");
    return `/images/hero-frames/frame_${padded}.webp`;
  }, []);

  // Retrieve ready image or closest available decoded neighbor
  const getFrameImage = useCallback((frameIndex: number): HTMLImageElement | null => {
    const clamped = Math.max(1, Math.min(TOTAL_HERO_FRAMES, Math.round(frameIndex)));

    // Check exact target frame
    const exact = imagesRef.current[clamped];
    if (exact && exact.complete && exact.naturalWidth > 0 && decodedRef.current[clamped]) {
      return exact;
    }

    // Look for nearest loaded neighbor within a reasonable radius
    for (let offset = 1; offset <= 30; offset++) {
      const left = clamped - offset;
      const right = clamped + offset;

      if (left >= 1) {
        const leftImg = imagesRef.current[left];
        if (leftImg && leftImg.complete && leftImg.naturalWidth > 0 && decodedRef.current[left]) {
          return leftImg;
        }
      }
      if (right <= TOTAL_HERO_FRAMES) {
        const rightImg = imagesRef.current[right];
        if (rightImg && rightImg.complete && rightImg.naturalWidth > 0 && decodedRef.current[right]) {
          return rightImg;
        }
      }
    }

    return null;
  }, []);

  // Worker runner function
  const triggerWorkers = useCallback(() => {
    while (activeWorkersRef.current < CONCURRENT_LOAD_LIMIT && !isCancelledRef.current) {
      let nextFrame: number | null = null;

      // Check priority queue first
      while (priorityQueueRef.current.length > 0) {
        const candidate = priorityQueueRef.current.shift()!;
        if (!decodedRef.current[candidate] && !inFlightRef.current[candidate]) {
          nextFrame = candidate;
          break;
        }
      }

      // If priority queue is empty, pull from progressive background queue
      if (nextFrame === null) {
        while (backgroundIndexRef.current <= TOTAL_HERO_FRAMES) {
          const candidate = backgroundIndexRef.current++;
          if (!decodedRef.current[candidate] && !inFlightRef.current[candidate]) {
            nextFrame = candidate;
            break;
          }
        }
      }

      if (nextFrame === null) {
        // No work available right now
        break;
      }

      // Execute load for nextFrame
      activeWorkersRef.current++;
      inFlightRef.current[nextFrame] = true;

      const frameToLoad = nextFrame;
      const img = new Image();
      img.src = getFramePath(frameToLoad);

      const onFinish = () => {
        activeWorkersRef.current--;
        inFlightRef.current[frameToLoad] = false;
        if (!isCancelledRef.current) {
          triggerWorkers();
        }
      };

      img.onload = () => {
        if (isCancelledRef.current) {
          onFinish();
          return;
        }

        imagesRef.current[frameToLoad] = img;

        if ("decode" in img) {
          img
            .decode()
            .then(() => {
              decodedRef.current[frameToLoad] = true;
              if (frameToLoad === 1) {
                setIsFirstFrameLoaded(true);
                onFirstFrameReadyRef.current?.();
              }
              onFrameLoadedRef.current?.(frameToLoad);
              onFinish();
            })
            .catch(() => {
              decodedRef.current[frameToLoad] = true;
              if (frameToLoad === 1) {
                setIsFirstFrameLoaded(true);
                onFirstFrameReadyRef.current?.();
              }
              onFrameLoadedRef.current?.(frameToLoad);
              onFinish();
            });
        } else {
          decodedRef.current[frameToLoad] = true;
          if (frameToLoad === 1) {
            setIsFirstFrameLoaded(true);
            onFirstFrameReadyRef.current?.();
          }
          onFrameLoadedRef.current?.(frameToLoad);
          onFinish();
        }
      };

      img.onerror = () => {
        onFinish();
      };
    }
  }, [getFramePath]);

  // Priority queue injector: schedules frames around current scroll position and travel direction
  const prioritizeFrame = useCallback((frameIndex: number, direction: 1 | -1) => {
    if (isCancelledRef.current) return;
    const clamped = Math.max(1, Math.min(TOTAL_HERO_FRAMES, Math.round(frameIndex)));

    // Build window: 12 frames ahead in direction of travel, 4 frames behind
    const queueToAdd: number[] = [];
    queueToAdd.push(clamped);

    for (let i = 1; i <= 12; i++) {
      const forward = clamped + i * direction;
      if (forward >= 1 && forward <= TOTAL_HERO_FRAMES) {
        queueToAdd.push(forward);
      }
    }

    for (let i = 1; i <= 4; i++) {
      const backward = clamped - i * direction;
      if (backward >= 1 && backward <= TOTAL_HERO_FRAMES) {
        queueToAdd.push(backward);
      }
    }

    // Filter out already decoded or in-flight frames
    const newItems = queueToAdd.filter(
      (idx) => !decodedRef.current[idx] && !inFlightRef.current[idx]
    );

    if (newItems.length > 0) {
      // Prepend to priority queue so nearest frames jump to front of download queue
      priorityQueueRef.current = Array.from(
        new Set([...newItems, ...priorityQueueRef.current])
      );
      // Spawn workers if under concurrency limit
      triggerWorkers();
    }
  }, [triggerWorkers]);

  useEffect(() => {
    isCancelledRef.current = false;
    imagesRef.current = new Array(TOTAL_HERO_FRAMES + 1).fill(null);
    decodedRef.current = new Array(TOTAL_HERO_FRAMES + 1).fill(false);
    inFlightRef.current = new Array(TOTAL_HERO_FRAMES + 1).fill(false);
    priorityQueueRef.current = [];
    backgroundIndexRef.current = 1;
    activeWorkersRef.current = 0;

    // Seed Tier 1: Immediately queue frames 1..25
    for (let i = 1; i <= Math.min(25, TOTAL_HERO_FRAMES); i++) {
      priorityQueueRef.current.push(i);
    }

    // Seed Tier 2: Stride keyframes (every 8 frames) right after Tier 1
    for (let i = 28; i <= TOTAL_HERO_FRAMES; i += 8) {
      priorityQueueRef.current.push(i);
    }
    priorityQueueRef.current.push(TOTAL_HERO_FRAMES);

    triggerWorkers();

    return () => {
      isCancelledRef.current = true;
      priorityQueueRef.current = [];
    };
  }, [triggerWorkers]);

  return {
    getFrameImage,
    isFirstFrameLoaded,
    totalFrames: TOTAL_HERO_FRAMES,
    prioritizeFrame,
  };
}
