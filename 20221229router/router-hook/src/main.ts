import { createApp, createVNode, render } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import LoadingBar from '@/components/LoadingBar.vue'

// import './assets/main.css'

// console.log(LoadingBar)
const vNode = createVNode(LoadingBar)
render(vNode, document.body)
console.log(vNode)

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')

const whiteList = ['/']
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    vNode.component?.exposed?.startLoading()
    if (whiteList.includes(to.path) || localStorage.getItem('token')) {
        next()
    } else {
        next('/')
    }
})

router.afterEach((to, from) => {
    vNode.component?.exposed?.endLoading()
})
