require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
// const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter' , (req , res) => {
    res.send('My name is Deepak kumar')
})

app.get('/login' , (req, res) => {
    res.send('<h1>You are login to my server</h1>')
})

app.get('/Deepak' , (req, res ) => {
    res.send('<h2>Welcome to My Server</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})