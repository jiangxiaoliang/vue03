import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
// import vueJsx from  '@vitejs/plugin-vue-jsx'
import tsx from './plugin/index'
import pxtoviewport from 'postcss-px-to-viewport'
import unocss from 'unocss/vite'
import { presetIcons, presetAttributify, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsx(), DefineOptions(), unocss({
    presets: [presetIcons(), presetAttributify(), presetUno()],
    rules: [
      ['flex', { display: 'flex' }],
      ['red', { color: 'red' }],
      [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })]
    ],
    shortcuts: {
      short: 'flex red'
    }
  })],
  css: {
    postcss: {
      plugins: [
        pxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 320
        })
      ]
    }
  }
})



