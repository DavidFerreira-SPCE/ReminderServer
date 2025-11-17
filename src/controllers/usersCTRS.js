const pool = require('../config/db.js');

const CreateNewUser = async (req,res) => {
    const [usermail, userpassword] = req.body
    if (!usermail || !userpassword) {
        return res.status(404).json({error: 'Preencha as informações antes de apertar, seu fela'})
 }    try {
        const adicionar = await pool.query('INSERT INTO users (username, usermail, userpassword) VALUES ($1, $2) RETURNING *'
            [usermail,userpassword])
        res.status(200).json(adicionar.rows)
    } catch (err) {
        console.error('Falha na requisição', err)
        res.status(500).json({ error: 'Não foi possivel listar o usuário' })
    }
}

const UpdateUser = async (req, res) => {
    const { id } = req.params;
    const { usermail,userpassword } = req.body;
    try {
        const requistion = await pool.query(
            `UPDATE users SET usermail = $1, iserpassword = $2 WHERE id = $3 RETURNING *`,
            [usermail, userpassword, id]
        );
        res.status(200).json(requistion.rows[0]);
    } catch (err) {
        console.error('Failed to change user informations', err);
        res.status(500).json({ error: 'Não foi possível alterar os dados' });
    }
}

const DeleteUser = async(req,res) => {
    const {id} = req.body
    try {
        const apagar = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id])
        res.status(200).json(apagar.rows)
    } catch (err) {
        console.error('Error on the request', err)
        res.status(500).json({ error: 'Não foi possivel apagar a conta' })
    }
}

module.exports= {CreateNewUser,UpdateUser,DeleteUser}