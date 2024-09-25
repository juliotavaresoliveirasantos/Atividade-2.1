const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); // Conexão com o banco de dados
const Membro = require('./models/Membro'); // Importando o modelo de Membro

const app = express(); // Aqui está a definição da instância do Express
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sincronizar com o banco de dados
sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });

// Rota GET para listar membros
app.get('/api/membro', async (req, res) => {
  try {
    const membros = await Membro.findAll();
    res.json(membros);
  } catch (error) {
    console.error('Erro ao listar membros:', error);
    res.status(500).json({ error: 'Erro ao listar os membros.' });
  }
});

// Rota POST para adicionar membros
app.post('/api/membro', async (req, res) => {
  const { nome, cpf, genero, telefone, email, endereco, ativo } = req.body;

  console.log('Dados recebidos:', req.body);

  try {
    // Verificar se o CPF já está cadastrado
    const membroExistente = await Membro.findOne({ where: { cpf } });
    if (membroExistente) {
      return res.status(400).json({ error: 'CPF já cadastrado.' });
    }

    // Criar novo membro
    const novoMembro = await Membro.create({
      nome, cpf, genero, telefone, email, endereco, ativo
    });

    console.log('Membro adicionado:', novoMembro);
    res.status(201).json({ message: 'Membro adicionado com sucesso!', membro: novoMembro });
  } catch (error) {
    console.error('Erro ao adicionar o membro:', error);
    res.status(500).json({ error: 'Erro ao adicionar o membro.' });
  }
});

// Rota DELETE para excluir membros pelo ID
app.delete('/api/membro/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const membro = await Membro.findByPk(id);
    if (!membro) {
      return res.status(404).json({ error: 'Membro não encontrado.' });
    }

    await membro.destroy();
    res.status(200).json({ message: 'Membro excluído com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar o membro:', error);
    res.status(500).json({ error: 'Erro ao deletar o membro.' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
