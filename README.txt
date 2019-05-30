npm init -y

npm install

npm install --save express body-parser mongoose

set up your mongoDB connection string

NB: change response.send to response.jsonp inside the endpoints in app.js to return jsonp to requests(for cross-domain)



Automatically restart server when files change: By default, node will not monitor for file changes after your server has been started. This means you'd have to shut down and start the server every time you make a file change. This can be fixed with nodemon. Install nodemon globally using - npm install -g nodemon. Start your server with nodemon server.js and your server will check for changes.






guide

https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/
