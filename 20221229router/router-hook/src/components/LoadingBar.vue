<template>
    <div class="wraps">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive, onMounted } from 'vue'

    let bar = ref<HTMLElement>()
    let speed = ref<number>(1)
    let timer = ref<number>(0)
    
    const startLoading = () => {
        let dom = bar.value as HTMLElement
        speed.value = 1
        timer.value = window.requestAnimationFrame(function fn() {
            if (speed.value < 90) {
                speed.value++
                dom.style.width = speed.value + '%'
                window.requestAnimationFrame(fn)
            } else {
                speed.value = 1
                window.cancelAnimationFrame(timer.value)
            }
        })
    }
    const endLoading = () => {
        let dom = bar.value as HTMLElement
        setTimeout(() => {
            speed.value = 100
            dom.style.width = speed.value + '%'
        }, 2000);
    }

    // onMounted(() => {
    //     startLoading(),
    //     endLoading()
    // })

    defineExpose({
        startLoading,
        endLoading
    })

</script>
<style scoped lang="less">
    .wraps {
        position: fixed;
        top: 0;
        width: 100%;
        height: 5px;
        .bar {
            height: inherit;
            width: 0;
            background: red;
        }
    }
</style>