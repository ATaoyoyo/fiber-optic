import { defineConfig } from "vite";
import { vitePluginForArco } from "@arco-plugins/vite-react";
import react from "@vitejs/plugin-react";
import cesium from 'vite-plugin-cesium'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), vitePluginForArco({ style: true }), cesium()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "/src"),
		},
	},
	server: {
		open: true,
	},
});
