const express = require("express")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const cors = require("cors")
require("dotenv").config();
const app = express()

app.use(cors())
app.use(express.json())
connectDB()

app.use("/api/users", userRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ...`)
})
