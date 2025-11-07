const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

const base = {}

const funcoes = {
  Base: (info) => {
    base[info.contador] = info
  },
}

//GET /lembretes
//vai ser acionado pelo cliente, front end. Deve devolver a base inteira, consolidada
app.get('/api-pagamentos', (req, res) => {
  res.status(200).send(baseClientes)
})


const port = 7000
app.listen(port, async () => {
  console.log(`API de Pagamentos. Porta ${port}.`)
})