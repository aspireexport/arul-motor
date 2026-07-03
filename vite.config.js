import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/arul-motor/",

  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Arul Motor Billing",
        short_name: "Arul Motor",
        description: "Offline Billing System",
        start_url: "/arul-motor/",
        scope: "/arul-motor/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#123d8d"
      }
    })
  ]
});
