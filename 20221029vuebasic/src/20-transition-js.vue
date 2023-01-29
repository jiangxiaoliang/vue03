<template>
    <div>
        <button @click="flag = !flag">动画</button>
        <transition
            @before-enter="enterFrom"
            @enter="enterActive"
            @after-enter="enterTo"
            @enter-cancelled="enterCancel"
            @leave="leaveActive"
        >
            <div v-if="flag" class="box"></div>
        </transition>
    </div>
</template>

<script setup lang='ts'>
    import gsap from 'gsap'
    import {ref, reactive } from 'vue'

    const flag = ref<boolean>(true)

    const enterFrom = (el: Element) => {
        console.log('开始进入')
        gsap.set(el, {
            width: 0,
            height: 0
        })
    }
    const enterActive = (el: Element, done: gsap.Callback) => {
        console.log('动画中...')
        gsap.to(el, {
            width: 200,
            height: 200,
            onComplete: done
        })
    }
    const enterTo = (el: Element) => {
        console.log('动画结束')
    }
    const enterCancel = (el: Element) => {
        console.log('动画被打断')
    }
    const leaveActive = (el: Element, done: gsap.Callback) => {
        console.log('动画离开...')
        gsap.to(el, {
            width: 0,
            height: 0,
            onComplete: done
        })
    }

</script>
<style scoped>

    .box {
        height: 200px;
        width: 200px;
        background-color: red;
    }
    
</style>