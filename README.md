# How to Setup an Express React App

**Reference:** [Barger, R. 3 Feb 2021. How to Create a React App with a Node Backend: The Complete Guide. freeCodeCamp.](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)

<br>

## Step 1: Create the Node Express Back-End

1. `cd` into your project folder.

2. `mkdir server && cd server`.

3. Create a package.json file: `npm init -y`.

4. `npm i express`

5. `touch .gitignore` and add the following:

```
# dependencies
node_modules

# misc
.DS_Store
```

6. `touch index.js` and add the following:

```js
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

7. `npm i --save-dev nodemon` to automatically restart the server after each file change.

8. Open the package.json file and create a script to start the web server:

```
...
"scripts": {
  ...,
  "start": "nodemon index.js"
},
...
```

9. Run the server using the script by typing `npm start`.

```
...
[nodemon] starting `node index.js`
Server listening on 3001
```

<br>

## Step 2: Create an API Endpoint

Create an endpoint for the route /api:

```js
// server/index.js
...

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

**Note:** Make sure to place this line of code above the `app.listen()`.

<br>

## Step 3: Create the React Front-End

1. Open another terminal tab, `cd ..` out of the server directory, and `npx create-react-app client`.

2. Add a proxy to the /client/package.json file in order to make requests to the Node Express server:

```
...
"proxy": "http://localhost:3001",
...
```

3. `npm i axios`.

4. `cd client` and run the React app using the preset script by typing `npm start`.

```
cd client
npm start

Compiled successfully!

You can now view client in the browser.

Local:            http://localhost:3000
```

<br>

## Step 4: Make HTTP Requests from React to Node

Get the data from the `/api` endpoint through useEffect and axios:

```js
// client/src/App.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get('/api')
      .then(response => setData(response.data.message));
  });

  return (
    <div className="App">
      <header className="App-header">  
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}
```

<br>

## Step 5: Deploy the App Using Heroku

(coming soon...)
