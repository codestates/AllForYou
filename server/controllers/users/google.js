const axios = require('axios');
const { users } = require('../../models');
require('dotenv').config();


module.exports = async(req, res ) => {
    try {
        const { accessToken } = req.cookies;
        const googleToken = await axios.post(
            `https://oauth2.googleapis.com/token?code=${accessToken}&client_id=${process.env.GOOGLE_CLIENT_ID}&lient_secret=${process.env.GOOGLE_CLIENT_SECRET}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&grant_type=AuthorizationCode`,
        );
        const { access_token } = googleToken.data;
        const googleUser = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
            headers: {
                cookies: `jwt ${access_token}`
            },
        });

        const [user, created] = await users.findOrCreate({
            where: {
                email: googleUser.data.email,
                socialtype: 'google',
            },
            defaults: {
                email: googleUser.data.email,
                nickname: googleUser.data.nickname,
                password: null,
                socialtype: 'google',
                user_picture: googleUser.data.user_picture,
            },
        });
        if(!created) {
            res.status(400).json({message: 'Bad Request'})
        } else {
            const access_token = sign(user[0].dataValues, process.env.ACCESS_SECRET, { expiresIn: "2d" });
            res.cookie('jwt', access_token, {
                // domain: domain,
                sameSite: 'Strict',
                secure: true,
                httpOnly: true,
                expires: new Date(Date.parse(new Date()) + 1000 * 3600 * 24 * 3)
            });
            res.status(200).json({data: access_tokne, message: 'Oauth google login success'});
        }
    } catch(err) {
        res.status(500).json({ message: 'server error' })
    }
};