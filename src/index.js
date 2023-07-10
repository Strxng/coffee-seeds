const express = require("express");
const app = express();

app.post("/predict", (req, res) => {
  // Lógica de processamento da IA
  // ...
  // Retornar a resposta
  res.json({ resultado: "Predição concluída" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
