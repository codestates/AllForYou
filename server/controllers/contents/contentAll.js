const { contents, likes } = require("../../models");

module.exports = async(req, res) => {
    try {
        const contentsList = await contents.findAll({
            where: {
                id: req.params.id
            }
        })
        const contentId = await contentsList.data.map((el) => { return el.id; });
        const contentLike = await contentId.data.map(async (el) => {
            return await likes.count({ where: { content_id: el } })
        });
        const contentData = {
            contentsList: contentsList,
            contentLike: contentLike
        }
        return res.status(200).json({data: contentData, message: "successfully contents show all"})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}