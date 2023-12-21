import { Router } from "express"
import OrderController from "../controllers/orders_controller.js"

const router = new Router()

router.post("/orders", OrderController.createOrder)
router.get("/new_orders", OrderController.getNewOrders)
router.get("/completed_orders", OrderController.getCompletedOrders)
router.get("/orders", OrderController.getAllOrders)
router.get("/orders/:id", OrderController.getOneOrder)
router.put("/orders", OrderController.updateOrder)
router.delete("/orders/:id", OrderController.deleteOrder)

export default router