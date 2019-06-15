const path = require('path');
const axios = require('axios');
//Importar modelo
const Article = require('../models/article');

let saveArticles = async(req, res) => {

    fetchArticles();
    // execute a function every hour
    setInterval(fetchArticles, 1000 * 60 * 60);
    return res.json({ ok: true, msg: 'Articulos guardados' })
}

let fetchArticles = async() => {
    let URL = `https://hn.algolia.com/api/v1/search_by_date?query=nodejs`;

    let resp = await axios.get(URL);

    resp.data.hits.forEach(function(art) {

        let article = new Article();
        article.title = art.title;
        article.author = art.author;
        article.url = art.url;
        article.story_title = art.story_title;
        article.story_url = art.story_url;
        article.story_text = art.story_text;
        article.comment_text = art.comment_text;
        article.created_at = art.created_at;

        article.save((err, article_saved) => {
            if (err) return res.status(500).json({ ok: false, msg: `Error ${err}` })

            if (!article_saved) return res.status(404).json({ msg: "El articulo no ha sido guardado" })

        })
    });

    console.log(`${Object.keys(resp.data.hits).length} articles saved`);

}

let getAllArticles = (req, res) => {

    let sanitized_articles = [];
    //Return all the articles sorted by date of creation (newer first)
    Article.find({})
        .sort({ 'created_at': -1 })
        .exec((err, articles_saved) => {
            if (err) { return res.status(500).json({ ok: false, msg: `Error ${err}` }); }

            if (!articles_saved) { return res.status(500).json({ ok: false, msg: `Error ${err}` }); }

            articles_saved.forEach((article, index) => {
                // console.log(`${index} ${article.story_title} time: ${article.created_at}`);
                //Make sure to add only articles with either title or story_title and url or story_url
                //if no title || story_title article is discarted
                //if no url || story_url article is discarted
                if (article.title == null) {
                    if (article.story_title == null)
                        return;
                    else {
                        article.title = article.story_title;
                        if (article.url == null) {
                            if (article.story_url == null)
                                return;
                            else {
                                article.url = article.story_url;
                            }
                        }
                    }
                }
                sanitized_articles.push(article);

            });
            console.log('==========After Sanitize===========');
            sanitized_articles.forEach((article, index) => {
                console.log(`${index} ${article.story_title} time: ${article.created_at}`);
            })
            return res.send({
                ok: true,
                articles: sanitized_articles
            })
        })
}

let deleteArticle = (req, res) => {
    let id = req.params.id;

    Article.findByIdAndDelete(id).exec((err, article_deleted) => {
        if (err) { return res.status(500).json({ ok: false, msg: `Error ${err}` }); }

        if (!article_deleted) { return res.status(500).json({ ok: false, msg: `Error ${err}` }); }

        res.send({
            ok: true,
            msg: 'Article Deleted!'
        })
    })
}

module.exports = {
    saveArticles,
    getAllArticles,
    deleteArticle
}