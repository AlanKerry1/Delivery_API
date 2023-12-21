import Order from "../models/order_model.js"

class OrderController {
    async createOrder(req, res) {
        try {
            await Order.create(req.body)
            res.status(200).json({message: "Order has been created"})
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getNewOrders(req, res) {
        try {
            const orders = await Order.findAll({where: {status: "new"}})
            res.status(200).json(orders)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getCompletedOrders(req, res) {
        try {
            const orders = await Order.findAll({where: {status: "completed"}})
            res.status(200).json(orders)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOneOrder(req, res) {
        try {
            const order = await Order.findOne({where: {id: req.params.id} })
            res.status(200).json(order)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAllOrders(req, res) {
        try {
            const orders = await Order.findAll()
            res.status(200).json(orders)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async updateOrder(req, res) {
        try {
            await Order.update(req.body,
                {where: {id: req.body.id}})
            res.status(200).json({message: "Order has been updated"})
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async deleteOrder(req, res) {
        try {
            await Order.destroy({where: {id: req.params.id}})
            res.status(200).json({message: "Order has been deleted"})
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new OrderController()