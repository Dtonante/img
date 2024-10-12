import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import cloudinary from './cloudinary.js'; // Asegúrate de que la ruta sea correcta

// Configura el almacenamiento en Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'productosImg', // Cambia esto al nombre de la carpeta que desees en Cloudinary
  allowedFormats: ['jpg', 'png', 'jpeg'], // Formatos permitidos
});

// Configura Multer
const upload = multer({ storage: storage });

export default upload;
