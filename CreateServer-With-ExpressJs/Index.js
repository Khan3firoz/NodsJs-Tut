const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! I am an Express js server')
})

app.listen(port, () => {
  console.log(`Serveris running on port ${port}`)
})