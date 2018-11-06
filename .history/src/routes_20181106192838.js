import express from 'express'
import TweetController from "./controllers/TweetControllers"

const routes = express.Router();

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);


export default routes;