import { defineConfig } from 'vite'

import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

import pages from './vitejs/pages.config'

const pagesInput = {}

pages.forEach(page => {
	pagesInput[page.name] = page.path
})

export default defineConfig({
	build: {
		target: 'es2017',
		outDir: 'build',
		rollupOptions: {
			input: {
				...pagesInput,
			},
		},
	},
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, 'partials'),
		}),
	],
})
