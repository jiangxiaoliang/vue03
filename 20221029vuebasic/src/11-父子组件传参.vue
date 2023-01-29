<template>
    <div>
        父组件
        <hr />
        <WaterFall ref="waterfall" @on-click="getValue" :title="name"></WaterFall>
    </div>
</template>

<script setup lang='ts'>
    import WaterFall from './components/WaterFall.vue'
    import {ref, reactive } from 'vue'
    let name = '我是父组件传过来的值'

    const getValue = (name: string) => {
        console.log(name)
    }

    const waterfall = ref<InstanceType <typeof WaterFall>>()
    console.log(waterfall.value?.name)
    waterfall.value?.open()
</script>
<style scoped>

</style>