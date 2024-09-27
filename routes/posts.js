const express = require('express')
const router = express.Router()
const PostController =  require('../controllers/Post.controllers')

router.get('/',PostController.getAll)
router.post('/create',PostController.post)

router.get('/id/:_id',PostController.getById)
router.put('/id/:_id',PostController.updateById)
router.delete('/id/:_id',PostController.deleteById)

router.get('/title/:title',PostController.getByTitle)

//- GET /postsWithPagination: Endpoint para traer todas las publicaciones de 10 en 10 (paginación). Es decir, si estoy en la pagina 1  me muestra las 10 primeras publicaciones y si estoy en la pagina 2 me muestra las 10 siguientes.
router.get('/postsWithPagination',PostController.getPostsWithPagination)

router.use((req,res)=> {
    res.send('Page not found')
})

module.exports = router