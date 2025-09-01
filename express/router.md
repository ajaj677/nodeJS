Markdown

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML``   # Express.js Routing Guide  Routing refers to how an application’s endpoints (URIs) respond to client requests. This guide covers the essentials of routing in Express.  ---  ## Basic Routing  You define routing using methods of the Express `app` object that correspond to HTTP methods. The application "listens" for requests that match the specified route and method, and when it detects a match, it calls the specified callback function (handler).  A basic route example:  ```javascript  const express = require('express')  const app = express()  // Respond with "hello world" when a GET request is made to the homepage  app.get('/', (req, res) => {    res.send('hello world')  })   ``

With multiple callback functions, use next() to pass control to the next handler in the chain.

Route Methods
-------------

A route method is derived from an HTTP method and is attached to an instance of the express class.

**Examples:**

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   // GET method route  app.get('/', (req, res) => {    res.send('GET request to the homepage')  })  // POST method route  app.post('/', (req, res) => {    res.send('POST request to the homepage')  })   `

### The app.all() Method

This is a special method used to load middleware for all HTTP request methods at a specific path.

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   app.all('/secret', (req, res, next) => {    console.log('Accessing the secret section ...')    next() // pass control to the next handler  })   `

Route Paths
-----------

Route paths, combined with a request method, define the endpoints. They can be strings, string patterns, or regular expressions.

> **Note**: Query strings are not part of the route path.

### String Paths

Matches a specific route.

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   // Matches requests to the root route, /  app.get('/', (req, res) => {    res.send('root')  })  // Matches requests to /about  app.get('/about', (req, res) => {    res.send('about')  })   `

### String Patterns

> **Caution**: These patterns no longer work in Express 5. Refer to the migration guide.

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   // Matches acd and abcd  app.get('/ab?cd', (req, res) => {    res.send('ab?cd')  })  // Matches abcd, abbcd, abbbcd, etc.  app.get('/ab+cd', (req, res) => {    res.send('ab+cd')  })  // Matches abcd, abxcd, abRANDOMcd, etc.  app.get('/ab*cd', (req, res) => {    res.send('ab*cd')  })  // Matches /abe and /abcde  app.get('/ab(cd)?e', (req, res) => {    res.send('ab(cd)?e')  })   `

### Regular Expressions

Use regular expressions for complex matching.

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   // Matches anything with an "a" in it  app.get(/a/, (req, res) => {    res.send('/a/')  })  // Matches butterfly and dragonfly, but not butterflyman  app.get(/.*fly$/, (req, res) => {    res.send('/.*fly$/')  })   `

Route Parameters
----------------

Route parameters are named URL segments used to capture values. These values are populated in the req.params object.

*   **Route path**: /users/:userId/books/:bookId
    
*   **Request URL**: http://localhost:3000/users/34/books/8989
    
*   **req.params**: { "userId": "34", "bookId": "8989" }
    

**Example:**

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   app.get('/users/:userId/books/:bookId', (req, res) => {    res.send(req.params)  })   `

You can also add a regular expression to a route parameter for validation.

*   **Route path**: /user/:userId(\\d+)
    
*   **Request URL**: http://localhost:3000/user/42
    
*   **req.params**: {"userId": "42"}
    

Route Handlers
--------------

You can provide multiple callback functions that act like middleware to handle a request.

### Single Callback

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   app.get('/example/a', (req, res) => {    res.send('Hello from A!')  })   `

### Multiple Callbacks

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   app.get('/example/b', (req, res, next) => {    console.log('the response will be sent by the next function ...')    next()  }, (req, res) => {    res.send('Hello from B!')  })   `

### Array of Callbacks

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const cb0 = function (req, res, next) {    console.log('CB0')    next()  }  const cb1 = function (req, res, next) {    console.log('CB1')    next()  }  const cb2 = function (req, res) {    res.send('Hello from C!')  }  app.get('/example/c', [cb0, cb1, cb2])   `

Response Methods
----------------

These methods on the response object (res) send a response to the client and terminate the request-response cycle. If none are called, the client request will be left hanging.

MethodDescriptionres.download()Prompt a file to be downloaded.res.end()1End the response process.2res.json()3Send a JSON response.4res.jsonp()5Send a JSON response with JSONP support.6res.redirect()7Redirect a request.8res.render()9Render a view template.10res.send()11Send a response of various types.12res.sendFile()Send a file as an octet stream.res.sendStatus()Set the response status code and send it as the response body.

app.route()
-----------

You can create chainable route handlers for a route path. This helps create modular routes and reduces redundancy.

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   app.route('/book')    .get((req, res) => {      res.send('Get a random book')    })    .post((req, res) => {      res.send('Add a book')    })    .put((req, res) => {      res.send('Update the book')    })   `

express.Router
--------------

Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system, often called a “mini-app”.

**1\. Create a router file (birds.js):**

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const express = require('express')  const router = express.Router()  // Middleware specific to this router  const timeLog = (req, res, next) => {    console.log('Time: ', Date.now())    next()  }  router.use(timeLog)  // Define the home page route  router.get('/', (req, res) => {    res.send('Birds home page')  })  // Define the about route  router.get('/about', (req, res) => {    res.send('About birds')  })  module.exports = router   `

**2\. Load the router module in your main app:**

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const birds = require('./birds')  // ...  app.use('/birds', birds)   `

The app will now handle requests to /birds and /birds/about. To access path parameters from the parent router, use the mergeParams option:

JavaScript

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const router = express.Router({ mergeParams: true })   `

Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const router = express.Router({ mergeParams: true })   `