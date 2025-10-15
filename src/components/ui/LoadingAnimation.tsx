"use client"

import { useEffect } from "react"

interface LoadingAnimationProps {
  name: string
  onComplete?: React.Dispatch<React.SetStateAction<boolean>>
  duration?: number
}

export default function LoadingAnimation({ name, onComplete, duration = 3000 }: LoadingAnimationProps) {


  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.(true)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated circles */}
        <div className="relative h-32 w-32">
          <div className="loading-circle loading-circle-1" />
          <div className="loading-circle loading-circle-2" />
          <div className="loading-circle loading-circle-3" />
        </div>

        {/* Name with letter animation */}
        <div className="flex gap-1 overflow-hidden">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className="loading-letter inline-block text-4xl font-bold tracking-wider"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-1 w-64 overflow-hidden rounded-full bg-muted">
          <div className="loading-progress h-full bg-primary" />
        </div>
      </div>

      <style jsx>{`
        .loading-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-top-color: hsl(var(--primary));
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }

        .loading-circle-1 {
          width: 100%;
          height: 100%;
          animation-duration: 1.5s;
        }

        .loading-circle-2 {
          width: 75%;
          height: 75%;
          border-top-color: hsl(var(--accent-foreground));
          animation-duration: 2s;
          animation-direction: reverse;
        }

        .loading-circle-3 {
          width: 50%;
          height: 50%;
          border-top-color: hsl(var(--muted-foreground));
          animation-duration: 2.5s;
        }

        @keyframes spin {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .loading-letter {
          animation: letterPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          opacity: 0;
          transform: translateY(20px) scale(0.8);
        }

        @keyframes letterPop {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .loading-progress {
          animation: progress ${duration}ms linear forwards;
          transform-origin: left;
        }

        @keyframes progress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  )
}
