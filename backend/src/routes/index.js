const express = require('express')
const testRoutes = require('./test.routes')

const router = express.Router();

router.get('/', (req,res)=>{
    res.status(200),json({
        status: 'ok',
        success: 'true',
        messsage: 'srever is healthy'
    })

})
router.use('/test',testRoutes)

module.exports = router