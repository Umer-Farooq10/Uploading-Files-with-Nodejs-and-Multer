const express = require('express')
const path = require('path')
const routes = require('./routes/index.route')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
