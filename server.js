const express = require('express');
const app = express();
const { swaggerUi, swaggerSpec } = require('./swagger');

app.use(express.json());


// Configuração do Swagger:
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});