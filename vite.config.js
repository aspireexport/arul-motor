import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "masked-icon.svg"
      ],

     manifest: {
  name: "Arul Motor Billing",
  short_name: "Arul Motor",
  description: "Offline Billing System",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#123d8d"
}    })
  ]
});
