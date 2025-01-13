import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database =new DatabaseMemory()

server.post('/videos', (request, reply) => { // rota para criar video
    
    // corpo da requisição
    const { title, description, duration } = request.body // desestruturação de metadados

    database.create({
        title,
        description,
        duration
    })

    // console.log(database.list())

    return reply.status(201).send()
}) 

server.get('/videos', (request) => {

    const search = request.query.search

    const videos = database.list(search)

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