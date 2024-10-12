import { v2 as cloudinary } from 'cloudinary';

// Configura Cloudinary con tus credenciales
cloudinary.config({
  cloud_name: 'dgpnese5k', // Reemplaza con tu Cloud Name
  api_key: '348556768723381',       // Reemplaza con tu API Key
  api_secret: 'tUT8_sNINZmZmBMQKUX_T4pko9c'  // Reemplaza con tu API Secret
});

export default cloudinary;
