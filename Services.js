const express = require('express')
const router=express.Router()

let listOfServices=[
{
    "id" : 1,
    "name" :"web development"

},
{
    "id": 2,
    "name":"app development"
},
{
    "id": 3,
    "name":"android development"
},
{
    "id": 4,
    "name":"software development"
}
]
 router.get('/',(request,response) =>{
response.send("This is Service Page")
}
)
router.get('/:id',(request,response)=>{
    const ServicesId=Number(request.params.id)
    const getService=listOfServices.find((Services) => Services.id === ServicesId)

if(!getService)
{
    response.status(500).send("Expected service not found")
}
else{
    response.json(getService.name)
}
})

module.exports = router

