const express = require('express');
const app = express();
const { Pool } = require('pg');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./src/config/swagger'); 
const PORT = process.env.PORT || 3000;
const lembretesRoutes = require('./src/routes/lembretesRoutes')

app.use(express.json()); 

app.use('/lembretes',lembretesRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});