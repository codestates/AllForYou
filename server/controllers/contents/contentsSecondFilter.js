const { contents } = require("../../models");

module.exports = async(req, res) => {
    try {

        return res.status(200).json({data: contentsSecondFilter, message: "successfully viewed the data type individual page"})
    }
    catch(err) {
        return res.status(500).json({ data: null, message: "server error" })
    }
}