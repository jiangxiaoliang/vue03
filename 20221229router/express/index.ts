import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/login', (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*')
    console.log(req.query)
    if (req.query.user === 'admin' && req.query.password === '123') {
        res.json({
            route: [
                {
                    path: '/demo1',
                    name: 'demo1',
                    component: 'demo1.vue'
                },
                {
                    path: '/demo2',
                    name: 'demo2',
                    component: 'demo2.vue'
                },
                {
                    path: '/demo3',
                    name: 'demo3',
                    component: 'demo3.vue'
                }
            ]
        })
    } else if (req.query.user === 'admin2' && req.query.password === '123') {
        res.json({
            route: [
                {
                    path: '/demo1',
                    name: 'demo1',
                    component: 'demo1.vue'
                },
                {
                    path: '/demo2',
                    name: 'demo2',
                    component: 'demo2.vue'
                }
            ]
        })
    } else {
        res.json({
            code: 400,
            message: '账号密码错'
        })
    }
})

app.listen(9999, () => {
    console.log('http://localhost:9999')
})