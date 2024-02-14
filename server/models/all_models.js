import Message from "./message_model.js"
import Order from "./order_model.js"
import Product from "./product_model.js"
import User from "./user_model.js"
import Basket from "./basket_model.js"
import BasketProduct from "./basket_product_model.js"

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.belongsToMany(Product, {through: BasketProduct})
Product.belongsToMany(Basket, {through: BasketProduct})

console.log("#################################################################################################")

export default {
    Message,
    Order,
    Product,
    User,
    Basket,
    BasketProduct
}