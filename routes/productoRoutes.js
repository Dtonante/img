import { Router } from 'express';
import upload from '../config/multer.js'; // Asegúrate de que la ruta sea correcta
import { uploadImage } from '../controllers/productoController.js'; // Asegúrate de que la ruta sea correcta

const router = Router();

// Ruta para subir la imagen
router.post('/upload', upload.single('image'), uploadImage);

export default router;
