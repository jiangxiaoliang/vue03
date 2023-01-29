<template>
    <div>
        <button @click="random">shuffle</button>
        <transition-group tag="div" class="wrap" move-class="move">
            <div class="item" :key="item.id" v-for="item in list">{{item.number}}</div>
        </transition-group>
    </div>
</template>

<script setup lang='ts'>
    import _ from 'lodash'
    import {ref, reactive } from 'vue'

    const list = ref(Array.apply(null, { length: 81} as number[]).map((_, index) => {
        return {
            id: index,
            number: (index % 9) + 1
        }
    }))
    // console.log(list.value)

    const random = () => {
        list.value = _.shuffle(list.value)
    }
</script>
<style lang="less" scoped>
    .wrap {
        display: flex;
        flex-wrap: wrap;
        width: calc(25px * 10 + 10px);
        .item {
            width: 25px;
            height: 25px;
            border: 1px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .move {
        transition: all 1.5s;    
    }
</style>