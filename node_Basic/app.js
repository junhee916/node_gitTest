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

app.use('/uploads',express.static('uploads'))

const userRouter = require('./routers/users')
const boardRouter = require('./routers/boards')
const detailRouter = require('./routers/detail')
const profileRouter = require('./routers/profile')

app.use('/user', [userRouter])
app.use('/board', [boardRouter])
app.use('/detail', [detailRouter])
app.use('/profile', [profileRouter])


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

app.get('/profile', (req, res)=>{
    res.render('profile')
})

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`)
})
