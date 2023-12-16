import { Router } from "express"
import MesController from "../controllers/mes_controller.js"

const router = new Router()

router.post("/message", MesController.sendMessage)

export default router