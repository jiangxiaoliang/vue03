<template>
    <div>
        <table border style="width: 800px">
            <thead>
                <tr>
                    <th>名称</th>
                    <th>数量</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td>{{item.name}}</td>
                    <td><button @click="changeNum(item, false)">-</button>{{item.num}}<button @click="changeNum(item, true)">+</button></td>
                    <td>{{item.price * item.num}}</td>
                    <td><button @click="del(index)">删除</button></td>
                </tr>
            </tbody>
            <tfoot>
                <td></td>
                <td></td>
                <td></td>
                <td>总价：{{$total}}</td>
            </tfoot>
        </table>
    </div>
</template>

<script setup lang='ts'>
    import {ref, reactive, computed } from 'vue'
    type Shop = {
        name: string,
        num: number,
        price: number
    }

    const data = reactive<Shop[]>([
        {
            name: '裤子',
            num: 1,
            price: 100
        },
        {
            name: '衣服',
            num: 1,
            price: 200
        },
        {
            name: '帽子',
            num: 1,
            price: 300
        }
    ])
    const changeNum = function(item: Shop, type: boolean) {
        if (item.num > 0 && !type) {
            item.num--
        }
        if (item.num < 99 && type) {
            item.num++
        }
        // total()
    }
    const del = (index: number) => {
        data.splice(index, 1)
        // total()
    }

    // let $total = ref(0)
    // const total = () => {
    //     $total.value = data.reduce((prev, next) => {
    //         return prev + (next.num * next.price)
    //     }, 0)
    // }
    // total()

    let $total = computed(() => {
        return data.reduce((prev, next) => {
            return prev + (next.num * next.price)
        }, 0)
    })
</script>
<style scoped>

</style>