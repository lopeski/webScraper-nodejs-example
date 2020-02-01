const express = require('express');
const router = express.Router();
const posts = require('../models/postBlogs.js');
// const Scraper = require('../scraper/index.js');

router.get('/', async (req, res) => {
    try {
        const post = await posts.find();
        return res.send({ post })
    } catch (erro) {
        console.log(erro);
        return res.status(400).send({ error: 'Error loading projects' });
    }
});

module.exports = (app) => app.use('/recebe', router);
