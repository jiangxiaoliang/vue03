import axios from 'axios'

const server = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getApiList = () => {
    return server.get('/api/list').then(res => res.data)
}