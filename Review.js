const express = require('express')
const router=express.Router()
router.get('/',(request,response)=>{
    response.send("Give your Feedback here!")
})
module.exports = router