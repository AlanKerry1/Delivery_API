import Message from "../models/message_model.js"

class MesController {
    async createMessage(req, res) {
        try {
            const message = await Message.create(req.body)
            res.status(200).json({message: "Message has been created"})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Server error"})
        }
    }
    async getOneMessage(req, res) {
        try {
            const message = await Message.findOne({where: {id: req.params.id} })
            res.status(200).json(message)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Server error"})
        }
    }
    async getNewMessages(req, res) {
        try {
            const message = await Message.findAll({where: {status: "new"} })
            res.status(200).json(message)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Server error"})
        }
    }
    async getViewedMessages(req, res) {
        try {
            const message = await Message.findAll({where: {status: "viewed"} })
            res.status(200).json(message)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Server error"})
        }
    }
    async getAllMessages(req, res) {
        try {
            const message = await Message.findAll()
            res.status(200).json(message)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Server error"})
        }
    }
    async updateMessage(req, res) {
        try {
            const message = await Message.update(req.body,
                {where: {id: req.body.id}})
            res.status(200).json({message: "Message has been updated"})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Server error"})
        }
    }
    async deleteMessage(req, res) {
        try {
            const message = await Message.destroy({where: {id: req.body.id} })
            console.log(message)
            res.status(200).json({message: "Message has been deleted"})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Server error"})
        }
    }
}

export default new MesController()