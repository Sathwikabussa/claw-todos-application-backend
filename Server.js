const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const routes = require('./routes/TodoRoute')
const authRoutes = require('./routes/AuthRoutes'); 

require('dotenv').config()

const app = express()

const PORT = process.env.port || 4000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected to MongoDB....`))
.catch((err) => console.log(err))

app.use(routes)
app.use('/auth', authRoutes);
app.listen(PORT, () => console.log(`Listening on: ${PORT}`))