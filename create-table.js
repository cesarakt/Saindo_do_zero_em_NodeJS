import { sql } from './db.js'

/* 
    Comando para deletar a tabela caso exista.
    sql`DROP TABLE IF EXISTS videos`.then(() => console.log('Excluiu'))
*/

sql`
    CREATE TABLE videos (
        video_id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Tabela criada!')
})