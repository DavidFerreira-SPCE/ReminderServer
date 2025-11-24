const pool = require('../config/db.js');

const listarLembrete = async (_, res) => {
    try {
        const view = await pool.query('SELECT * FROM lembretes');
        res.status(200).json(view.rows);
    } catch (err) {
        console.error('Falha em exibição', err);
        res.status(500).json({ error: 'Não foi possivel visualizar os lembretes' });
    }
};

const listarLembreteByMedicamento = async (req, res) => {
    const nomeRemedio = req.query.nome || req.body.nomeRemedio; 
    if (!nomeRemedio) {
        return res.status(400).json({ error: 'O termo de busca é obrigatório.' });
    }
    
    try {
        const viewName = await pool.query(
            'SELECT * FROM lembretes WHERE nomeremedio ILIKE $1',
            [`%${nomeRemedio}%`] 
        );
        
        res.status(200).json(viewName.rows);
    } catch (err) {
        console.error('Falha na solicitação', err);
        res.status(500).json({ error: 'Não foi possível listar o(s) lembrete(s) desse remédio' });
    }
};


const criarLembrete = async (req, res) => {
    const nomeRemedio = req.body.nomeRemedio || req.body.nomeremedio;
    const horario = req.body.horario;
    const recorrencia = req.body.recorrencia;
    
    if (!nomeRemedio || !horario || !recorrencia) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios, Verifique os campos em branco' });
    }
    
    try {
        const add = await pool.query(
            'INSERT INTO lembretes (nomeremedio, horario, recorrencia) VALUES ($1, $2, $3) RETURNING *',
            [nomeRemedio, horario, recorrencia]
        );
        res.status(201).json(add.rows[0]); 
    } catch (err) {
        console.error('Falha na requisição', err);
        res.status(500).json({ error: 'Verifique as informações e tente novamente' });
    }
};

const apagarLembrete = async (req, res) => {
    const { id } = req.params;
    try {
        const DELETE = await pool.query(
            'DELETE FROM lembretes WHERE id = $1 RETURNING *',
            [id]
        );
        if (DELETE.rowCount === 0) {
            return res.status(404).json({ error: 'Lembrete não encontrado' });
        }
        res.status(200).json({ message: 'Lembrete apagado com sucesso', deleted: DELETE.rows[0] });
    } catch (err) {
        console.error('Falha na requisição', err);
        res.status(500).json({ error: 'Não foi possível apagar o lembrete' });
    }
}


module.exports = { listarLembrete, listarLembreteByMedicamento, criarLembrete, apagarLembrete }