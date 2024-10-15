import express from 'express';
import path from 'path';
import productoRoutes from './routes/productoRoutes.js'; // Asegúrate de que la ruta sea correcta

import cors from 'cors';


const app = express();

app.use(cors());

// Middleware para servir archivos estáticos (como el HTML)
app.use(express.static(path.join(process.cwd()))); 

// Middleware para analizar cuerpos JSON
app.use(express.json()); 

// Middleware para manejar las rutas
app.use('/api/productos', productoRoutes); 

// Inicia el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
