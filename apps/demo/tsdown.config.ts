import { defineConfig } from "tsdown";

export default defineConfig((cfg) => ({
  entry: ["src/index.ts"],
  onSuccess: cfg.watch ? "node dist/index.mjs" : undefined,
}));
