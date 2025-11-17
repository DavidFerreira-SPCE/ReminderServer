const express = require('express')
const Router = express.Router();
const {CreateNewUser,UpdateUser,DeleteUser} = require('./../controllers/usersCTRS')

Router.post('/',CreateNewUser)
Router.put('/',UpdateUser)
Router.delete('/',DeleteUser)

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - usermail
 *         - userpassword
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do usuário
 *         usermail:
 *           type: string
 *           format: email
 *           description: Email do usuário
 *         userpassword:
 *           type: string
 *           format: password
 *           description: Senha do usuário
 *       example:
 *         usermail: joao@exemplo.com
 *         userpassword: senha123
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro ao criar o usuário
 */
Router.post('/', CreateNewUser)

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               usermail:
 *                 type: string
 *                 format: email
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro ao atualizar o usuário
 */
Router.put('/:id', UpdateUser)

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Deleta um usuário
 *     tags: [Usuários]
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
 *                 description: ID do usuário a ser excluído
 *             example:
 *               id: 1
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso
 *       500:
 *         description: Erro ao excluir o usuário
 */
Router.delete('/', DeleteUser)

module.exports = Router