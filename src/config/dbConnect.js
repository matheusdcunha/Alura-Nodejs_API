import mongoose, { mongo } from "mongoose";

async function conectarNaDataBase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default conectarNaDataBase;

// mongodb+srv://admin:admin123@cluster0.km1zb1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
