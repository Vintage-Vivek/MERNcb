const todo = require('../model/todoData');

const createtodo = async (req, res) => {
    try {
        const { inputValue } = req.body;
        if (!inputValue) {
            return res.status(400).json({
                success: false,
                message: "Please provide a todo list"
            });
        }
        const response = await todo.create({ inputValue });
        if (!response) {
            return res.status(400).json({
                message: "Please provide a todo list"
            });
        }
        res.status(200).json({
            success: true,
            message: "Todo list created successfully",
            data: response
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "Failed to create todo list: " + err
        });
    }
};

const deletetodoList = async (req, res) => {
    try {
        const { todoid } = req.params;
        if (!todoid) {
            return res.status(400).json({
                success: false,
                message: "Please provide a todo list id"
            });
        }
        const response = await todo.findByIdAndDelete(todoid);
        if (!response) {
            return res.status(404).json({
                success: false,
                message: "Todo list not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Todo list deleted successfully"
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "Failed to delete todo list: " + err
        });
    }
};

const showtodo = async (req, res) => {
    try {
        const data = await todo.find();
        if (!data) {
            return res.status(400).json({
                success: false,
                message: "No todo list found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data: data
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "Failed to show todo list: " + err
        });
    }
};

module.exports = { createtodo, deletetodoList, showtodo };
