const { contents, likes } = require("../../models");

module.exports = async(req, res) => {
    try {
        const contentsDetailList = await contents.findOne({
            where: {
                id: req.params.id
            }
        })
        const contentLike = await likes.count({ 
            where: { 
                content_id: contentsDetailList.data.id 
            } 
        })
        const contentDetailData = {
            contentsDetailList: contentsDetailList,
            contentLike: contentLike
        }
        return res.status(200).json({data: contentDetailData, message: "successfully viewed the details page"})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}