import express from 'express'
import TweetController from "./controllers/TweetControllers"
import LikeController from "./controllers/LikeController"

const routes = express.Router();

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.post('/likes/:id', LikeController.store);

export default routes;