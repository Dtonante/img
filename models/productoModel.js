import { DataTypes } from 'sequelize';
import db from '../database/db.js'; 

const Producto = db.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    imagen: {
        type: DataTypes.STRING, 
        allowNull: true, 
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'productos',
    // Agregar createdAt y updatedAt automáticamente
    timestamps: true, 
});


// Sincronizar el modelo con la base de datos
const sync = async () => {
    try {
        await db.sync({ force: false});
        console.log('Modelo sincronizado con la base de datos');
    } catch (error) {
        console.error('Error al sincronizar el modelo:', error);
    }
};

sync();

export default Producto;
