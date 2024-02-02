const pool = require('../config/db');

const getData = async () => {
        const {rows}= await pool.query("SELECT * FROM posts");
        console.log(rows);
        return rows
};

const addData = async (titulo, img, descripcion,likes) => {
    try {
        const {rows}= await pool.query("INSERT INTO posts (titulo, img, descripcion,likes) VALUES ($1, $2, $3, $4)", [titulo, img, descripcion,likes]);
        return rows
    } catch (error) {
        console.log(error)
        throw error
    }
};

module.exports = {getData, addData}