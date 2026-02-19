const express = require('express');
const router = express.Router();

const testRoutes = require('./test.routes');
const taskRoutes = require('./task.routes')

 
router.use('/test', testRoutes);
router.use('/', taskRoutes);


module.exports = router;
