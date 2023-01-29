import { track, trigger } from './effect'

const isObj = (obj: any) => obj !== null && typeof obj === 'object'
export const reactive:any = <T extends object>(target: T) => {
    return new Proxy(target, {
        get(target, key, receiver) {
            let res = Reflect.get(target, key, reactive) as object
            track(target, key)
            if (isObj(res)) {
                return reactive(res)
            }
            return res
        },
        set(target, key, value, receiver) {
            let res = Reflect.set(target, key, value, receiver)
            trigger(target, key)
            return res
        }
    })
}