const express = require('express')
const Router = express.Router();
const { MostrarCategorias,CriarCategorias, ApagarCategorias} = require('./../controllers/categoriesCTRS');

Router.get('/',MostrarCategorias)
Router.post('/',CriarCategorias)
Router.delete('/',ApagarCategorias)


/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da categoria
 *         name:
 *           type: string
 *           description: Nome da categoria
 *       example:
 *         id: 1
 *         name: Alimentação
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Lista todas as categorias
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erro ao visualizar as categorias
 */
router.get('/', MostrarCategorias)

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Dados inválidos (nome não pode ser apenas números)
 *       500:
 *         description: Erro ao criar a categoria
 */
router.post('/', CriarCategorias)

/**
 * @swagger
 * /categories:
 *   delete:
 *     summary: Apaga uma categoria
 *     tags: [Categorias]
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
 *                 description: ID da categoria a ser excluída
 *             example:
 *               id: 1
 *     responses:
 *       200:
 *         description: Categoria excluída com sucesso
 *       500:
 *         description: Erro ao excluir a categoria
 */
router.delete('/', ApagarCategorias)

module.exports = Router