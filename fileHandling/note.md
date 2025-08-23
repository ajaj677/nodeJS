## Concept: What’s File Handling in Node.js?

Node.js is built around non-blocking I/O, meaning it doesn’t wait around for a file read/write to finish before doing other work. That’s its core strength over traditional, blocking runtimes.
In Node.js, file handling is mostly done through the fs (File System) module.
You can do file ops in two ways:

Asynchronous (non-blocking) → Preferred in production.

Synchronous (blocking) → Simple but halts the event loop, not good at scale.

# 2. Core API

The fs module provides several functions. Let’s go with the essentials:

### Reading a File

Async:

```
const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

Sync:
```
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);
```

### Writing to a File

Async:
```
fs.writeFile('output.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});
```


Appending:
```
fs.appendFile('output.txt', '\nAppended line.', (err) => {
  if (err) throw err;
});
```

Deleting a File
```
fs.unlink('output.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
```

Checking/Creating Directories
```
if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}
```

# 3. Streams (for Large Files)

For big files (like logs, videos), don’t read the whole file into memory. Use streams.
```
const readStream = fs.createReadStream('bigfile.txt', 'utf-8');
readStream.on('data', chunk => {
  console.log('New chunk:', chunk);
});
```

You can also pipe a read stream into a write stream:
```
const read = fs.createReadStream('input.txt');
const write = fs.createWriteStream('output.txt');

read.pipe(write);
```


This is how Node handles large file transfers efficiently.

# 4. Real-World Considerations

Async is king. Always use it in production, unless you’re writing quick scripts.

Error handling. Always check for errors (err in callbacks, or try/catch if using promises).

Use Promises / async–await.
```
const fs = require('fs/promises');

async function run() {
  try {
    const data = await fs.readFile('data.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
run();
```

File permissions. Node respects OS-level file permissions. Writing/deleting files might fail if your user doesn’t have the rights.

Concurrency. Avoid multiple writes to the same file at the same time unless you manage locks or queues.