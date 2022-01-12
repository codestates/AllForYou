const { contents, likes } = require("../../models");

module.exports = async (req, res) => {
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
<<<<<<< HEAD
                "detail",
                "link",
                "type",
                "view",
=======
                "type",
                "director",
                "link",
                "runtime",
                "summary",
                "year",
                "genres"
>>>>>>> d74cfe43003a618141ceef6e184ef64804ba9d63
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
<<<<<<< HEAD
                "detail": el.detail,
                "link": el.link,
                "type": el.type,
                "view": el.view,
            }
        })
        // console.log(contentsList)
        return res.status(200).json({data: contentsList, message: "successfully contents show all"})
=======
                "image": el.image,
                "type": el.type,
                "director": el.director,
                "link": el.link,
                "runtime": el.runtime,
                "summary": el.summary,
                "year": el.year,
                "genres": el.genres
            }
        })
        console.log(contentsList)
        return res.status(200).json({ data: contentsList, message: "successfully contents show all" })
>>>>>>> d74cfe43003a618141ceef6e184ef64804ba9d63
    }
    catch (err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}