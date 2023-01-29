<template>
    <div class="com">
        我是组件B
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive } from 'vue'

</script>
<style lang="less" scoped>
    .com {
        height: 300px;
        border: 2px solid #ccc;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>