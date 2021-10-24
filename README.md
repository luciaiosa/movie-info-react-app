# Movie Info React App

React application in which Breaking Bad characters are shown and information about them can be consulted.

# Install the application and its dependencies

## Clone the project from Github

git clone https://github.com/luciaiosa/movie-info-react-app.git

## Install the dependencies

### `yarn install`

## Run the application in development mode
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Test the application
### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Build the app for production
### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Eject
### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


# Good to know

##  Web app using Breaking Bad API, React, Typescript, Redux, redux-saga, material-ui and Sass.
* Redux manages the app store.
* redux-saga is used to make the calls to the backend and store the data into Redux.
* material-ui is a robust and customizable library that contains ready-to-use styled components.
* material-ui and Sass are used to style the app components.

## Organization

* components folder contains the common UI components (error, header, footer, spinner, ...), and the components that are used into the containers.
* containers folder contains the two pages, Home and Detail, and the App component.
* config folder contains the app routes.
* hooks folder contains the custom hooks used in the app.
* services folder contains the app services, Characters and CharactersQuotes.
* store folder contains all related to the Redux store: actions, reducers, sagas, store and store types.
* translation folder contains all related to i18n translations.
* types folder contains the types that do not exist in others libraries, but required in Typescript.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
