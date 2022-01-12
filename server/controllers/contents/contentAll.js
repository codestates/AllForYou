const { contents, likes } = require("../../models");

module.exports = async (req, res) => {
    try {
        const contentsData = await contents.findAll({
            attributes: [
                "id",
                "title",
                "image",
                "category",
                "type",
                "director",
                "link",
                "runtime",
                "summary",
                "year",
                "genres"
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
                "category": el.category,
                "like": el.likes.length,
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
    }
    catch (err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}