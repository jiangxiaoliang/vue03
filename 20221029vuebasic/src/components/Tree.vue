<template>
    <div @click.stop="clickTap(item, $event)" class="tree" v-for="item in data">
        <input v-model="item.checked" type="checkbox" />
        <span>{{item.name}}</span>
        <!-- <Tree v-if="item?.children?.length" :data="item?.children"></Tree> -->
        <!-- <TreeItem v-if="item?.children?.length" :data="item?.children"></TreeItem> -->
        <ddd v-if="item?.children?.length" :data="item?.children"></ddd>
    </div>
</template>


<script setup lang='ts'>
    import {ref, reactive } from 'vue'

    interface Tree {
        name: string,
        checked: boolean,
        children?: Tree[]
    }
    defineProps<{
        data?: Tree[]
    }>()

    // 通过 unplugin-vue-define-options 插件
    defineOptions({
        name: 'ddd'
    })

    const clickTap = (item: Tree, e: Event) => {
        console.log(item)
    }

</script>

<!-- 使用别名 -->
<!-- <script lang="ts">
    export default {
        name: 'TreeItem'
    }
</script> -->

<style scoped>
    .tree {
        margin-left: 5px;
    }
</style>