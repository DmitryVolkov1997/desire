import { resolve } from 'path'

const pages = [
	{
		name: 'main',
		path: resolve(__dirname, '../index.html'),
	},
	{
		name: 'page',
		path: resolve(__dirname, '../page.html'),
	},
]

export default pages
