const express = require('express')
const { production, demand } = require('./data/data')
const {filterData} = require('./utils/utils')
const app = express()
const port = process.env.PORT || 9000

app.route('/api/production').get((req, res) => {
  res.status(200).json(filterData(production))
})

app.route('/api/demand').get((req, res) => {
  res.status(200).json(filterData(demand))
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
