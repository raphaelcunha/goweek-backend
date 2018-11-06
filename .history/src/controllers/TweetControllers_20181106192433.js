import Tweet from "../models/Tweet";

export default {
    async index (req, res) {
        const tweets = await Tweet.find({}).sort("-createAt");
        return res.json(tweets);
    },

    async models (req, res) {

    }
}