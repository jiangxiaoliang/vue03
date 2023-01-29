<template>
    <Suspense>
        <template #default>
            <SyncVue></SyncVue>
        </template>
        <template #fallback>
            <skeletonVue></skeletonVue>
        </template>
    </Suspense>
</template>

<script setup lang='ts'>
    import skeletonVue from './components/skeleton/skeleton.vue'

    import {ref, reactive, defineAsyncComponent} from 'vue'
    // 打包的时候可以做到性能优化
    const SyncVue = defineAsyncComponent(() => import('./components/skeleton/sync.vue'))

</script>
<style scoped>

</style>