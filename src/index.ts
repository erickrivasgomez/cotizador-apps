import express from 'express'
import bodyParser from 'body-parser'
import { sequelize } from './database/connection'
import { questionController } from './controllers/questionController'
import cors from 'cors'


const port = 3005

const app = express()
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors())

app.use('/api', questionController)
app.get('/', (req, res) => {
  res.send('API is running OK')
})

sequelize

  .authenticate()
  .then( async() => {
    app.listen(port, ()=> {
        console.log("APi is running on port " + port)
    })
})

