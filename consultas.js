require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})


async function nuevoUsuario(username, email, contrasena, fecha) {
    try {
        const result = await pool.query("INSERT INTO users (username, email, contrasena, fecha) VALUES ($1, $2, $3, $4) RETURNING*;",
        [`${username}`, `${email}`, `${contrasena}`, `${fecha}`]
        )
        return result.rows
    } catch (e) {
        return e
    }
}

async function getUsers() {
    try {
        const result = await pool.query("SELECT * FROM users")
        return result.rows
    } catch (e) {
        return e
    }
}

async function deleteUser(id) {
    try {
        const result = await pool.query("DELETE FROM users WHERE id = $1",
        [`${id}`]
        )
        return result.rowCount
    } catch (e) {
        return e
    }
}

module.exports = {nuevoUsuario, getUsers, deleteUser}