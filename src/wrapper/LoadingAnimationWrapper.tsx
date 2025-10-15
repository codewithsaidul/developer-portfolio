"use client";
import LoadingAnimation from "@/components/ui/LoadingAnimation";
import { ReactNode, useState } from "react";

export default function LoadingAnimationWrapper ( { children }: { children: ReactNode} ) {
  const [isComplete, setIsComplete] = useState(false);

  if (!isComplete) return <LoadingAnimation name="CodeWithSaidul" onComplete={setIsComplete} />
  return (
    <div>
      {children}
    </div>
  );
}
