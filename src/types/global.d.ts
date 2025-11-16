declare module "*.css"


// In src/types/global.d.ts

declare global {
  interface Window {
    /**
     * The global Google Analytics (gtag.js) function.
     * It's defined as optional and accepts any arguments
     * to avoid complex type definitions.
     */
    gtag?: (...args: unknown[]) => void;

    /**
     * A custom property to store the last tracked path
     * to prevent duplicate 'page_view' events.
     */
    lastTrackedPath?: string;
  }
}

// Add an empty 'export {}' to ensure this file is
// treated as a module and its global declarations are applied.
export {};