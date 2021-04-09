const express = require('express')
const router = express.Router()
const Boards = require('../schemas/boards')
const authMiddleware = require('../auth-Middleware/authMiddleware')

router.post('/writes', authMiddleware, async(req, res)=> {
    let result = {status: 'success'};
    const user = res.locals.user;
    console.log(res.locals.user)
    try{
        await Boards.create({
            contents: req.body['contents'],
            nickname:user.nickname
        })
        console.log("contents 작성 완료")
        res.json(result)

    }catch(err){
        console.log(err)
        result['status'] = 'fail'
    }

})

module.exports = router