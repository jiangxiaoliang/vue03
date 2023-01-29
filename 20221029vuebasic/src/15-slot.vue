<template>
    <div>
        <Dialog>
            <template #header>
                <div>我被插入到了头部</div>
            </template>
            <template v-slot="{value, index}">
                <div>{{value.name}}--{{index}}</div>
            </template>
            <!-- <template v-slot:footer>
                <div>我被插入到了下面</div>
            </template> -->
            <template #[slotName]>
                <div>我被插入到了下面</div>
            </template>
        </Dialog>
    </div>
</template>

<script setup lang='ts'>
    import Dialog from './components/Dialog/index.vue'

    import {ref, reactive } from 'vue'

    const slotName = ref('footer')

</script>
<style scoped>

</style>