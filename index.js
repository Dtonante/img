import express from 'express';
import path from 'path';
import productoRoutes from './routes/productoRoutes.js'; // Asegúrate de que la ruta sea correcta

const app = express();

// Middleware para servir archivos estáticos (como el HTML)
app.use(express.static(path.join(process.cwd()))); // Sirve archivos desde la raíz del proyecto

// Middleware para manejar las rutas
app.use('/api/productos', productoRoutes); // Prefijo para las rutas de productos

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
