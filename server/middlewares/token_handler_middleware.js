import jwt from "jsonwebtoken"
import { config } from "dotenv"

config()

function tokenDecode(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]

        if (!token) {
            res.status(404).json({message: "Missing token"})
        }

        const user = jwt.verify(token, process.env.SECRET_KEY)
        req.body.userId = user.id

        next()
    } catch (e) {
        res.status(500).json({message: "Ошибка на мидлваре"})
    }
}

export default tokenDecode