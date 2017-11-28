const app = require('express')()
const { extractNumber } = require('./lib')

app.get('/', (req, res) => {
  res.json({
    status: 'OK'
  })
})

app.get('/api/:nopol', (req, res) => {
  const { nopol } = req.params

  res.json({
    number: extractNumber(nopol)
  })
})

module.exports = app
