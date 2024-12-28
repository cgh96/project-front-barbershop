import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // vite 최신 버전(6버전)은 modern API를 default로 설정함. (현재 프로젝트 5.4버전),
        additionalData: `@use "/src/shared/ui/styles/variables.scss";\n`,
      },
    },
  },
});
