<template>
    <div style="display: flex">
        <div @click="switchCom(item, index)" :class="[active == index ? 'active' : '']" class="tabs" v-for="(item, index) in data">
            <div>{{item.name}}</div>
        </div>
    </div>

    <component :is="comId"></component>
</template>

<script setup lang='ts'>
    import AVue from './components/componentExample/A.vue'
    import BVue from './components/componentExample/B.vue'
    import CVue from './components/componentExample/C.vue'

    import {ref, reactive, markRaw, shallowRef } from 'vue'

    const comId = shallowRef(AVue)

    const active = ref(0)

    const data = reactive([
        {
            name: 'A组件',
            com: markRaw(AVue)
        },
        {
            name: 'B组件',
            com: markRaw(BVue),
        },
        {
            name: 'C组件',
            com: markRaw(CVue)
        },
    ])

    const switchCom = (item: any, index: number) => {
        comId.value = item.com
        active.value = index
    }
</script>
<style lang="less" scoped>
    .tabs {
        border: 1px solid #ccc;
        padding: 5px 10px;
        margin: 5px;
    }
    .active {
        background-color: skyblue;
    }
</style>