
// server intensite karna 
const express = require('express')
const app = express()
// .env config load karna
require('dotenv').config()
const PORT = process.env.PORT || 3000

//middleware to parse json request body
app.use(express.json());

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})


