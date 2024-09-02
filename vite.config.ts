import { defineConfig } from "vite";
import { vitePluginForArco } from "@arco-plugins/vite-react";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), vitePluginForArco({ style: true })],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "/src"),
		},
	},
	server: {
		open: true,
	},
});
