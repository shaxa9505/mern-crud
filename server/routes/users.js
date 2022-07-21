const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")
const User = require("../model/User")

/* GET users listing. */
router.post('/users', (req, res, next) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({
            error: "Iltimos hamma kataklarni tuldiring"
        })
    }
    User.findOne({email}, (err, data) => {
        if (err) throw err
        if (data) {
            return res.status(400).json({
                error: "Bunday emaildagi foydalanuvchi bor"
            })
        }
        else {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) throw err;
                else {
                    const user = new User({
                        name: name,
                        email: email,
                        password: hash
                    })
                    user.save((err) => {
                        if (err) throw err
                        return res.status(200).json({
                            msg: "Malumotingiz muvaffaqiyatli qabul qilindi Ruyhatdan utdingiz",
                            // user: user
                        })
                    })
                }
            })
        }
    })
});


// bu bumekkan yul bunaqa narsa pug da buladi esindan chiqarma buni
// router.get("/delete/user/:id", (req, res, next) => {
//     User.findByIdAndDelete(req.params.id, (err) => {
//         if(err) throw err;
//         else {
//             res.redirect("/admin")
//         }
//     })
// })

module.exports = router;
