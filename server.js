import { fastify } from 'fastify'
// import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

// const database =new DatabaseMemory()
const database = new DatabasePostgres()

server.post('/videos', async (request, reply) => { // rota para criar video
    
    // corpo da requisição
    const { title, description, duration } = request.body // desestruturação de metadados

    await database.create({
        title,
        description,
        duration
    })

    // console.log(database.list())

    return reply.status(201).send()
}) 

server.get('/videos', async (request) => {

    const search = request.query.search

    const videos = await database.list(search)

    return videos
}) 

server.put('/videos/:id', (request, reply) => { // rota para atualizar video
    const videoId = request.params.id
    const { title, description, duration } = request.body

    const video = database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send() // http 204 code: resposta de sucesso mas sem conteudo

}) 

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    
    return reply.status(204).send()
})

server.listen({
    port: 3333,
})