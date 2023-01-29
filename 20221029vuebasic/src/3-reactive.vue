<template>
    <div>
        <input v-model="form.name" type="input" />
        <br />
        <input v-model="form.age" type="input" />
        <br />
        <button @click.prevent="submit">提交</button>
        <ul>
            <li v-for="item in arr" :key="item">
                {{item}}
            </li>
        </ul>
        <button @click="add">添加</button>

        <div>
            {{obj}}
            {{obj2}}
            <button @click="change">只读属性</button>
        </div>
        
        <div>
            {{person}}
            <button @click="edit">shallowReactive修改</button>
        </div>
    </div>
</template>

<script setup lang='ts'>
    import { reactive, readonly, shallowReactive } from 'vue'
    /**
     * ref 和 reactive
     * 1、ref 支持所有的类型，reactive 支持引用类型 Array Object Map Set
     * 2、ref 取值 赋值 都需要加.value, reactive 不需要.value
     * 3、reactive proxy 不能直接复制，否则会破坏响应式对象(解决方案：push加结构，定义一个对象把数组作为对象的属性)
     */

     type F = {
        name: string,
        age: number
     }
    const form = reactive({
        name: '小红',
        age: 20
    })
    const submit = () => {
        console.log(form)
    }

    let arr = reactive<string[]>([])
    const add = () => {
        // arr.push('a')

        setTimeout(() => {
            // arr.push('a', 'b', 'c')

            let res = ['a', 'b', 'c']
            // arr = res
            arr.push(...res)
        }, 1000)
        console.log(arr)
    }

    const obj = reactive({
        name: '小王'
    })
    const obj2 = readonly(obj)
    const change = () => {
        obj.name = '大王'
        console.log(obj, obj2)
    }

    const person: any = shallowReactive({
        foo: {
            bar: {
                num: 13
            }
        }
    })
    const edit = () => {
        person.foo.bar.num = 88 // 不是响应式

        // person.foo = { name: 'xx' } // 只能响应第一层

        arr.push('影响shallowReactive')
    }
</script>
<style scoped>

</style>