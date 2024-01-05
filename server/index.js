import express from "express"
import mainRouter from "./routers/main_router.js"
import sequelize from "./db.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/delivery_api", mainRouter)
app.use(express.urlencoded({extended: false}))

app.post("/", (req, res) => {
    return res.json(req.body)
})

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()