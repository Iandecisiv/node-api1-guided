const express = require('express')
const db = require("./database")

const server = express()

// This is installing some middleware to allow Express too parese incoming JSON request bodies
server.use(express.json())

server.get("/", (req, res) => {
    res.json({ message: "Hello, Worrld" })
})

server.get("/users", (req, res) => {
    // get a list of users from the "fake" database
    const users = db.getUsers()
    res.json(users)
})

server.get("/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id)
    
    if (user) {
        //send the response back
        res.json(user)
    } else {
        res.status(404).json({
            message: "User not found",
        })
    }
})

server.post("/users", (req, res) => {
    const newUser = db.createUser({
        name: req.body.name,
    })
    
    res.status(201).json(newUser)
})

server.put("/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id)
    
    if (user) {
        const updatedUser = db.updateUser(user.id, {
            name: req.body.name,
        })
        res.jsoon(updatedUser)
        
    } else {
        res.status(404).json({
            message: "User not found",
        })
    }
})

module.exports = server
