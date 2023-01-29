import { defineStore } from 'pinia'

type User = {
    name: string,
    age: number
}

const login = (): Promise<User> => {
    return new Promise((resovle) => {
        setTimeout(() => {
            resovle({
                name: 'login',
                age: 18
            })
        }, 1)
    })
}

export const useTestStore = defineStore('test', {
    state: () => {
        return {
            current: 1,
            name: '小红',
            user: <User>{}
        }
    },
    // 计算属性
    getters: {
        newName(): string {
            return `$-${this.name}`
        }
    },
    // methods 同步和异步 提交state
    actions: {
        setCurrent(num: number) {
            this.current = num
        },
        async setUser() {
            const result = await login()
            this.user = result
            this.setCurrent(666)
        }
    }
})

export const useBase = defineStore('base', {
    state: () => {
        return {
            baseCurrent: 12
        }
    },
    actions: {
        setBaseCurrent() {
            this.baseCurrent = 888
        }
    }
})