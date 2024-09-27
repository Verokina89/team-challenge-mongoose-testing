const request = require("supertest");
const app = require("../index");

describe('testing /create',() => {
   
    it('should add new post',async() => {
        const post = {
            title :'title',
            body : 'noticia'
        }
        resPost = await request(app).post('/create').send(post).expect(201)
        
        expect(resPost._body._id).toBeDefined()
        expect(resPost._body.createdAt).toBeDefined()
        expect(resPost._body.updatedAt).toBeDefined()
        expect(resPost._body.title).toBeDefined()
        expect(resPost._body.body).toBeDefined()
        
    })
    it('should return error when not has body ',async() => {
        const post = {
            title :'title',
            body : ''
        }
        resPost = await request(app).post('/create').send(post).expect(500)
        
        expect(resPost._body.message).toBe('There was a problem trying to create a post')
        expect(resPost._body.error).toBe('PostsDB validation failed: body: Path `body` is required.')
       
        
    })
    //- Testea el endpoint GET /: Endpoint para traer todas las publicaciones.
    test('should return all posts ',async() =>{
        const getAllPost = await request(app).get('/').expect(200)
        expect(getAllPost._body).toBeDefined()
        //console.log(getAllPost._body);
        
    })
})
