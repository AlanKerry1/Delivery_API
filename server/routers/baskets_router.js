import { Router } from "express"
import BasketController from "../controllers/baskets_controller.js"
import TokenHandler from "../middlewares/token_handler_middleware.js"

const router = new Router()

router.post("/", TokenHandler, BasketController.addProductToBasket)
router.get("/", TokenHandler, BasketController.getAllProducts)
router.delete("/:productId", TokenHandler, BasketController.deleteProduct)

export default router