const express = require('express')
const app = express()
const port = 3000 

// mongoose연결 
app.js

const connect = require('./schemas')
connect()

//body
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const userRouter = require('./routers/users')
const boardRouter = require('./routers/boards')
const detailRouter = require('./routers/detail')

app.use('/user', [userRouter])
app.use('/board', [boardRouter])
app.use('/detail', [detailRouter])

//ejs setting 
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs')

app.get('/', (req, res)=> {
    res.render('auth')
})

app.get('/signUp', (req, res)=> {
    res.render('signUp')
})

app.get('/board', (req, res)=> {
    res.render('boards')
})

app.get('/detail', (req, res)=> {
    res.render('detail')
})

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`)
})
