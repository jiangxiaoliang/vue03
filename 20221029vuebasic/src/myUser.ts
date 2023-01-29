import type { App } from 'vue'
import { app } from './main'

interface Use {
    install:(app: App, ...options: any[]) =>  void
}


const installedList = new Set()
export function myUse<T extends Use>(plugin: T, ...options: any[]) {
    if (installedList.has(plugin)) {
        console.error('已经注册改插件', plugin)
    } else {
        plugin.install(app, ...options)
        installedList.add(plugin)
    }
}