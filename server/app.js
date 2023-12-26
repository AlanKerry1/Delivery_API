import express from "express"
import user_mes_router from "./routers/user_mes_router.js"
import orders_router from "./routers/orders_router.js"
import { config } from "dotenv"
import sequelize from "./db.js"
import cors from "cors"

config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/online_store/user_mes_api", user_mes_router)
app.use("/online_store/orders_api", orders_router)
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