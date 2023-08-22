import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  injectRegister: "auto",
  includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  devOptions: {
    enabled: true,
  },
  srcDir: "src",
  manifest: {
    name: "DemoArcgisJavascriptPWA",
    short_name: "arcgispwa",
    description: "This is simple pwa",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
});
