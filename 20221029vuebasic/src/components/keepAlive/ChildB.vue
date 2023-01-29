<template>
    <div>
        请选择：<input type="checkbox" />
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive,onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

    onMounted(() => {
        console.log('mounted')
    })

    onActivated(() => {
        console.log('activated')
    })

    onDeactivated(() => {
        console.log('deactivated')
    })

    onUnmounted(() => {
        console.log('unmounted')
    })
</script>
<style scoped>

</style>