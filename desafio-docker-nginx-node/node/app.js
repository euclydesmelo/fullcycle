const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'fullcycle',
  password: 'fullcycle',
  database: 'fullcycle'
})

connection.connect()

connection.query("INSERT INTO people(nome) VALUES ('Fulano de Tal')")

app.get('/', (req, res) => {
  connection.query('SELECT id, nome FROM people ORDER BY id', (err, rows) => {
    if (err)
        console.log(err)

    let output = '<h1>Full Cycle Rocks!</h1>'
    rows.forEach(row => {
        output = output.concat(`<p>${row['nome']} ${row['id']}</p>`)
    });
    res.send(output)
  })
})

app.listen(port, () => {
  console.log(`Escutando na porta: ${port}`)
})