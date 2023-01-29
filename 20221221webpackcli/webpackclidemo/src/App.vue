<template>
    <div>hello vue webpack 123</div>
    <div>{{name}}</div>
</template>

<script setup lang="ts">
    import '@/assets/index.css'
    import '@/assets/index.less'
    import {ref, reactive } from 'vue'

    const name = ref<string>('name11')
</script>
<style scoped>

</style>