const express = require('express');
const app = express();
const { Pool } = require('pg');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./src/config/swagger'); 
const PORT = process.env.PORT || 3000;

app.use(express.json()); 


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});