<template>
    <h1>provideB组件(孙子组件)</h1>
    <button @click="change">修改为yellow</button>
    <div class="box"></div>
</template>

<script setup lang='ts'>
    import {ref, reactive, inject } from 'vue'
    import type { Ref } from 'vue'

    const color = inject<Ref<string>>('color')

    const change = () => {
        color!.value = 'yellow'
    }

</script>
<style scoped>
    .box {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        background: v-bind(color);
    }
</style>