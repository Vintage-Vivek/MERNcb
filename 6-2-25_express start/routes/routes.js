const express = require('express');
const {createtodo, deletetodo, showtodo} = require('../controler/todolist');

const router = express.Router();


// creation api
router.post('/createtodo',createtodo)



// show api 
router.get('/showtodo', showtodo)



// deletion api
router.delete('/deletetodo',deletetodo)



module.exports = router;