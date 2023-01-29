// 使用jsx三种方式: 返回一个渲染函数 optonsApi setup函数

// export default function() {
//     return (<div>小王</div>)
// }

// import { defineComponent } from 'vue'
// export default defineComponent({
//     data() {
//         return {
//             age: 23
//         }
//     },
//     render() {
//         return (<div>{this.age}</div>)
//     }
// })

// 支持v-show
// ref template会自动解包，tsx需要手动
// v-if不支持 使用三元表达式代替
// 使用数组循环代替v-for
// 插槽
import { defineComponent, ref } from "vue"

// const A = (props, {slots}) => {
//     return (<>
//         <div>{slots.default ? slots.default() : '默认值'}</div>
//         <div>{slots.foo?.()}</div>
//     </>)
// }

interface Props {
    name: string
}

export default defineComponent({
    props: {
        name: String
    },
    emits: ['on-click'],
    setup(props, {emit}) {
        const flag = ref(false)
        const data = [
            {
                name: 'name1'
            },
            {
                name: 'name2'
            },
            {
                name:'name3'
            }
        ]
        const fn = (value: any) => {
            console.log('触发了', value)
            emit('on-click', value)
        }
        // const slots = {
        //     default: () => (<div>默认插槽</div>),
        //     foo: () => (<div>foo插槽</div>)
        // }
        const v = ref<string>('')
        return () => (<div>
            <div v-show={flag.value}>小王setup</div>
            <div>{flag.value ? 'true' : 'false'}</div>
            <hr />
            {data.map(item => {
                return (<div onClick={() => fn(item.name)} name={item.name}>{item.name}</div>)
            })}
            <hr />
            <div>props: {props.name}</div>
            <hr />
            {/* <A v-slots={slots}></A> */}
            <hr />
            <input type="text" v-model={v.value} />
            {v.value}
        </div>)
    }
})


