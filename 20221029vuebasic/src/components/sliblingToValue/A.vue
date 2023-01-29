<template>
    <div class="A">
        <button @click="emitB">派发一个事件</button>
    </div>
</template>

<script setup lang='ts'>
    import Bus from '../../Bus'

    import {ref, reactive } from 'vue'
    let flag = false

    // const emit = defineEmits(['on-click'])
    // const emitB = () => {
    //     flag = !flag
    //     emit('on-click', flag)
    // }

    const emitB = () => {
        flag = !flag
        Bus.emit('on-click', flag)
    }
</script>
<style scoped>
    .A {
        width: 100px;
        height: 100px;
        color: #fff;
        background: blue;
    }
</style>