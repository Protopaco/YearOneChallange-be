const pool = require('../lib/utils/pool');

run();

async function run() {
    try {

        await pool.query(`
            CREATE TABLE votes(
                id SERIAL PRIMARY KEY,
                netflixid INTEGER NOT NULL,
                up_votes INTEGER NOT NULL,
                down_votes INTEGER NOT NULL
            )`);
        await pool.end();
        console.log('create table complete');
    } catch (err) {
        console.log(err);
    }
}