import axios from 'axios';

export async function obtenerTokenDeAcceso(email, password) 
{
  try {
    const loginData = { email, password };
    const response = await axios.post('https://storemanager.local/api/get-access-token', loginData);
    return response.data.access_token;
  } catch (error) {
    throw new Error('Error al obtener el token de acceso');
  }
}

export async function obtenerCategorias(token) 
{
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

export async function obtenerProductos(token)
{
  try{
    const response = await axios.post('https://storemanager.local/api/getProducts', null, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    return response.data;
  }catch{
    throw new Error('Error al obtener los productos');
  }
}

export async function obtenerProductoPorId(token, idarticulo)
{
  try{
    const response = await axios.get('https://storemanager.local/api/getProduct/'+idarticulo, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    return response.data;
  }catch{
    throw new Error('Error al obtener  producto');
  }
}