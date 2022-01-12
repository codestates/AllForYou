const { contents, likes } = require("../../models");

module.exports = async(req, res) => {
    try {
    const categoryFilter = req.params.categoryName;
    const typeFilter = req.params.typeName;
    const categoryData = await contents.findAll({
        where: {
            category: categoryFilter
        }
    })  
    const typeData = categoryData.findAll({
            where: {
                type: typeFilter
            },
            include: [
                { model: likes, attributes: [ "id" ] }
            ]
        })
        let contentsList = typeData.map((el) => {
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
        if(type === "date") {
            contentsList = contentsList.sort((a, b) => b.year - a.year)
        }
        else if(type === "like") {
            contentsList = contentsList.sort((a, b) => b.like - a.like)
        }
        else {
            return res.status(409).json({data: null, message: "not authorized"})
        }
        return res.status(200).json({data: contentsList, message: "successfully viewed the data type individual page"})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
};