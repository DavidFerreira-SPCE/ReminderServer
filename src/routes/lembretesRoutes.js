const express = require('express')
const Router = express.Router();
const {listarLembrete,listarLembreteByMedicamento,criarLembrete,apagarLembrete} = require('./../controllers/lembretesCTRS');

Router.get('/',listarLembrete)
Router.get('/',listarLembreteByMedicamento)
Router.post('/',criarLembrete)
Router.delete('/',apagarLembrete)


/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - nomeRemedio
 *         nomeRemedio:
 *           type: string
 *           description: Nome da categoria
 *       example:
 *         nomeRemedio: Cloridrato de Metformina
 */
Router.get('/',listarLembreteByMedicamento)

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Lista todos os Lembretes
 *     tags: [lembretes]
 *     responses:
 *       200:
 *         description: Lista de lembretes retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/lembretes'
 *       500:
 *         description: Erro ao visualizar os lembretes
 */
Router.get('/',listarLembrete)

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Cria um novo lembrete
 *     tags: [lembretes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/lembretes'
 *     responses:
 *       200:
 *         description: Lembrete criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/lembretes'
 *       500:
 *         description: Erro ao criar o lembrete
 */
Router.post('/',criarLembrete)

/**
 * @swagger
 * /categories:
 *   delete:
 *     summary: Apaga um lembrete
 *     tags: [lembretes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID do lembrete a ser deletado do registro
 *             example:
 *               id: 1
 *     responses:
 *       200:
 *         description: Lembrete excluido com sucesso
 *       500:
 *         description: Não foi possivel apagar o lembrete
 */
Router.delete('/', apagarLembrete)

module.exports = Router