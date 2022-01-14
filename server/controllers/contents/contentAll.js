const { contents, likes } = require("../../models");

module.exports = async (req, res) => {
    const contentsId = req.cookies.id;
    try {
        const contentsData = await contents.findAll({
            attributes: [
                "id",
                "title",
                "director",
                "year",
                "rating",
                "runtime",
                "summary",
                "genres",
                "image",
                "category",
                "detail",
                "link",
                "type",
                "view"
            ],
            include: [
                { model: likes, attributes: ["id"] }
            ]
        })
        // console.log(contentsData)
        let contentsList = contentsData.map((el) => {
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
        // console.log(likesList)

        const contentsDataSend = {
            contentsList: contentsList,
            likesList: likesList
        }
        // console.log(contentsList)
        return res.status(200).json({ data: contentsDataSend, message: "successfully contents show all" })
    }
    catch (err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}