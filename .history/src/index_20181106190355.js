import express from 'express'
const app = express();

app.get('/', (req, res) => {
    return res.send('Hellor World 22');
});
 app.listen(3000, () => console.log('Server started on port 3000'));