import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./", // Changed to relative path to fix build error related to unresolved import. Adjust for deployment if necessary.
    build: {
        outDir: "docs",
    },
});
