const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("./db");
const crypto = require("crypto");

const app = express();
const SECRET = 'minha_chave_secreta';

app.use(cors());
app.use(express.json());


//rota de teste para debugar
app.get('/teste', (req, res) => {
  res.json({ status: "Servidor ok" });
});

//rota loginzin
app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE usuario = ?';

  db.query(sql, [usuario], async (err, result) => {

    
    
    if (err) {
      return res.status(500).json({ erro: 'Erro no servidor' });
    }

    if (!result || result.length === 0) {
      return res.status(401).json({ erro: 'Usuario nao encontrado' });
    }

    const user = result[0];

    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    const token = jwt.sign(
      { id: user.id, usuario: user.usuario},
      SECRET,
      { expiresIn: '15m' }
    );

    return res.json({ sucesso: true, token, nome: user.nome});
    
  });
});



//proteção da rota chips
app.get('/chips', auth, (req, res) => { 
  res.json({ mensagem: `Bem-vindo ${req.user.usuario}` });
});

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ erro: "Usuario não logado" });
  }

  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : authHeader;

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ erro: "Token invalido" });
  }
}

app.get("/ixc", auth, (req,res) =>{
  
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Servidor online na porta " + PORT);
});


