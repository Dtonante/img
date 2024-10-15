import { Router } from 'express';
import upload from '../config/multer.js'; 
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct  } from '../controllers/productoController.js'; 

const router = Router();

// Ruta para subir la imagen
router.post('/upload', upload.single('image'), createProduct);

// Rutas para obtener productos
router.get('/all', getAllProducts); // Obtener todos los productos
router.get('/productos/:id', getProductById); // Obtener un producto por ID

// Ruta para actualizar un producto
router.put('/productos/:id', upload.single('image'), updateProduct);

// Ruta para eliminar un producto
router.delete('/delete/:id', deleteProduct);




export default router;
