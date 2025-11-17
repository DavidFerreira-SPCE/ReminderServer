const express = require('express');
const Router = express.Router();

const { listarLembrete, listarLembreteByMedicamento, criarLembrete, apagarLembrete } = require('./../controllers/lembretesCTRS');

/**
 * @swagger
 * components:
 * schemas:
 * Lembrete:
 * type: object
 * required:
 * - nomeRemedio
 * - horario
 * properties:
 * id:
 * type: integer
 * description: ID gerado automaticamente
 * nomeRemedio:
 * type: string
 * description: Nome do medicamento
 * horario:
 * type: string
 * description: Horário do lembrete
 * example:
 * nomeRemedio: Cloridrato de Metformina
 * horario: "08:00"
 */

/**
 * @swagger
 * tags:
 * name: Lembretes
 * description: Gerenciamento de remédios
 */

/**
 * @swagger
 * /lembretes:
 * get:
 * summary: Lista todos os Lembretes
 * tags: [Lembretes]
 * responses:
 * 200:
 * description: Lista de lembretes retornada com sucesso
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Lembrete'
 */
Router.get('/', listarLembrete);

/**
 * @swagger
 * /lembretes/busca:
 * get:
 * summary: Busca lembrete por nome do medicamento
 * tags: [Lembretes]
 * parameters:
 * - in: query
 * name: nome
 * schema:
 * type: string
 * description: Nome do remédio para filtrar
 * responses:
 * 200:
 * description: Lembrete encontrado
 */

Router.get('/busca', listarLembreteByMedicamento);

/**
 * @swagger
 * /lembretes:
 * post:
 * summary: Cria um novo lembrete
 * tags: [Lembretes]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Lembrete'
 * responses:
 * 200:
 * description: Lembrete criado com sucesso
 */
Router.post('/', criarLembrete);

/**
 * @swagger
 * /lembretes/{id}:
 * delete:
 * summary: Apaga um lembrete pelo ID
 * tags: [Lembretes]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * description: ID do lembrete
 * responses:
 * 200:
 * description: Lembrete excluido com sucesso
 */

Router.delete('/:id', apagarLembrete);

module.exports = Router;