import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const Message = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true},
    message: {type: DataTypes.TEXT},
    status: {type: DataTypes.STRING, defaultValue: "new"}
})