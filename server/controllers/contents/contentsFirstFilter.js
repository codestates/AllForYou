const { contents } = require("../../models");

module.exports = async(req, res) => {
    const filter = req.body.category;
    try {
        const contentsFirstFilter = await contents.findAll({
            where: {
                category: filter
            }
        })
        return res.status(200).json({data: contentsFirstFilter, message: "successfully viewed the category individual page"})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}