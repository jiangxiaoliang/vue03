<template>
    <div>
        <h1>我是APP父组件</h1>
        <div>isShow: {{isShow}}</div>
        <div>textValue: {{textValue}}</div>
        <div>
            <button @click="isShow = !isShow">开关</button>
        </div>
        <hr />
        <vModelVue v-model="isShow" v-model:textValue.isBt="textValue"></vModelVue>
    </div>
</template>

<script setup lang='ts'>
    import vModelVue from './components/vModel.vue'

    import {ref, reactive } from 'vue'

    const isShow = ref<boolean>(true)
    const textValue = ref<string>('小红')
</script>
<style scoped>

</style>