const pool = require('../config/db.js');

const listarLembrete = async (_, res) => {
    try {
        const view = await pool.query('SELECT * FROM lembretes')
        res.status(200).json(view.rows)
    } catch (err) {
        console.error('Falha em exibição', err)
        res.status(500).json({ error: 'Não foi possivel visualizar os lembretes' })
    }
}

const listarLembreteByMedicamento = async (req, res) => {
  const { nomeRemedio } = req.body;
  
  try {
    const viewName = await pool.query(
      'SELECT * FROM lembretes WHERE nomeRemedio = $1',
      [nomeRemedio]
    );
    
    res.status(200).json(viewName.rows);
  } catch (err) {
    console.error('Falha na solicitação', err);
    res.status(500).json({ error: 'Não foi possível listar o(s) lembrete(s) desse remédio' });
  }
};


const criarLembrete = async (req, res) => {
    const { nomeRemedio, horario, recorrencia } = req.body;
    try {
        const add = await pool.query(
            'INSERT INTO lembretes (nomeRemedio, horario, recorrencia) VALUES ($1, $2, $3) RETURNING *',
            [nomeRemedio, horario, recorrencia]
        );
        res.status(200).json(add.rows);
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
        res.status(200).json(DELETE.rows);
    } catch (err) {
        console.error('Falha na requisição', err);
        res.status(500).json({ error: 'Não foi possível apagar o lembrete' });
    }
}


module.exports = { listarLembrete, listarLembreteByMedicamento, criarLembrete, apagarLembrete }