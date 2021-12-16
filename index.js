const express = require('express')
const produceBeneficiary = require('./services/beneficiary')
const bodyParser = require('body-parser');
const { connectConsumer } = require('./connectionRabbit');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000


app.post('/produceBeneficiary', (req, res) => {
  if (produceBeneficiary(req.body))
    res.sendStatus(200)
  else
    res.sendStatus(500)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})