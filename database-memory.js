import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    
    #videos = new Map()

    list() {
        // array from => transforma em array
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
        })
    }

    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id, video)
    }

}