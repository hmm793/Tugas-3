const fs = require('fs')

const getTodoByID = (req, res) =>{
    const id = req.params.id
    let tempData = fs.readFileSync(__dirname + '/../models/todo_model.json', {encoding : "utf-8"});
    let data = JSON.parse(tempData);
    let dataArr = data.filter(el=> el.id == id)
    res.json(dataArr[0]);
}
const getAllTodo = (req, res) =>{
    let tempData = fs.readFileSync(__dirname + '/../models/todo_model.json', {encoding : "utf-8"});
    let data = JSON.parse(tempData);
    res.json(data);
}

const createTodo= (req, res)=>{
    const newTodo = req.body

    console.log(newTodo);
    const tempTodos = fs.readFileSync(__dirname + "/../models/todo_model.json", { encoding : "utf-8" })
    const currTodos = JSON.parse(tempTodos)
    currTodos.push(newTodo)


    fs.writeFileSync(__dirname + "/../models/todo_model.json", JSON.stringify(currTodos))

    res.json(newTodo)

}

const updateTodo = (req, res) => {
    const udpatedTodo = req.body
    const id = req.params.id

    const tempData = fs.readFileSync(__dirname+"/../models/todo_model.json", {encoding : "utf-8"})
    const currData = JSON.parse(tempData)

    currData.forEach(el => {
        if (el.id == id) {
            el.name = udpatedTodo.name
            el.done = udpatedTodo.done
        }
    });

    fs.writeFileSync(__dirname+"/../models/todo_model.json", JSON.stringify(currData))

    res.json({
        id : id,
        name : udpatedTodo.name, 
        done : udpatedTodo.done
    })
}
const deleteTodo = (req, res) => {
    const id = req.params.id

    const tempData = fs.readFileSync(__dirname+"/../models/todo_model.json", {encoding : "utf-8"})
    const currData = JSON.parse(tempData)

    const deletedTodo = currData.filter(el=>el.id != id)

    fs.writeFileSync(__dirname+"/../models/todo_model.json", JSON.stringify(deletedTodo))

    res.json({
        message : "Berhasil Delete Todo"
    })
}

module.exports = {
    getAllTodo, getTodoByID, createTodo, updateTodo, deleteTodo
}