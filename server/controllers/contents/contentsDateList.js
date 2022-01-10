const { contents } = require("../../models");

module.exports = async(req, res) => {
    try {
        const contentsDateList = await contents.findAll({
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
                "createdAt",
                "updatedAt"
            ],
            order:[{model: contents}, 'year', ' DESC'],
        })
        return res.status(200).json({data: contentsDateList, message: "정보 전달 완료."})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "서버 오류." })
    }
}