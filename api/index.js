const express = require('express')
const app = express()

app.get('*', (req, res) => {
    console.log('Hola mundo, para la consola')
    res.send({ mensaje: 'Hola mundo desde el server clase 126' })
})

module.exports = app