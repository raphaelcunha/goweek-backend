import Tweet from "../models/Tweet";

const TweetController = {
    async index (req, res) {
        const tweets = await Tweet.find({}).sort("-createAt");
        return res.json(tweets);
    },

    async store (req, res) {
        const tweet = await Tweet.create(req.body);
        req.io.emit('tweet', tweet);
        return res.json(tweet);
    }
}

export default TweetController;