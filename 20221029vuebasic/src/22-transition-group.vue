<template>
    <div>
        <button @click="push">push</button>
        <button @click="pop">pop</button>
        
        <div class="wrap">
            <transition-group enter-active-class="animate__animated animate__jackInTheBox" leave-active-class="animate__animated animate__hinge">
                <div class="item" :key="item" v-for="item in list">{{item}}</div>
            </transition-group>
        </div>
    </div>
</template>

<script setup lang='ts'>
    import 'animate.css'

    import {ref, reactive } from 'vue'

    const list = reactive<number[]>([1, 2, 3, 4, 5])

    const push = () => {
        list.push(list.length + 1)
    }
    const pop = () => {
        list.pop()
    }
</script>
<style lang="less" scoped>
    .wrap {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid #000;
        .item {
            margin: 10px;
            font-size: 30px;
        }
    }
</style>