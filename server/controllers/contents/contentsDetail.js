const { contents, likes, users } = require("../../models");

module.exports = async(req, res) => {
    const contents_id = req.params.contentId;
    const contentsId = req.cookies.id;
    try {
        const contentData = await contents.findOne({
            where: {
                id: contents_id
            },
            include: [
                { model: likes, attributes: [ "id" ] }
            ]
        })

        const contentsDetail = { 
            "id": contentData.id,
            "title": contentData.title,
            "director": contentData.director,
            "year": contentData.year,
            "rating": contentData.rating,
            "runtime": contentData.runtime,
            "summary": contentData.summary,
            "genres": contentData.genres,
            "image": contentData.image,
            "category": contentData.category,
            "like": contentData.likes.length,
            "detail": contentData.detail,
            "link": contentData.link,
            "type": contentData.type,
            "view": contentData.view,
        }

        const likesData = await users.findOne({
            whehe : {
                id: contentsId
            },
            include: [
                { model: likes, attributes: ["content_id"] }
            ]
        })

        const likesList = likesData.dataValues.likes.map((el) => {
            return {
                "content_id": el.content_id
            }
        })

        const contentsDataSend = {
            contentsDetail: contentsDetail,
            likesList: likesList
        }

        return res.status(200).json({data: contentsDataSend, message: "successfully viewed the details page"})
    }
    catch(err) {
        return res.status(500).json({ data: err, message: "server error" })
    }
}