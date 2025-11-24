const express = require('express');
const app = express();
const path = require('path');
const swaggerDocs = require('./config/swagger');
const lembretesRoutes = require('../src/routes/lembretesRoutes.js'); 
const usersRoutes = require('../src/routes/usersRoutes.js')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/lembretes', lembretesRoutes);
app.use('/users',usersRoutes)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});