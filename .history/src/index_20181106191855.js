import express from 'express'
import mongoose from 'mongoose'
import routes from 'routes.js';
const app = express();

mongoose.connect('mongodb://admin:goweek123@ds155313.mlab.com:55313/goweek-rfa', {
    useNewUrlParser: true
})

app.use(routes)

app.listen(3000, () => console.log('Server started on port 3000'));