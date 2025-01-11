// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     // console.log('oi')
//     response.write('buon giorno')

//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => { // rota: quando o usuario chamar o endereço raiz
    return 'Hello World'
}) 

server.get('/123', () => { // rota: quando o usuario chamar o endereço raiz
    return 'Hello 123'
}) 

server.get('/pkg', () => { // rota: quando o usuario chamar o endereço raiz
    return 'This are your packages'
}) 

server.listen({
    port: 3333,
})