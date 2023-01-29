const express = require('express')

const app = express()

app.get('/index2', (req, res) => {
    res.json({
        code: 200,
        message: '我是index2'
    })
})

app.listen(8888, () =>{
    console.log('index start at: http://localhost:8888')
})