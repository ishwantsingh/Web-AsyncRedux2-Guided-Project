# How to Run this App
  * Clone repository.
  * Run `npm install` or `yarn install`.
  * Run `npm run dev` or `yarn run dev`.
  * Run `npm test` or `yarn test`.
  * Serve `index.html` using `live-server` or similar.

# Objectives
  * Learn to use Redux Thunk.

# Requirements
We need `node` & `npm`, as well as packages `live-server` and `eslint` installed _globally_. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Necessary enppoints
  * We need working enpoints on mockable.io or similar:
  * GET /quotes endpoint, serving quotes:
    ```javascript
      [
        {
          "id": "7b3f21c5-ff79-4982-b3b7-397ac4a7344b",
          "author": "Dr. Seuss",
          "text": "Don't cry because it's over, smile because it happened."
        },
        {
          "id": "48ec2a41-1c67-49f4-ba14-a49907ef02ce",
          "author": "Frank Zappa",
          "text": "So many books, so little time."
        },
        {
          "id": "ee0315da-f2af-40d4-8990-7097e28a08c4",
          "author": "Oscar Wilde",
          "text": "Be yourself; everyone else is already taken."
        }
      ]
    ```
  * POST /quotes endpoint, expecting a request body of this shape:
    ```javascript
      {
        "author": "Gabriel",
        "text": "Postman first."
      }
    ```
  * and returning the newly created quote:
    ```javascript
      {
          "id": "86332fbe-2d02-4a16-afb0-9b7f0a67d324",
          "author": "Gabriel",
          "text": "Postman first."
      }
    ```
  * DELETE /quotes/{id}, expecting an id param of the quote to be deleted
  * and returning the id of the deleted quote in this form:
    ```javascript
      {
          "id": "{{id}}",
      }
    ```
  * GET /quotes/login?username={username}&password={password}
  * and returning the token:
    ```javascript
      {
          "userToken": "86332fbe-2d02-4a16-afb0-9b7f0a67d324",
          "username": "{{username}}",
          "password": "{{password}}"
      }
    ```

# Steps

## Custom Middleware
  * Test the endpoints on Postman.
  * Flesh out a custom middleware that shoves `action.payload` into a `localStorage` key `'userToken'`, on LOGIN_SUCCESS.

## Async Action Creator for login
  * Flesh out the `login` async action creator that hits `quotes/login` and dispatches a `LOGIN_SUCCESS` action with the token as payload.

## Login component
  * Create a `Login` component that takes `username` and `password` from text inputs.
  * The `Login` component also has a button that hits the async action creator `login` passing `username` and `password`.
  * Inspect Redux Devtools, Network Tab and Application tab to check the entire flow.
  * If a `localStorage` key `'userToken'` is being set that means our custom middleware is working.
  * Create a log out button inside `Login`, that wipes local storage.

## Container component and routing
  * Bring `react-router-dom` into Container.
  * Create Links for paths `/`, `/quotes` and `/login`.
  * Create Routes to `/login` and `/quotes`.
  * The Route to `/quotes` renders `<Spinner><Quotes /><QuoteForm /></Spinner>` (the app as it stands).
  * The Route to `/login` renders the newly created `Login` component.
  * Connect the `Container` so we can pass the `login` action creator to the `Login` component through props.

## Protect the /quotes route
  * Create a Route that renders either a `<Redirect />` to `Login` or `<Spinner><Quotes /><QuoteForm /></Spinner>`.
  * Which is rendered depends on whether there exists a `'userToken'` in `localStorage`.