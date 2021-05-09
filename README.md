# Backward Clock

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `docker build -f Dockerfile.prod -t clock:prod .`

This command will build the docker image

### `docker run -it --rm -p 3002:80 clock:prod`

This command will run your application on port 3002
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Folder Structure

```
    ├── ...
    ├── containers              
    │   └── Clock.js                # Main container that shows the clock
    └── components                  # React component files
    │   ├── Button                  # Button component
    │   │   ├── index.js            # Component code
    │   │   ├── index.module.scss   # CSS module
    │   │   └── index.test.js       # Unit test
    │   ├── Header                  # Header component
    │   ├── NotFound                # NotFound component
    │   ├── Ticker                  # Ticker component
    │   ├── ...                 
    ├── validations
    │   ├── clockValidation.js      # Decrement by seconds field validations
    │   ├── dummyValidations.js     # Dummy validations for testing
    └── utils
    │   └── useForm.js              # Form controller hook
    │   ├── style                   # Common styles, colors of the application
    │   ├── useForm.test.js         # Unit tests of the useForm custom hook
    └── App.js                      # Routes are defined here
    └── index.js                    # Entry point of the application

```

