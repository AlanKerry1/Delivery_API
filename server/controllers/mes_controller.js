class MesController {
    sendMessage(req, res) {
        res.send("Hello")
    }
}

export default new MesController()