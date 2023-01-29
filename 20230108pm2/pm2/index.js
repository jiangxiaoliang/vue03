const express = require('express')

const app = express()

app.get('/index', (req, res) => {
    res.json({
        code: 200,
        message: '我是index'
    })
})

app.listen(9999, () =>{
    console.log('index start at: http://localhost:9999')
})