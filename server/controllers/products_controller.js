import Product from "../models/product_model.js"
import * as uuid from "uuid"
import path from "path"
import { fileURLToPath } from 'url';
import fs from "fs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function addImageToStatic(img, imgName) {
    let fileName = imgName || uuid.v4() + ".jpg"
    console.log("debug")
    img.mv(path.resolve(__dirname, "..", "static", fileName))
    
    return fileName
}

class ProductsController {
    async create(req, res) {
        try {
            const {title, price, description} = req.body
            console.log(req.files)
            const {img} = req.files
            const fileName = addImageToStatic(img)
            console.log(fileName)
            const product = await Product.create(
                {title, price, description, img: fileName}
            )
            return res.json(product)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
    
    async getOne(req, res) {
        try {
            const {id} = req.params
            const product = await Product.findOne({where: {id}})
            return res.json(product)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const products = await Product.findAll()
            return res.json(products)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
    
    async update(req, res) {
        try {
            const {id, title, price, description} = req.body
            const {img} = req.files
            const oldProduct = await Product.findOne({where: {id}})
            const imgName = oldProduct.img
            
            if (img) {
                addImageToStatic(img, imgName)
            }

            await Product.update({title, price, description, img: imgName},
                {where: {id}}
            )
            const product = await Product.findOne({where: {id}})
            return res.json(product)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            const product = await Product.findOne({where: {id}})
            fs.unlinkSync(path.resolve(__dirname, "..", "static", product.img))
            await Product.destroy(({where: {id}}))
            return res.json(product)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
}

export default new ProductsController()