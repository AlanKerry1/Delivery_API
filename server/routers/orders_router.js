import { Router } from "express"
import OrderController from "../controllers/orders_controller.js"

const router = new Router()

router.post("/", OrderController.createOrder)
router.get("/new", OrderController.getNewOrders)
router.get("/completed", OrderController.getCompletedOrders)
router.get("/", OrderController.getAllOrders)
router.get("/:id", OrderController.getOneOrder)
router.put("/", OrderController.updateOrder)
router.delete("/:id", OrderController.deleteOrder)

export default router