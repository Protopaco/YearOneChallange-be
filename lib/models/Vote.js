const pool = require('../utils/pool');


module.exports = class Vote {
    id;
    netflixid;
    upVotes;
    downVotes;

    constructor(row) {
        this.id = row.id;
        this.netflixid = row.netflixid;
        this.upVotes = row.up_votes;
        this.downVotes = row.down_votes;
    }

    static async insert(netflixid) {
        try {
            const { rows } = await pool.query(`
            INSERT INTO votes
            (
                netflixid,
                up_votes,
                down_votes
            ) VALUES (
                $1, $2, $3
            ) RETURNING *
            `, [netflixid, 0, 0])

            return new Vote(rows[0])

        } catch (e) {
            console.log('ERROR')
            throw new Error(e)
        }
    }
    static async findById(netflixid) {
        try {
            const { rows } = await pool.query(`
            SELECT * FROM votes 
            WHERE netflixid = $1
            `, [netflixid])

            if (!rows[0]) return Vote.insert(netflixid)
            else return new Vote(rows[0])


        } catch (e) {
            console.log('ERROR')
            throw new Error(e)
        }
    }

    static async upVote(netflixid) {
        try {
            const { rows } = await pool.query(`
            UPDATE votes
            SET up_votes = up_votes + 1
            WHERE netflixid = $1
            RETURNING *
            `, [netflixid])

            return new Vote(rows[0])
        } catch (e) {
            console.log('ERROR')
            throw new Error(e)
        }
    }

    static async downVote(netflixid) {
        try {
            const { rows } = await pool.query(`
            UPDATE votes
            SET down_votes = down_votes + 1
            WHERE netflixid = $1
            RETURNING *
            `, [netflixid])

            return new Vote(rows[0])
        } catch (e) {
            console.log('ERROR')
            throw new Error(e)
        }
    }
}