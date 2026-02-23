 const mongoose = require('mongoose')


 const PORT = process.env.PORT || 5000

 app.listeen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
 })