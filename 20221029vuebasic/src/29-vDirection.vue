<template>
    <!-- <div>
        <button>开关</button>
        <vDirectVue v-move:aa.xiaohong="{background: 'red'}"></vDirectVue>
    </div> -->

    <div v-move class="box">
        <div class="header"></div>
        <div>
            内容
        </div>
    </div>
</template>

<script setup lang='ts'>
    import vDirectVue from './components/vDirect.vue'

    import {ref, reactive, Directive, DirectiveBinding } from 'vue'

    type Value = {
        background: string
    }

    // const vMove: Directive = {
    //     created() {
    //         console.log('created')
    //     },
    //     beforeMount() {
    //         console.log('beforeMount')
    //     },
    //     mounted(el: HTMLElement, dir: DirectiveBinding<Value>) {
    //         console.log('mounted');
    //         // console.log(args)
    //         el.style.background = dir.value.background
    //     },
    //     beforeUpdate() {
    //         console.log('beforeUpdate')
    //     },
    //     updated() {
    //         console.log('updated')
    //     },
    //     beforeUnmount() {
    //         console.log('beforeunmount')
    //     },
    //     unmounted() {
    //         console.log('unmounted')
    //     }
    // }

    // 只触发moutned和update
    // const vMove: Directive = (el: HTMLElement, binding: DirectiveBinding<Value>) => {
    //     el.style.background = binding.value.background
    // }

    const vMove: Directive = (el: HTMLElement, binding: DirectiveBinding) => {
        const moveEl = el.firstElementChild as HTMLDivElement

        const mouseDown = (e: MouseEvent) => {
            let X = e.clientX - el.offsetLeft
            let Y = e.clientY - el.offsetTop
            const move = (e: MouseEvent) => {
                el.style.left = e.clientX - X + 'px'
                el.style.top = e.clientY - Y + 'px'
            }
            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', move)
            })
        }

        moveEl.addEventListener('mousedown', mouseDown)
    }
</script>
<style lang="less" scoped>
    .box {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        .header {
            height: 20px;
            background: black;
            cursor: move;
        }
    }
</style>