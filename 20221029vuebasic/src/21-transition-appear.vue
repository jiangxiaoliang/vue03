<template>
    <div>
        <button @click="flag = !flag">动画</button>
        <transition
            appear
            appear-from-class="from"
            appear-active-class="active"
            appear-to-class="to"
        >
            <div v-if="flag" class="box"></div>
        </transition>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive } from 'vue'

    const flag = ref<boolean>(true)

</script>
<style scoped>

    .box {
        height: 200px;
        width: 200px;
        background-color: red;
    }
    .from {
        height: 0;
        width: 0;
    }
    .active {
        transition: all 2s ease;
    }
    .to {
        width: 200px;
        height: 200px;
    }
    
</style>