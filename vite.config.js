import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://ElNuVaTo.github.io/Portafolio",
  server: {
    host: "0.0.0.0",
  },
});
