import Producto from '../models/productoModel.js'; // Asegúrate de que la ruta sea correcta

// Controlador para subir la imagen
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se subió ninguna imagen.' });
    }

    // Crear un nuevo producto con la URL de la imagen
    const newProduct = await Producto.create({
      imagen: req.file.path, // Obtiene la URL de la imagen de la respuesta de Multer
    });

    res.status(201).json({
      message: 'Imagen subida y producto creado exitosamente',
      product: newProduct,
    });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ error: 'Error al subir la imagen.' });
  }
};
