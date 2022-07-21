const {Router} = require("express");
const routes = Router();
const bcrypt = require("bcrypt")
const User = require("../model/User")

routes.post("/login", (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400).json({
            error: "Iltimos hamma kataklarni tuldiring"
        })
    }

    User.findOne({email}, (err, user) => {
        if(err) throw err;
        if(!user) {
            res.status(400).json({
                error: "Bunday emailli foydalanuvchi topilmadi"
            })
        }
        else {
            bcrypt.compare(password, user.password, (err, data) => {
                if(err) throw err;
                if(!data) {
                    res.status(400).json({
                        error: "Parolingiz xato boshqattan urinib kurin"
                    })
                }
                else {
                    res.status(200).json({
                        msg: "Tizimga kirdingiz",
                        user
                    })
                }
            })
        }
    })

    
})

module.exports = routes