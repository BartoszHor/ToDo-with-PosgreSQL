const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")


//middleware//

app.use(cors());
app.use(express.json())


//routes//

//create a todo//

app.post("/todos", async(req, res) => {
    try {
        const {description} = req.body
        const {rows: newTask} = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
        res.json(newTask)
    } catch (err) {
        console.error(err.message)
    }
})

//get all todos//

app.get("/todos", async(req, res) => {
    try {
        const {rows: allTasks}  = await pool.query("SELECT * FROM todo")
        res.json(allTasks)
    } catch (err) {
        console.error(err.message)
    }
})

//get a todo//

app.get("/todos/:id", async(req, res) => {
    const { id } = req.params
    try {
        const {rows: task}  = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
        res.json(task)
    } catch (err) {
        console.error(err.message)
    }
})

//update a todo//

app.put("/todos/:id", async(req, res) => {
    const { id } = req.params
    const { description } = req.body
    try {
        const {rows: updatedTask}  = await pool.query("UPDATE todo SET description = $2 WHERE todo_id = $1 RETURNING *", [id, description])
        res.json(updatedTask)
    } catch (err) {
        console.error(err.message)
    }
})

//delete a todo//

app.delete("/todos/:id", async(req, res) => {
    const { id } = req.params
    try {
        const {rows: task}  = await pool.query("DELETE FROM todo WHERE todo_id = $1 RETURNING *", [id])
        res.json(task)
    } catch (err) {
        console.error(err.message)
    }
})


app.listen(5000, () => {
    console.log('server started! Port 5000')
})


