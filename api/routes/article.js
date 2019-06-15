const express = require('express');
const ArticleController = require('../controllers/article');

const api = express.Router();

api.get('/articles', ArticleController.saveArticles);
api.get('/get-articles', ArticleController.getAllArticles);
api.delete('/delete-article/:id', ArticleController.deleteArticle);

module.exports = api;