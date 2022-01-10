const { contents } = require("../../models");

module.exports = async(req, res) => {
    try {
        const contentsList = await contents.findAll({
            where: {
                title: req.body.title
            }
        })
        return res.status(200).json({data: contentsList, message: "successfully contents show all"})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}