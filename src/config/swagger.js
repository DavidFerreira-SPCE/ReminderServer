const swaggerJsDoc = require('swagger-jsdoc'); 
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Lembretes',
            version: '1.0.0',
            description: 'API para gerenciamento de lembretes de medicamentos',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
        tags: [
      {
        name: 'Lembretes',
        description: 'Gerenciamento de lembretes'
      },
    ]
},
    apis: ['./routes/*.js', './controllers/*.js'],
};

// Compila a documentação
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// EXPORTAÇÃO: O server.js recebe este objeto
module.exports = swaggerDocs;