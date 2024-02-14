import { Router } from "express"
import BasketController from "../controllers/baskets_controller.js"

const router = new Router()

router.post("/", BasketController.addProductToBasket)
router.get("/", BasketController.getAllProducts)
router.delete("/:productId", BasketController.deleteProduct)
// router.get("/products", UserController.registration)
// router.delete("/products/:id")

export default router