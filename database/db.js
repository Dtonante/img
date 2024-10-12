import { Sequelize } from 'sequelize';

const db = new Sequelize('producto_universidad', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db;