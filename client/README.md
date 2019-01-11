# Ready to rock Barcelona. a Barcelona rock band directory

## Frontend

A frontend application with React for retrieving Bands from an API and visualizing them.

Within this web we can visualize a large amount of bands, and navigate through them by using the 'prev' and 'next' buttons located at the bottom of the page.

We can also search terms to obtain a list of bands that contains them. This list is automatically rendered ( by showing the first element and updating the navigation controls). To clear the previous filters, we only have to clear the text inside the input, and press enter or search button.

## Technical stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- React is the component UI library
- Webpack as bundler tool
- Axios for async requests
- Css-modules for styles
- Jest and Enzyme for testing
- Eslint and prettier were used during all the process
- It contain Proptypes definitions for typechecking
- ...

## Other considerations

- Search box works with click in the search button, but also by pressing the 'enter' key
- As this is a test and loading times were superfasts, I didn't added spinners to the project
- UI was designed to be as simple as possible
- It has been tested in different platforms (desktop, mobile, tablet) and browsers (Chrome, Firefox, Safari)

## Instructions

### How to run the project

```sh
npm install
npm start
```

The application is running in the browser URL http://localhost:3000

### Testing

```sh
npm run test
```

### How to create an optimized production build

```sh
npm run build
```

## Author

Emilio Ponce
ponce.alcalde@gmail.com
