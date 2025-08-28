# Express Routing Guide

Routing refers to how an application’s endpoints (URIs) respond to client requests. In Express, routes are defined using methods on the `app` object that correspond to HTTP methods (e.g., `app.get()`, `app.post()`).

## Basic Route Example

```js
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
```

## Route Methods

Route methods correspond to HTTP methods (`get`, `post`, etc.) and can have one or multiple callback functions.

```js
// GET route
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

// app.all() for all HTTP methods
app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next()
})
```

## Route Paths

Route paths define endpoints and can be strings, string patterns, or regular expressions.

### String-Based Routes

```js
app.get('/', (req, res) => res.send('root'))
app.get('/about', (req, res) => res.send('about'))
app.get('/random.text', (req, res) => res.send('random.text'))
```

### String Patterns

```js
app.get('/ab?cd', (req, res) => res.send('ab?cd'))
app.get('/ab+cd', (req, res) => res.send('ab+cd'))
app.get('/ab*cd', (req, res) => res.send('ab*cd'))
app.get('/ab(cd)?e', (req, res) => res.send('ab(cd)?e'))
```

### Regular Expression Routes

```js
app.get(/a/, (req, res) => res.send('/a/'))
app.get(/.*fly$/, (req, res) => res.send('/.*fly$/'))
```

## Route Parameters

Named segments in the URL are captured in `req.params`.

```js
app.get('/users/:userId/books/:bookId', (req, res) => res.send(req.params))
app.get('/flights/:from-:to', (req, res) => res.send(req.params))
app.get('/plantae/:genus.:species', (req, res) => res.send(req.params))
app.get('/user/:userId(\\d+)', (req, res) => res.send(req.params))
```

## Route Handlers

Handlers can be single functions, multiple functions, arrays, or combinations.

```js
app.get('/example/a', (req, res) => res.send('Hello from A!'))

app.get('/example/b', (req, res, next) => { console.log('Next function...'); next() },
                     (req, res) => res.send('Hello from B!'))

const cb0 = (req, res, next) => { console.log('CB0'); next() }
const cb1 = (req, res, next) => { console.log('CB1'); next() }
const cb2 = (req, res) => res.send('Hello from C!')
app.get('/example/c', [cb0, cb1, cb2])
```

## Response Methods

| Method             | Description                    |
| ------------------ | ------------------------------ |
| `res.download()`   | Prompt file download           |
| `res.end()`        | End response process           |
| `res.json()`       | Send JSON response             |
| `res.jsonp()`      | Send JSONP response            |
| `res.redirect()`   | Redirect request               |
| `res.render()`     | Render a view template         |
| `res.send()`       | Send various types of response |
| `res.sendFile()`   | Send a file as an octet stream |
| `res.sendStatus()` | Set status code and send text  |

## Chained Routes with `app.route()`

```js
app.route('/book')
  .get((req, res) => res.send('Get a random book'))
  .post((req, res) => res.send('Add a book'))
  .put((req, res) => res.send('Update the book'))
```

## Modular Routes with `express.Router()`

```js
const express = require('express')
const router = express.Router()

const timeLog = (req, res, next) => { console.log('Time:', Date.now()); next() }
router.use(timeLog)

router.get('/', (req, res) => res.send('Birds home page'))
router.get('/about', (req, res) => res.send('About birds'))

module.exports = router

const birds = require('./birds')
app.use('/birds', birds)
```

> **Note:** Use `{ mergeParams: true }` if parent route params need to be accessed by sub-routes.
