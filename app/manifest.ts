import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TBPM — Total Building & Property Management",
    short_name: "TBPM",
    description:
      "Sydney's trusted partner for building management, cleaning, gardening, concierge services and project management.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00bf63",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
