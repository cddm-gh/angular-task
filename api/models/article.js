const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({

    title: { type: String },
    author: { type: String },
    url: { type: String },
    story_title: { type: String },
    story_url: { type: String },
    story_text: { type: String },
    comment_text: { type: String },
    created_at: { type: String }

});

module.exports = mongoose.model('Article', ArticleSchema);