import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VP Global",
    short_name: "VP Global",
    description:
      "VP Global B2B manufacturing capabilities for CNC, extrusion, injection and industrial component development.",
    start_url: "/vi",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#2E40B8",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

