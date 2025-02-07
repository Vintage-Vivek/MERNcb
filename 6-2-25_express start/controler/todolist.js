const todo = require ('../model/todoData');

const createtodo = async (req, res ) => {
    try{
        const {inputValue} = req.body;
        if(!inputValue){
            return res.status(400).json({
                success : false,
                message : "Please provide a todo list"
            })
        }
        const response = await todo.create({
            inputValue: inputValue,
            })
        if (!response) {
            return res.status(400).json({
                message : "Please provide a todo list"
            })
        }
        res.status(200).json({
            success : true,
            message : "Todo list created successfully",
            data : response
        })



    }catch(err){
        return res.status(400).json({
            sucess : false,
            message : "failed to create todo list" + err
        })
    }    
}

const deletetodoList = async (req,res) => {
    try{
        const {todoid} = req.params;
        if(!todoid){
            return res.status(400).json({
                success : false,
                message : "Please provide a todo list id"
            })
        }
        const response = await todo.findByIdAndDelete(todoid);
    }catch(err){
        return res.status(400).json({
            sucess : false,
            message : "failed to delete todo list" + err
        })
    }
}

const showtodo = async (req,res)=>{
    try{
        const data = await todo.find()
                
        if(!data){
            return res.status(400).json({
                success:false,
                message: "No Todo list found",
            });
        }

        res.status(200).json({
            success:true,
            message:"data fetch successfuly",
            data:data,
        })

    }catch(err){
        return res.status(400).json({
            success: false,
            message: "failed to show  Todo list " + err,
          });
    }
}

modules.exports = {createtodo, deletetodo, showtodo}