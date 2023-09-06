import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import viteImagemin from "vite-plugin-imagemin"
// import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// viteImagemin({
		// 	gifsicle: {
		// 		optimizationLevel: 7,
		// 		interlaced: false,
		// 	},
		// 	optipng: {
		// 		optimizationLevel: 7,
		// 	},
		// 	mozjpeg: {
		// 		quality: 20,
		// 	},
		// 	pngquant: {
		// 		quality: [0.8, 0.9],
		// 		speed: 4,
		// 	},
		// 	svgo: {
		// 		plugins: [
		// 			{
		// 				name: "removeViewBox",
		// 			},
		// 			{
		// 				name: "removeEmptyAttrs",
		// 				active: false,
		// 			},
		// 		],
		// 	},
		// }),
		// ViteImageOptimizer({}),
	],
	server: {
		port: 3000,
	},
})
