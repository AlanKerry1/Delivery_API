import { Router } from "express"

const router = new Router()

router.post("/orders", (req, res) => {})
router.get("/orders", (req, res) => {})
router.get("/orders/:id", (req, res) => {})
router.delete("/orders/:id", (req, res) => {})

export default router