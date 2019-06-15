export class Article{
    constructor(
        public _id:string,
        public title:string,
        public author:string,
        public url:string,
        public story_title:string,
        public story_url:string,
        public story_text:string,
        public comment_text:string,
        public created_at:string
    ){}
}