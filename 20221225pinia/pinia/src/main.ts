import { createApp, toRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'

const __piniaKey = '__piniaKey'
type Options = {
    key?: string
}

const setStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: string) => {
    return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {})
}

const piniaPlugin = (options: Options) => {
    return (context: any) => {
        const { store } = context
        const data = getStorage(`${options.key ?? __piniaKey}-${store.$id}`)
        store.$subscribe(() => {
            setStorage(`${options.key ?? __piniaKey}-${store.$id}`, toRaw(store.$state))
        })
        return {
            ...data
        }
    }
}

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPlugin({
    key: 'pinia'
}))
app.use(pinia)

app.mount('#app')
