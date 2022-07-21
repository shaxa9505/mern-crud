module.exports = () => {
    const mongoose = require("mongoose");
    mongoose.connect("mongodb+srv://laborMigration:NI3UYcgrJBbzi39S@labormigrationcluster.idskwah.mongodb.net/test")

    const db = mongoose.connection;
    db.on("open", () => console.log("MongoDb ga onlayn ulandik !!!!!"))
    db.on("error", (err) => console.log("Bizda Xatolik bor Xatolik ....", err))
}
