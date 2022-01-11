const { contents } = require("../../models");

module.exports = async(req, res) => {
    try {
        const searchWord = req.query.searchWord;
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
            }
        })
        const contentId = await contentData.data.map((el) => { return el.id; });
        const contentLike = await contentId.data.map(async (el) => {
            return await likes.count({ where: { content_id: el } })
        });
        const contentResultData = {
            contentData: contentData,
            contentLike: contentLike
        }
        res.status(200).json({data: contentResultData, message: 'list import successful'})
    }
    catch(err) {
        res.status(500).json({ message: 'server error' })
    }
}