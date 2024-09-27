const express = require('express')
const router = express.Router()
const PostController =  require('../controllers/Post.controllers')

router.get('/',PostController.getAll)
router.post('/create',PostController.post)

router.get('/id/:_id',PostController.getById)
router.put('/id/:_id',PostController.updateById)
router.delete('/id/:_id',PostController.deleteById)

router.get('/title/:title',PostController.getByTitle)


router.use((req,res)=> {
    res.send('Page not found')
})

module.exports = router