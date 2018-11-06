import express from 'express'

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send('Hellor World');
});

export default routes;