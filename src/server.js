const express = require('express');
const app = express();
const swaggerDocs = require('./config/swagger');  // ← importa a documentação
const lembretesRoutes = require('./routes/lembretesRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs)); // ← usa swaggerDocs direto!
app.use('/lembretes', lembretesRoutes);
app.use('/users',usersRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});