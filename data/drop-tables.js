const pool = require('../lib/utils/pool');

run();

async function run() {
    try {
        await pool.connect();

        await pool.query(`
        DROP TABLE IF EXISTS votes;
        `);

        console.log('drop tables complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        pool.end();
    }
}