import { sql } from './db.js';

sql`
    CREATE TABLE videos (
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Table created');
}).catch(err => {
    console.error('Error creating table:', err);
});
