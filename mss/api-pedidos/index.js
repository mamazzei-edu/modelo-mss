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

app.get('/api-pedidos', (req, res) => {
  res.status(200).send(baseClientes)
})


const port = 8000
app.listen(port, async () => {
  console.log(`API de Pedidos. Porta ${port}.`)
})