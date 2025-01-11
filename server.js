import { createServer } from 'node:http'

const server = createServer((request, response) => {
    // console.log('oi')
    response.write('buon giorno')

    return response.end()
})

server.listen(3333)