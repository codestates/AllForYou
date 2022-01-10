const { contents } = require("../../models");
const { likes } = require("../../models");

module.exports = async(req, res) => {
    try {
        const contentsList = await contents.findAll({
            where: {
                title: req.body.title
            }
        })
        const like = `SELECT COUNT(content_id) FROM likes WRERE content_id =${id}`
        const contentLike = await likes.findAll({
            where: {
                content_id: like
            }
        })
        return res.status(200).json({data: {contentsList, contentLike}, message: "successfully contents show all"})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}