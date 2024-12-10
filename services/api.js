import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/namaproject/public/api', // Sesuaikan dengan URL API Laravel
});

// Fungsi untuk mengambil data resep dari API
export const fetchRecipes = async () => {
  try {
    const response = await api.get('/recipes'); // Sesuaikan dengan route API Laravel
    return response.data; // Kembalikan data yang diterima dari API
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error; // Lempar error jika ada masalah
  }
};
