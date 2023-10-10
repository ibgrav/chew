import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      name: "chew",
      entry: "src/index.ts",
      fileName: (fmt) => `index.${fmt}.js`
    }
  }
});
