<template>
    <div>
        <h3 ref="el">我是组件3-{{str}}</h3>
        <button @click="change">修改</button>
        <hr />
    </div>
</template>

<script setup lang='ts'>
    import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue'
    
    const el = ref<HTMLElement>()
    const str = ref<string>('jxl')
    console.log('setup')
    onBeforeMount(() => {
        console.log('onBeforeMount', el.value)
    })
    onMounted(() => {
        console.log('onMounted', el.value)
    })
    onBeforeUpdate(() => {
        console.log('onBeforeUpdate', el.value?.innerText)
    })
    onUpdated(() => {
        console.log('onUpdated', el.value?.innerText)
    })
    onBeforeUnmount(() => {
        console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
        console.log('onUnmounted')
    })
    onRenderTracked((e) => {
        console.log(e)
    })
    onRenderTriggered((e) => {
        console.log(e)
    })

    const change = () => {
        str.value = '我被修改了'
    }
</script>
<style scoped>

</style>