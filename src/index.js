import express from 'express'
import mongoose from 'mongoose'
import routes from './routes';
import { Server } from 'http';
import cors from 'cors'
import SocketIO from 'socket.io';
import dotenv from 'dotenv'
dotenv.config();
const app = express();
const server = Server(app);
const io = SocketIO(server);

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds155313.mlab.com:55313/goweek-rfa`, {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io;
    return next();
});
app.use(cors());
app.use(express.json());
app.use(routes)

server.listen(3000, () => console.log('Server started on port 3000'));