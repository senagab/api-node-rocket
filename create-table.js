import { sql } from './db.js';

// sql`DROP TABLE IF EXISTS videos` .then(() => {
//     console.log('table encontrada foi apagada!')
// })

sql`
    CREATE TABLE videos (
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Table created');
}).catch(err => {
    console.error('Error creating table:', err);
});
