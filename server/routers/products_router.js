import { Router } from "express"
import ProductsController from "../controllers/products_controller.js"

const router = new Router()

router.post("/", ProductsController.create)
router.get("/", ProductsController.getAll)
router.get("/:id", ProductsController.getOne)
router.put("/", ProductsController.update)
router.delete("/:id", ProductsController.delete)

export default router