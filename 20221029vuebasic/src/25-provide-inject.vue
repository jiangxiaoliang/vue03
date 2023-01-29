<template>
    <h1>App.vue(爷爷节点)</h1>
    <label>
        <input type="radio" value="red" name="color" v-model="colorVal" />
        红色
    </label>
    <label>
        <input type="radio" value="pink" name="color" v-model="colorVal" />
        粉色
    </label>
    <label>
        <input type="radio" value="yellow" name="color" v-model="colorVal" />
        黄色
    </label>
    <div class="box">

    </div>
    <hr />
    <ProvideAVue></ProvideAVue>
</template>

<script setup lang='ts'>
    import ProvideAVue from './components/provide/ProvideA.vue';
    import {ref, reactive, provide, readonly } from 'vue'

    const colorVal = ref<string>('red')

    provide('color', readonly(colorVal)) // 添加readonly子孙组件不能修改color的值
</script>
<style scoped>
    .box {
        width: 50px;
        height: 50px;
        border: 1px solid #ccc;
        background: v-bind(colorVal);
    }
</style>