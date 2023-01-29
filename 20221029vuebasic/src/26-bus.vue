<template>
    <div>
        <!-- <A @on-click="getFlag"></A>
        <B :flag="Flag"></B> -->

        <A></A>
        <B></B>
    </div>
</template>

<script setup lang='ts'>
    import A from './components/sliblingToValue/A.vue'
    import B from './components/sliblingToValue/B.vue'
    import {ref, reactive } from 'vue'

    // const Flag = ref<boolean>(false)
    // const getFlag = (flag: boolean) => {
    //     Flag.value = flag
    // }
</script>
<style scoped>

</style>