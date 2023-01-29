export const axios = {
    get <T>(url: string): Promise<T> {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest()
            xhr.open('get', url)
            xhr.onload = function() {
                setTimeout(() => {
                    resolve(JSON.parse(xhr.responseText))
                }, 2000)
            }
            xhr.send()
        })
    }
}