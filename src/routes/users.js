const express = require('express')
const router = express.Router() //es lo que nos permite crear rutas fuera de nuestro app.js que podemos generar como modulos

router.get('/', (req, res)=>{
    res.status(200).send("Hola mundo desde actual 01.00")
})

module.exports = router