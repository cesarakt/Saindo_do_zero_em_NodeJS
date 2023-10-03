// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Hello world')

//     return response.end()
// })

// server.listen(3333)

import { DatabaseMemory } from './database-memory.js'
import { fastify } from 'fastify'

const server = fastify()

const database = new DatabaseMemory()

//Rota para criar vídeos
server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})

//Rota para acessar os vídeos
server.get('/videos', (request) => {
    const search = request.query.search
    
    const videos = database.list(search)

    return videos
})

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id 
    const { title, description, duration } = request.body

    database.update(videoId, {
        title,
        description,
        duration
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    port: 3333
})