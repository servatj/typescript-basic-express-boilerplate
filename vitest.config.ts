import swc from "unplugin-swc";
import { loadEnv } from "vite";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: "./",
    globals: true,
    isolate: false,
    passWithNoTests: true,
    include: [`tests/**/*.test.ts`],
    exclude: [...configDefaults.exclude, "node_modules"],
    env: loadEnv("test", process.cwd(), ""),
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: `coverage/`,
      include: ["src/**/*.ts"],
    },
  },
  plugins: [swc.vite({ module: { type: "es6" } })],
});
