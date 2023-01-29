<template>
    <div>
        <A v-if="flag"></A>
        <button @click="flag = !flag">显示-隐藏-{{flag}}</button>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive } from 'vue'
    import A from './components/A.vue'

    const flag = ref<boolean>(true)
</script>
<style scoped>

</style>