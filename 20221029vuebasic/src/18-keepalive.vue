<template>
    <button @click="flag = !flag">切换组件</button>
    <div>
        <keep-alive :include="['ChildA']">
            <ChildAVue v-if="flag"></ChildAVue>
            <ChildBVue v-else></ChildBVue>
        </keep-alive>
    </div>
</template>

<script setup lang='ts'>
    import ChildAVue from './components/keepAlive/ChildA.vue'
    import ChildBVue from './components/keepAlive/ChildB.vue'

    import {ref, reactive } from 'vue'

    const flag = ref<boolean>(true)

</script>
<style scoped>

</style>