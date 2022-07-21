const {Router} = require("express");
const routes = Router();
const User = require("../model/User")

routes.get("/admin", (req, res, next) => {
    User.find({}, (err, admin) => {
        if(err) throw err;
        res.status(200).json({
            admin
        })
    })
})

routes.delete("/delete/:id", (req, res) => {
    const itemId = req.params.id;
    User.findByIdAndDelete(itemId, (err) => {
        if(err) throw err;
        res.status(200).json({msg: "Ma'lumotlaringiz muvaffaqiyatli uchirildi"})
    })
})

routes.post("/updateUser/:id", (req, res) => {
    const editUser = {};
    editUser.name = req.body.name;
    editUser.email = req.body.email;
    editUser.password = req.body.password;

    const query = {_id: req.params.id}


    User.findByIdAndUpdate(query, editUser, (err) => {
        if(err) throw err;
        else {
            res.status(200).json({
                msg: "Ma'lumotlaringiz muvaffaqiyatli o'zgartirildi"
            })
        }
    })
})


module.exports = routes;