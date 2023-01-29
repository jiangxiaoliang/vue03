import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'

const app: Express = express()
const data = require('./data.json')

const router: Router = express.Router()

app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.use('/api', router)

router.get('/list', async (req: Request, res: Response) => {
    // const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf')
    const result = data
    res.json({
        ...result.data
    })
})

app.listen(3000, () => {
    console.log('server start at: http://localhost:3000')
})

