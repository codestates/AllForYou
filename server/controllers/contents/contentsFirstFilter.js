const { contents, likes } = require("../../models");

module.exports = async(req, res) => {
    const filter = req.body.category;
    try {
        const contentsFirstFilter = await contents.findAll({
            where: {
                category: filter
            }
        })
        const contentId = await contentsFirstFilter.data.map((el) => { return el.id; });
        const contentLike = await contentId.data.map(async (el) => {
            return await likes.count({ where: { content_id: el } })
        });
        const contentFirstData = {
            contentsList: contentsList,
            contentLike: contentLike
        }
        return res.status(200).json({data: contentFirstData, message: "successfully viewed the category individual page"})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}