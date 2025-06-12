import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"], // nếu index.tsx -> giữ nguyên
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "react-dom", "react-native"], // 👉 thêm cả react-dom, react-native
  minify: true,
  treeshake: true, // 👉 giúp loại bỏ code không dùng
  ...options,
}));
