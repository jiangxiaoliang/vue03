<template>
    <div>
        <!-- <card></card>
        <card></card>
        <card></card> -->

        <Tree :data="data"></Tree>
    </div>
</template>

<script setup lang='ts'>
    // import Card from './components/Card.vue' // 局部组件
    import Tree from './components/Tree.vue' // 递归组件

    import {ref, reactive } from 'vue'

    interface Tree {
        name: string,
        checked: boolean,
        children?: Tree[]
    }

    const data = reactive<Tree[]>([
        {
            name: '1',
            checked: false,
            children: [
                {
                    name: '1-1',
                    checked: false
                },
                {
                    name: '1-2',
                    checked: true
                }
            ]
        },
        {
            name: '2',
            checked: false,
        },
        {
            name: '3',
            checked: false,
            children: [
                {
                    name: '3-1',
                    checked: false,
                    children: [
                        {
                            name: '3-1-1',
                            checked: false
                        }
                    ]
                }
            ]
        }
    ])

</script>
<style scoped>

</style>