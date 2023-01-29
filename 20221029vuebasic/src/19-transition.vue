<template>
    <div>
        <button @click="flag = !flag">动画</button>
        <transition enter-from-class="e-from" enter-active-class="animate__animated animate__backInDown" leave-active-class="animate__animated animate__jello">
            <div v-if="flag" class="box"></div>
        </transition>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive } from 'vue'

    import 'animate.css'
    const flag = ref<boolean>(true)

</script>
<style scoped>

    .box {
        height: 200px;
        width: 200px;
        background-color: red;
    }
    .e-from {
        height: 0;
        width: 0;
    }
    .fade-enter-active {
        transition: all 2s ease;
    }
    .fade-enter-to {
        height: 200px;
        width: 200px;
    }
    .fade-leave-from {
        height: 200px;
        width: 200px;
    }
    /* .fade-leave-active {
        transition: all 5s ease-in-out;
    } */
    .fade-leave-to {
        height: 0;
        width: 0;
    }
</style>