import { Router } from "express"
import messagesRouter from "./messages_router.js"
import ordersRouter from "./orders_router.js"
import userRouter from "./users_router.js"

const router = new Router()

router.use("/messages", messagesRouter)
router.use("/orders", ordersRouter)
router.use("/users", userRouter)

export default router