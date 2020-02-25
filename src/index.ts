import express from 'express'
import bodyParser from 'body-parser'
import { sequelize } from './repositories'

const port = 1337

const app = express()
app.use( bodyParser.json() )

//app.use( '/user', userController)
//app.use( '/post', postController)

app.get('/', (req, res) => {
    res.send('API is running OK')
})

sequelize()

    .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });

/*connectDB().then( async() => {
    app.listen(port, ()=> {
        console.log("APi is running on port " + port)
    })
})
*/