import { RefObject } from "react";
import { Button } from "../ui/button";

export default function ProjectCTA( { ctaRef }: { ctaRef: RefObject<HTMLDivElement | null>}) {
  return (
    <div ref={ctaRef} className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 text-center">
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Have a Project in Mind?
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I&apos;m always excited to work on new projects and collaborate with
          amazing people. Let&apos;s discuss how we can bring your ideas to
          life.
        </p>
        <Button
          size="lg"
          className="px-8 py-4 bg-primary hover:shadow-glow transition-all duration-300"
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let&apos;s Work Together
        </Button>
      </div>
    </div>
  );
}
