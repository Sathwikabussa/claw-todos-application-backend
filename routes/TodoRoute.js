const {Router} = require("express");
const { getToDo, saveTodo,updateTodo,deleteTodo} = require("../controllers/TodoController");

const routers = Router()

routers.get('/', getToDo)
routers.post('/save', saveTodo)
routers.post('/update', updateTodo)
routers.post('/delete', deleteTodo)

module.exports = routers;