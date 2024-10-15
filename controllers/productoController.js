import Producto from '../models/productoModel.js'; 

// Controlador para subir la imagen
export const createProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se subió ninguna imagen.' });
    }

    // Extraer los nuevos campos del body de la solicitud
    const { title, descripcion, cantidad } = req.body;

    // Crear un nuevo producto con la URL de la imagen
    const newProduct = await Producto.create({
      imagen: req.file.path, // Obtiene la URL de la imagen de la respuesta de Multer
      title, 
      descripcion, 
      cantidad
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


// obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await Producto.findAll(); 
    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// obtener producto por ID
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Producto.findByPk(id); // Busca el producto por su ID
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// actualizar un producto
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, descripcion, cantidad } = req.body;

  try {
    const product = await Producto.findByPk(id); // Busca el producto por ID
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Verificar si se subió una nueva imagen
    let imagenUrl = product.imagen; // Mantener la imagen existente por defecto

    if (req.file) {
      imagenUrl = req.file.path; // Si hay una nueva imagen, usar su URL
    }

    // Actualiza los campos del producto
    await product.update({
      title: title || product.title,
      descripcion: descripcion || product.descripcion,
      cantidad: cantidad || product.cantidad,
      imagen: imagenUrl 
    });

    res.status(200).json({
      message: 'Producto actualizado exitosamente',
      product,
    });
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};


//eliminar un producto

export const deleteProduct = async (req, res) => {
  try {
    await Producto.destroy({
      where: { id: req.params.id }
    });
    res.json({
      message: "Registro eliminado"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

