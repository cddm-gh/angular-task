# angular-task
Web Application for the Angular Task


1. download the repo
2. install modules in node running ```npm install``` inside the directory 'api'
3. install modules in angular running ```npm install``` inside directory 'client'
4. set a mongo database without user name or password in localhost, then create a new database called 'angular_task'
5. inside api/config you'll find *config.js* where you can set PORT variables for the server and for the mongodb depending on the enviorement you are running the app
5.1 go to directory api and start the server **node server/server.js** 
6. the first time you run the app make a get request to the route yourserverdomain/api/articles it will fetch the articles from the API and store them in the DB, then after 60 minutes it will fetch again and again every 60 minutes untill you shut the server off.
7. take note that **every API call only return 20 articles** so if you want test the db with a lot of articles reduce the time of the setInterval function in api/controller/article.js line 10
8. I found that the **API returns repeated articles so your database might get filled with multiple repeated articles and a lot of them would be story_title=null and title=null so those will be discarded as well as the ones with url=null and story_url=null to populate the list in the Angular part.**
9. you didn't say anything about the urls I've found that some have the same problems that story_title so I made a validation to check wheter the article has an url or story_url if neither then is discarded too.
