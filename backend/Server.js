
const express = require('express')
const app = express();

app.use(express.json())

app.get('/health',(req,res)=>{
   res.status(200).json({
    status: 'ok',
    message: 'Backend server is running '
   })
})

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})