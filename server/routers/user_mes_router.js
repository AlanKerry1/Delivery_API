import { Router } from "express"
import MesController from "../controllers/mes_controller.js"

const router = new Router()

router.post("/messages", MesController.createMessage)
router.get("/messages/:id", MesController.getOneMessage)
router.get("/new_messages", MesController.getNewMessages)
router.get("/viewed_messages", MesController.getViewedMessages)
router.get("/messages", MesController.getAllMessages)
router.put("/messages", MesController.updateMessage)
router.delete("/messages/:id", MesController.deleteMessage)

export default router