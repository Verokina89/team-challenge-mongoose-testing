const request = require("supertest");
const app = require("../index");

describe('testing /create',() => {
    const post = {
        title :'title',
        body : 'noticia'
    }
    it('should add new post',async() => {
        resPost = await request(app).post('/create').send(post).expect(201)
        
        expect(resPost._body._id).toBeDefined()
        expect(resPost._body.createdAt).toBeDefined()
        expect(resPost._body.updatedAt).toBeDefined()
        expect(resPost._body.title).toBeDefined()
        expect(resPost._body.body).toBeDefined()
        
    })
})