const express = require('express')
const router = express.Router() //es lo que nos permite crear rutas fuera de nuestro app.js que podemos generar como modulos
const postController = require('../controllers/posts')

router.get('/', postController.getAll)
router.get('/:id', postController.getById)
router.post('/', postController.post)
router.put('/:id', postController.put)
router.delete('/:id', postController.delete)



module.exports = router