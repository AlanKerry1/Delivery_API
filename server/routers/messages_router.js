import { Router } from "express"
import MesController from "../controllers/messages_controller.js"

const router = new Router()

router.post("/", MesController.createMessage)
router.get("/:id", MesController.getOneMessage)
router.get("/new", MesController.getNewMessages)
router.get("/viewed", MesController.getViewedMessages)
router.get("/", MesController.getAllMessages)
router.put("/", MesController.updateMessage)
router.delete("/:id", MesController.deleteMessage)

export default router