const express = require('express');
const router = express.Router();
const {getData, addData} = require('../consultas/consultas');

router.get('/posts', async(req, res) => {
    const result = await getData();
    res.json(result);
})

const validarDatos = (req, res, next) => {
    const { titulo, url, descripcion } = req.body;

    if (!titulo || !url || !descripcion ) {
        return res.status(400).send({ error: 'Todos los campos deben estar llenos.' });
    }
    next();
};

router.post('/posts', validarDatos, async(req, res) => {
    const {titulo, url, descripcion, likes} = req.body;
    const result = await addData(titulo, url, descripcion,likes);
    res.status(200).send({message:"data agregada correctamente"});
})



module.exports = router