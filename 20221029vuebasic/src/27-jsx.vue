<template>
    <div>
        <jsxFile name="小王props" @on-click="getValue"></jsxFile>
    </div>
</template>

<script setup lang='ts'>
    import jsxFile from './components/App'

    import {ref, reactive } from 'vue'

    const getValue = (value: any) => {
        console.log('父组件收到了', value)
    }

</script>
<style scoped>

</style>