# How to Setup an Express React App

**Source:** [Barger, R. 3 Feb 2021. How to Create a React App with a Node Backend: The Complete Guide. freeCodeCamp.](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)

<br>

## Step 1: Create the Node Express Back-End

1. `cd` into your project folder.

2. Create a package.json file by running `npm init -y`.

3. `mkdir server && cd server`.

4. `npm i express`

5. `touch index.js`

6. Add the following code into the `index.js` file:

```js
// server/index.js

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

7. Inside the /server/package.json file, create a script to start the web server:

```
...
"scripts": {
  "start": "node server/index.js"
},
...
```

8. Run the server using the script by typing `npm start`.

```
npm start

> node server/index.js

Server listening on 3001
```

<br>

## Step 2: Create an API Endpoint

Create an endpoint for the route /api:

```js
// server/index.js
...

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

**Note:** Make sure to place this line of code above the `app.listen()`.

<br>

## Step 3: Create the React Front-End

1. Open another terminal tab, `cd` into the main project directory, and `npx create-react-app client`.

2. Add a proxy to the /client/package.json file in order to make requests to the Node Express server:

```
...
"proxy": "http://localhost:3001",
...
```

3. `cd client` and run the React app using the preset script by typing `npm start`.

```
cd client
npm start

Compiled successfully!

You can now view client in the browser.

Local:            http://localhost:3000
```

<br>

## Step 4: Make HTTP Requests from React to Node

Fetch the data from the `/api` endpoint through useEffect:

```js
// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
```

<br>

## Step 5: Deploy the App Using Heroku

(coming soon...)
