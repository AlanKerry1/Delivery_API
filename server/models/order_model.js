import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const Order = sequelize.define("order", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userName: {type: DataTypes.STRING},
    phoneNumber: {type: DataTypes.INTEGER, unique: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: true},
    peopleCount: {type: DataTypes.INTEGER},
    street: {type: DataTypes.STRING},
    house: {type: DataTypes.INTEGER},
    flat: {type: DataTypes.INTEGER, allowNull:true},
    comment: {type: DataTypes.TEXT, allowNull: true}
})

export default Order