const express = require('express')
const router=express.Router()
router.get('/',(request,response)=>{
    response.send("This is Product's Display page")
})
module.exports = router