import express from 'express'
import cors from 'cors'
import routes from './routes';
import Path from 'path'

const app = express();

app.use(express.json())
app.use(cors())
app.use(routes)

app.use(function (err, req, res, next) {
  console.log('This is the invalid field ->', err.field)
  next(err)
})


app.listen(3333, () => {
  console.log("Server online at port 3333")
})