const express = require('express');
const { createtodo, deletetodoList, showtodo } = require('../controllers/todolist');

const router = express.Router();

// Creation API
router.post('/createtodo', createtodo);

// Show API
router.get('/showtodo', showtodo);

// Deletion API
router.delete('/deletetodo/:todoid', deletetodoList);

module.exports = router;
