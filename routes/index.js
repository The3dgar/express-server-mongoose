const express = require('express')
const app = express()
app.use('/api/user',require('./user'));

module.exports = app
