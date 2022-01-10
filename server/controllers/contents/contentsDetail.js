const { contents } = require("../../models");

module.exports = async(req, res) => {
    try {
        const contentsDetailList = await contents.findOne({
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({data: contentsDetailList, message: "successfully viewed the details page"})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}