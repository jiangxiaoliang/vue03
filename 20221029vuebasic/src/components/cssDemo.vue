<template>
    <div>
        我是插槽
        <slot></slot>
        <span>子组件的span标签</span>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive } from 'vue'

</script>
<style scoped>
    :slotted(.a) {
        color: red
    }
</style>