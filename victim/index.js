const express = require('express')
var f = require("chaplin-pentest")
const app = express()
const port = 3000

app.use(express.static("./"))

app.get('/', (req, res) => {
  res.send('<h1>Aplikasi dalam pengembangan</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})