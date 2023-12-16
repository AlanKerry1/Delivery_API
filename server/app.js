import express from "express"
import router from "./routers/user_mes_router.js"
import { config } from "dotenv"
import sequelize from "./db.js"

config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/user_mes_api", router)
app.use(express.urlencoded({extended: false}))

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