const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const search = require('./search')
const comment = require('./comment')
const album = require('./album')
const authenticator = require('./authenticator')
const app = express()

// Set default promise as provider and connect mongoose
const dbUrl = process.env.DB_URL || 'mongodb://localhost/spotifyzier'
mongoose.Promise = global.Promise
mongoose.connect(dbUrl, { useNewUrlParser: true })

app.use(cors())
app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('dist'))
app.use('/docs', express.static('doc'))
app.use('/comments', comment)
app.use('/search', search)
app.use('/album', album)
app.use('/users', authenticator)

const port = process.env.APP_PORT || 5000
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
