"use client";

import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Centered Card Container */}
        <div className="rounded-xl border border-border bg-card p-12 md:p-16 text-center space-y-6">
          {/* Code/Developer themed heading */}
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              404
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm mx-auto">
              Looks like this route doesn&apos;t exist in your codebase.
              Let&apos;s get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button
              variant="outline"
              onClick={() => router.push("/")}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Return Home
            </Button>
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="px-6 py-2.5 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              Go Back
            </Button>
          </div>


          {/* Footer Links */}
          <div className="pt-8 text-center border-t border-border">
            <p className="text-sm text-foreground/50">
              Need help? Reach out to me on{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                GitHub
              </a>{" "}
              or{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
