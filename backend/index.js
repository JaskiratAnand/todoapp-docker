const express = require('express');
const cors = require('cors');
const { Todos } = require('./db');
const { createTodo, updateTodo } = require('./types');

const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

app.post('/todo', async (req, res) => {
    const { title, description }  = req.body;
    if(!title || !description) {
        return res.status(204).json({
            msg: "Empty Inputs"
        });
    }

    const result = createTodo.safeParse({ title, description });
    if(!result.success){
        return res.status(411).json({
            msg: "Invalid Inputs"
        });
    }

    // add title and description to mongodb
    try{
        await Todos.create({ title, description });
        res.status(201).send({
            messsage: "Todo created Successfully"
        });
    } catch (err) {
        res.status(500).send({ 
            message: "Error creating admin account", 
            error: err
        });
    }
});

app.get('/todos', async (req, res) => {
    //  view all todos    
    try {
        const allTodos = await Todos.find({});
        res.status(200).json({ todos: allTodos });
    } catch (err) {
        return res.status(500).send({ 
            message: "Error while fetching TODOs"
        });
    }
});


app.put('/completed', async (req, res) => {
    const { id } = req.body;
    if(!id){
        return res.status(204).json({ msg: "no ID found in input" });
    }

    const result = updateTodo.safeParse({ id });
    if(!result.success){
        return res.status(411).json({
            msg: "Invalid input"
        });
    }

    try{
        await Todos.updateOne(
            { _id: id }, 
            { completed: true }
        );

        return res.status(201).json({ msg: "TODO marked as completed!" });
    } catch (err) {
        return res.status(500).send({
            message: "Error while updating TODO"
        })
    }
});

app.delete('/delete', async (req, res) => {
    const { id } = req.body;
    if(!id){
        return res.status(204).json({ msg: "no ID found in input" });
    }

    const result = updateTodo.safeParse({ id });
    if(!result.success){
        return res.status(411).json({
            msg: "Invalid input"
        });
    }

    try{
        await Todos.findByIdAndDelete(id);
        return res.status(204).json({ msg: "succesfuly deleted TODO" });
    } catch (err) {
        return res.status(500).send({
            message: "Error while deleting TODO"
        })
    }
});

app.listen(3000);