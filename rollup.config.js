import { defineConfig } from "rollup";
import UnpluginIsolatedDecl from "unplugin-isolated-decl/rollup";
import { swc } from "rollup-plugin-swc3";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: {
    a: "src/a/index.ts",
    b: "src/b/index.ts",
  },
  output: {
    dir: "dist",
    format: "es",
    entryFileNames: "[name]/index.js",
    preserveModules: true,
  },
  external: ["react"],
  plugins: [typescript({ declaration: true, outDir: "dist" })],
  // plugins: [UnpluginIsolatedDecl(), swc()],
});
