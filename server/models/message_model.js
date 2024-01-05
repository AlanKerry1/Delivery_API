import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const Message = sequelize.define("message", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    text: {type: DataTypes.TEXT},
    status: {type: DataTypes.ENUM("NEW", "VIEWED"), defaultValue: "NEW"}
})

export default Message