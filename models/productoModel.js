import { DataTypes } from 'sequelize';
import db from '../database/db.js'; // Asegúrate de que la ruta sea correcta

const Producto = db.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    imagen: {
        type: DataTypes.STRING, // Puedes usar STRING para almacenar la URL o el nombre del archivo de la imagen
        allowNull: false, // Hacer que sea obligatorio
    }
}, {
    tableName: 'productos',
    timestamps: true, // Agregar createdAt y updatedAt automáticamente
});


// Sincronizar el modelo con la base de datos
const sync = async () => {
    try {
        await db.sync();
        console.log('Modelo sincronizado con la base de datos');
    } catch (error) {
        console.error('Error al sincronizar el modelo:', error);
    }
};

sync();

export default Producto;
