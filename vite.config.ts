import {defineConfig} from 'vite'
import {resolve} from 'path'

export default defineConfig(({mode}) => ({
  optimizeDeps: {
    // https://github.com/vitejs/vite/issues/3413#issuecomment-1180169375
    exclude: [
      '@antv/x6',
      // "@antv/x6-plugin-clipboard",
      // "@antv/x6-plugin-history",
      // "@antv/x6-plugin-keyboard",
      // "@antv/x6-plugin-selection",
      // "@antv/x6-plugin-snapline",
      // "@antv/x6-plugin-stencil",
      // "@antv/x6-plugin-transform",
    ],
  },
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
      '@/': `${resolve(__dirname, 'src')}/`,
      '~~/': `${resolve(__dirname, './')}/`,
    },
  },
}))
