<template>
    <div>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive, getCurrentInstance } from 'vue'

    const app = getCurrentInstance()

    app?.proxy?.myLoading.show()
    setTimeout(() => {
        app?.proxy?.myLoading.hide()
    }, 3000)

</script>
<style scoped>

</style>