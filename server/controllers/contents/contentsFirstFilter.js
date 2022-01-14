const { contents, likes } = require("../../models");

module.exports = async(req, res) => {
    const filter = req.params.categoryName;
    const contentsId = req.cookies.id;
    try {
        const contentsFirstFilter = await contents.findAll({
            where: {
                category: filter
            },
            include: [
                { model: likes, attributes: [ "id" ] }
            ]
        })

        let contentsList = contentsFirstFilter.map((el) => {
            return {
                "id": el.id,
                "title": el.title,
                "director": el.director,
                "year": el.year,
                "rating": el.rating,
                "runtime": el.runtime,
                "summary": el.summary,
                "genres": el.genres,
                "image": el.image,
                "category": el.category,
                "like": el.likes.length,
                "detail": el.detail,
                "link": el.link,
                "type": el.type,
                "view": el.view,
            }
        })

        const likesData = await likes.findAll({
            whehe : {
                user_id: contentsId
            },
            attributes: [
                "content_id"
            ]
        })

        let likesList = likesData.map((el) => {
            return {
                "content_id": el.content_id
            }
        })

        const contentsDataSend = {
            contentsList: contentsList,
            likesList: likesList
        }
        
        return res.status(200).json({data: contentsDataSend, message: "successfully viewed the category individual page"})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}