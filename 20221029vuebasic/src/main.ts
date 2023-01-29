import { createApp } from 'vue'
import './assets/css/reset.less'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './25-provide-inject.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Card from './components/Card.vue'
import Loading from './components/Loading/index'
import { myUse } from './myUser'
import 'uno.css'

// createApp(App).mount('#app')
export const app = createApp(App)

app.component('Card', Card) // 注册全局组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.config.globalProperties.$env = 'dev'
app.config.globalProperties.$filter = {
  format<T> (str: T) {
    return `小王-${str}`
  }
}

type Filter = {
  format<T> (str: T): string
}
declare module 'vue' {
  export interface ComponentCustomProperties {
    $filter: Filter,
    $env: string
  }
}

type Lod = {
  show: () => void,
  hide: () => void
}
declare module 'vue' {
  export interface ComponentCustomProperties {
    myLoading: Lod
  }
}

// app.use(Loading)
myUse(Loading)

app.mount('#app')
