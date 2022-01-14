const sequelize = require("sequelize");
const Op = sequelize.Op;
const { contents, likes } = require("../../models");

module.exports = async(req, res) => {
    const searchWord = req.query.query;
    const contentsId = req.cookies.id;
    try {
        const contentData = await contents.findAll({
            where:{
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: `%${searchWord}%`,
                        }
                    },
                    {
                        director: {
                            [Op.like]: `%${searchWord}%`,
                        }
                    },
                    {
                        summary: {
                            [Op.like]: `%${searchWord}%`,
                        }
                    },
                    {
                        genres: {
                            [Op.like]: `%${searchWord}%`,
                        }
                    },
                    {
                        category: {
                            [Op.like]: `%${searchWord}%`,
                        }
                    },
                    {
                        detail: {
                            [Op.like]: `%${searchWord}%`,
                        }
                    }
                ]
            },
            include: [
                { model: likes, attributes: [ "id" ] }
            ]
        })

        let contentsList = contentData.map((el) => {
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
        console.log(contentsList)

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

        res.status(200).json({data: contentsDataSend, message: 'list import successful'})
    }
    catch(err) {
        res.status(500).json({ message: 'server error' })
    }
}