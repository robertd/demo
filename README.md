# demo

Quick demo app showing basic CRUD api using Express and MongoDB.

# requirements
* nodejs/iojs
* MongoDB server (if you use docker update mongodb path in app.js)
* Docker (optional)
* docker-compose (optional)

# instructions
* clone repo
* run `cd demo`
* run `cd app`
* run `npm install`
* run `npm start`
* navigate to `http://localhost:3000/`
* use Postman (chrome extension) to make calls to `http://localhost:3000/api/users`

# instructions (docker and docker-compose are required)
* clone repo
* run `cd demo`
* run `docker-compose up -d`
* (wait ... especially with iojs' docker image)
* navigate to `http://localhost:3000/`
* use Postman (chrome extension) to make calls to `http://localhost:3000/api/users`

# todo
* Add some clientside MVC (Backbone or AngularJS)
* Add swagger support
