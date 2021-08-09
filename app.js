const express = require('express')
const expbhs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')



// Database

const db = require('../react-folio-node-backend/reactfolio/config/database.js')
const { appendFileSync } = require('fs')

db.authenticate()
.then(() => console.log('Database Connected...'))
.catch(err => console.log('Error ' + err ))

const app = express()
const port = 8080


app.get('/', (req, res) => {
  res.send('There is no frontend here sir!')
})

app.use('/projects', require('../react-folio-node-backend/reactfolio/routes/projects.js'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})