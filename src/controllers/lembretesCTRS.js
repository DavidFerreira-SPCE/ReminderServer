const pool = require('../config/db.js');

const ListarLembretes = async (_, res) => {
    try {
        const view = await pool.query('SELECT * FROM lembretes')
        res.status(200).json(view.rows)
    } catch (err) {
        console.error('Falha em exibir', err)
        res.status(500).json({ error: 'Não foi possivel visualizar os tipos de registros' })
    }
}

const ListarLembretesByMedicamento = async (req, res) => {
    const { nomeRemedio } = req.body
    const viewName = await pool.query('SELECT * FROM lembretes WHERE nomeRemedio = $1'[nomeRemedio])
    res.status(200).json(viewName.rows)
}


const CriarRegistro = async (req, res) => {
    try {
        const tipo = await pool.query('SELECT * FROM registros')
        res.status(200).json(tipo.rows)
    } catch (err) {
        console.error('Falha na requisição', err)
        res.status(500).json({ error: 'Não foi possivel conectar-se' })
    }
}

const ApagarRegistro = async (req, res) => {
    const { id } = req.body;
    try {
        const vasco = await pool.query('DELETE * FROM registros')
        res.status(200).json(vasco.rows)
    } catch (err) {
        console.error('Falha na requisição', err)
        res.status(500).json({ error: 'Não foi possivel deletar' })
    }
}

module.exports = { MostrarRegistros, CriarRegistro, ApagarRegistro }