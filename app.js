const express = require('express')
const expressLayouts = require('express-ejs-layouts');

const app = express()
const port = 3001

// gunakan ejs
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);

// Builtin Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/main', (req, res) => {
    res.render('index', {
        title: 'Kalkulator Sederhana',
        layout: 'layouts/main-layout'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})