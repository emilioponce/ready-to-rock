# Ready to rock Barcelona. a Barcelona rock band directory

## Backend

This is an API developed with Nodejs and Expressjs. It defines diferent methods for getting information about rock bands. This data is stored in a json format file.

You can request a 'band' endpoint, with diferent methods:

**/bands** : returns a list of bands IDs
**/bands/:id** : returns bands containing only title, body and members fields. Body was parsed by adding the url of the CDN to images.
**/bands?q=:search** : returns a list of ID bands containing the searched terms within the title, body or members fields.

## Technical stack

- Nodejs environment
- Expressjs to define REST API
- Cors library for enabling cross-origin
- Morgan log library for loggin petitions to the server
- Winston as log library for console and file outputs
- Supertest for HTTP testing

## Other considerations

- Prettier and ESLint where used during all the development
- Babel compiler was configured in order to develop and test using ES6
- Nodemon was used to enable automatic restart of the server when there are changes in the code. As this project has a test purpose, I've mantained nodemon in 'npm start' script. _It's not recommended in a production environment._

This project could have been designed with another architecture, for example using layers like controller, service and repository. I tried to remain as simple as possible in the server.

## Instructions

### How to run the project

```sh
npm install
npm start
```

The API is listening on http://localhost:5000

### Testing

```sh
npm run test
```

## Author

Emilio Ponce
ponce.alcalde@gmail.com
