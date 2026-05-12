
const request = require('supertest');

const app = require('../app');

describe("Notes route",()=>{


test('Get /all should return all users',async ()=>{
    const response = await request(app).get("/api/notes/all")

    expect(response.status).toBe(200);
    expect(response.body.status).toEqual("success");
    expect(Array.isArray(response.body.data)).toBe(true);

})


test('Get /userid should return user by id',async ()=>{
    const response = await request(app).get("/api/notes/n456")

    expect(response.status).toBe(200);
    expect(response.body.status).toEqual("success");
    expect(response.body.data._id).toBe("n456");

});

test("Post /create should create new notes", async()=>{

    const user = {
        
            "_id": "n455",
            "title": "Learn Redis",
            "content": "Practice caching API responses",
            "completed": false,
            "userId": "u123",
            "createdAt": "2026-05-10T11:00:00Z"
    }
    const response = await request(app).post("/api/notes/add").send(user);
    expect(response.status).toBe(201);
    expect(response.body.status).toEqual("success");
    expect(response.body.data._id).toBe("n455")
    
})




})