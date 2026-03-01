import { defineConfig } from "tsdown";

export default defineConfig({
  workspace: ["apps/*", "libs/*"],
  entry: ["src/index.ts"],
  dts: {
    tsgo: true,
  },
  exports: {
    devExports: "dev",
  },
  inputOptions: {
    resolve: {
      conditionNames: ["dev"],
    },
  },
});
