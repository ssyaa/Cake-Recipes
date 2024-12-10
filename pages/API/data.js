import mysql from 'mysql2/promise';

export default async function handler(req, res) {
    const connection = await mysql.createConnection({
        host: 'localhost', // IP atau nama host Laragon
        user: 'root',      // Username database
        password: '',      // Password database
        database: 'nama_database' // Nama database Anda
    });

    try {
        const [rows] = await connection.execute('SELECT * FROM nama_tabel'); // Query MySQL
        res.status(200).json(rows); // Kirim data ke front-end
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    } finally {
        connection.end();
    }
}
n