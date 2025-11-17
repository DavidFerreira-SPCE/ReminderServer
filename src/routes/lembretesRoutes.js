const express = require('express');
const Router = express.Router();
const { listarLembrete, listarLembreteByMedicamento, criarLembrete, apagarLembrete } = require('./../controllers/lembretesCTRS');

/**
 * @swagger
 * components:
 *   schemas:
 *     Lembrete:
 *       type: object
 *       required:
 *         - nomeRemedio
 *         - horario
 *       properties:
 *         id:
 *           type: integer
 *           description: ID gerado automaticamente
 *           readOnly: true
 *         nomeRemedio:
 *           type: string
 *           description: Nome do medicamento
 *         horario:
 *           type: string
 *           format: time
 *           description: Horário do lembrete (formato HH:MM)
 *         recorrencia:
 *           type: string
 *           description: Ex 'A cada 12 horas'
 *       example:
 *         nomeRemedio: Cloridrato de Metformina
 *         horario: "08:00:00"
 *         recorrencia: "12 em 12 horas"
 */

/**
 * @swagger
 * tags:
 *   name: Lembretes
 *   description: Gerenciamento de remédios
 */

/**
 * @swagger
 * /lembretes:
 *   get:
 *     summary: Lista todos os Lembretes
 *     tags: [Lembretes]
 *     responses:
 *       200:
 *         description: Lista de lembretes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lembrete'
 */
Router.get('/', listarLembrete);

/**
 * @swagger
 * /lembretes/busca:
 *   get:
 *     summary: Busca lembretes por nome do medicamento (parcialmente)
 *     tags: [Lembretes]
 *     parameters:
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome do remédio para filtrar
 *     responses:
 *       200:
 *         description: Lembretes encontrados
 */
Router.get('/busca', listarLembreteByMedicamento);

/**
 * @swagger
 * /lembretes:
 *   post:
 *     summary: Cria um novo lembrete
 *     tags: [Lembretes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Lembrete'
 *     responses:
 *       201:
 *         description: Lembrete criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lembrete'
 *       400:
 *         description: Dados incompletos ou inválidos
 */
Router.post('/', criarLembrete);

/**
 * @swagger
 * /lembretes/{id}:
 *   delete:
 *     summary: Apaga um lembrete pelo ID
 *     tags: [Lembretes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do lembrete a ser deletado
 *     responses:
 *       200:
 *         description: Lembrete excluído com sucesso
 *       404:
 *         description: Lembrete não encontrado
 */
Router.delete('/:id', apagarLembrete);

module.exports = Router;