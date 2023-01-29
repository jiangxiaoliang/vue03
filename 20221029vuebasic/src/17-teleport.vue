<template>
    <div class="parent">
        <h1>嗨嗨嗨我是父级</h1>
        <Teleport :disabled="false" to="body">
            <Dialog></Dialog>
        </Teleport>
    </div>
</template>

<script setup lang='ts'>
    import Dialog from './components/Dialog.vue';

    import {ref, reactive } from 'vue'

</script>
<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .parent {
        background: yellow;
        height: 50vh;
        position: relative;
    }
</style>