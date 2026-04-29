import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Pages preview lives at jorgeramirez76.github.io/3-guys-from-italy-demo/
// so all asset URLs need the matching base path. When you point a custom
// domain at the repo, switch to "/" and remove the .nojekyll-touch step.
const REPO_BASE = "/3-guys-from-italy-demo/";

export default defineConfig({
  base: REPO_BASE,
  plugins: [react(), tailwindcss()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
    minify: "esbuild",
  },
});
