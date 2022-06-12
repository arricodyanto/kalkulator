const express = require('express')
const expressLayouts = require('express-ejs-layouts');

const router = require('express').Router()

const app = express()
const port = 3001

// gunakan ejs
app.set('view engine', 'ejs');
const db = require('./models')


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

app.get('/main/records', async(req, res) => {
    const records = await db.Record.findAll()
    res.json({
        success: true,
        message: "Success Retrieve All Records Data",
        data: records
    })
})
app.post('/main/records/add', async(req, res, next) => {
    try {
        const record = req.body
        const insertData = await db.Record.create(record)
        res.status(201).json({
            success: true,
            message: "Success Adding Records !",
            data: insertData
        })
    } catch (error) {
        next(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})