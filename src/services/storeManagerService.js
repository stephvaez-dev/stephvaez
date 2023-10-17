import axios from 'axios';

export async function obtenerTokenDeAcceso(email, password) {
  try {
    const loginData = { email, password };
    const response = await axios.post('https://storemanager.local/api/get-access-token', loginData);
    return response.data.access_token;
  } catch (error) {
    throw new Error('Error al obtener el token de acceso');
  }
}

export async function obtenerCategorias(token) {
  try {
    const response = await axios.post('https://storemanager.local/api/getCategories', null, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener categorías');
  }
}

