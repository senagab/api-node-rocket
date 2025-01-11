import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database =new DatabaseMemory()

server.post('/videos', (request, reply) => { // rota para criar video
    database.create({
        title: "video 01",
        description: "Este é o video 01",
        duration: 180,
    })

    console.log(database.list())

    return reply.status(201).send()
}) 

server.get('/videos', () => {
    return 'Hello 123'
}) 

server.put('/videos/:id', () => { // rota para atualizar video
    return 'This are your packages'
}) 

server.delete('/videos/:id', () => { // rota para deleção
    return 'This are your packages'
}) 

server.listen({
    port: 3333,
})