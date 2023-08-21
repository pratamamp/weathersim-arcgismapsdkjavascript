import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  injectRegister: "auto",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  injectManifest: true,
  manifest: {
    name: "weatherapp",
    short_name: "weatherapp",
    description: "Demo Weather Simulation - Arcgis Javascript MapSDK",
    theme_color: "#ffffff",
    start_url: "/",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
};
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
