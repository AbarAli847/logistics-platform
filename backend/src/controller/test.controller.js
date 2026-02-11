const {apiresponse} = require('../utils/apiResponse')

const testApi = (req,res)=>{
    return apiresponse(res,200,true,'test api working',null)

};
module.exports= testApi