import mysql from 'mysql2/promise';
import dbConfig from './config'; 

const createDatabaseConnection = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Conexión a la base de datos MySQL establecida');
    return connection;
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    throw error;
  }
};

export default createDatabaseConnection;
