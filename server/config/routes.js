const emails = require("../controllers/emails")
var path = require("path");

module.exports = function (app) {
    app.post("/email", (req, res) => {
        emails.sendEmail(req, res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}