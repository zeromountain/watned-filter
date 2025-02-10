import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import webExtension from "vite-plugin-web-extension";
import { getManifest } from "./src/manifest";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    solid(),
    webExtension({
      manifest: () => getManifest(),
    }),
  ],
  build: {
    target: "esnext",
    outDir: resolve(__dirname, "dist"),
  },
});
