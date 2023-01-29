<template>
    <h1>provideA组件(父组件)</h1>
    <div class="box"></div>
    <hr />
    <ProvideBVue></ProvideBVue>
</template>

<script setup lang='ts'>
    import ProvideBVue from './ProvideB.vue';
    import {ref, reactive, inject } from 'vue'
    import type {Ref} from 'vue'

    const color = inject<Ref<string>>('color')
</script>
<style scoped>
    .box {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        background: v-bind(color)
    }
</style>