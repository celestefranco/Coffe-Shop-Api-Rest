const mongoose = require('mongoose');

// Define la cadena de conexión a MongoDB
const mongoURI = 'mongodb://127.0.0.1:27017/apicoffee'; // Reemplaza con tu propia cadena de conexión

// Conecta a la base de datos
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Conexión exitosa a la base de datos MongoDB');
})
.catch((err) => {
  console.error('Error al conectar a la base de datos:', err.message);
});

// Exporta la conexión para que pueda ser utilizada en otros módulos
module.exports = mongoose.connection;