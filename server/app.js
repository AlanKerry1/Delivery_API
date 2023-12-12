import express from "express"

const app = new express()

app.listen(5000, () => {
    console.log("Server has been started on port 5000...")
})