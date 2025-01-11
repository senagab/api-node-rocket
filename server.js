import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

server.post('/videos', () => { // rota para criar video
    return 'Hello World'
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