const express = require('express')
const router = express.Router()
const Users = require('../schemas/users')

router.post('/signUp', async(req, res)=> {
    const {names, nickname, password} = req.body
    await Users.create({
        names, nickname, password
    })

    console.log("회원가입 완료")
})

router.post('/auth', async(req, res)=> {
    const {nickname, password} = req.body
    console.log(req.body)

    const authFind = await Users.find({nickname, password});
    console.log(authFind)

    if(authFind.length>0){
        console.log("로그인 성공")
    }else{
        console.log("비밀번호가 틀렸습니다.")
    }
})

module.exports = router