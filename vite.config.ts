import { defineConfig } from "vite"
import tsConfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react-swc"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig({
	plugins: [tsConfigPaths(), react(), dts({ rollupTypes: true })],
	build: {
		lib: {
			entry: resolve("src/index.ts"),
			formats: ["es", "cjs"],
			fileName: (format) => `index.${format === "cjs" ? "cjs" : "js"}`,
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
		},
	},
})
