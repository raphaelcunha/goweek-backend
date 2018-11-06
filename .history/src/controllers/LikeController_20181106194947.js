import Tweet from "../models/Tweet";

const LikeController = {
    async store (req, res) {
        const tweet = await Tweet.findById(req.params.id);
        tweet.set({ likes: tweet.likes + 1});
        await tweet.save();
        req.io.emit('like', tweet);
        return res.json(tweet);
    }
}

export default LikeController;