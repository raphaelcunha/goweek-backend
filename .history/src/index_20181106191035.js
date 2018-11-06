import express from 'express'
import mongoose from 'mongoose'
const app = express();

mongoose.connect('mongodb://goweek-rfa:goweek123@ds155313.mlab.com:55313/goweek-rfa', {
    useNewUrlParser: true
})

app.get('/', (req, res) => {
    return res.send('Hellor World');
});

app.listen(3000, () => console.log('Server started on port 3000'));