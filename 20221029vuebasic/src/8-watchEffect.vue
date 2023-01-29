<template>
    <div>
        <input id="ipt" v-model="message" type="text" />
        <input v-model="message2" type="text" />
        <!-- <button @click="stopWatch">停止监听</button> -->
    </div>
</template>

<script setup lang='ts'>
    import {ref, watchEffect } from 'vue'

    const message = ref<string>('飞机')
    const message2 = ref<string>('飞机上的人')

    // const stop = watchEffect((oninvalidate) => {
    //     console.log('>>>>', message.value)
    //     console.log('....', message2.value)
    //     oninvalidate(() => {
    //         console.log('before')
    //     })
    // })

    // const stopWatch = () => stop()

    watchEffect(() => {
        let ipt: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
        console.log(ipt)
    }, {
        flush: 'post'
    })
</script>
<style scoped>

</style>