<template>
    <div>
        <input v-model="firstName" type="text" />
        <input v-model="lastName" type="text" />
        <div>
            {{name}}
        </div>
    </div>
</template>

<script setup lang='ts'>
    import {ref, computed } from 'vue'
    const firstName = ref('')
    const lastName = ref('')

    // const name = computed(() => {
    //     return firstName.value + lastName.value
    // })
    const name = computed({
        get() {
            return firstName.value + lastName.value
        },
        set() {
            firstName.value + lastName.value
        }
    })
</script>
<style scoped>

</style>