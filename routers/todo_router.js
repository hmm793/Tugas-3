const express = require("express")

const router = express.Router()
const controller = require("../controllers/todo_controller")

router.get('/:id', controller.getTodoByID)
router.get('/', controller.getAllTodo)
router.post('/', controller.createTodo)
router.put('/:id', controller.updateTodo)
router.delete('/:id', controller.deleteTodo)

module.exports = router