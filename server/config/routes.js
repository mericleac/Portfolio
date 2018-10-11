const emails = require("../controllers/emails")

module.exports = function (app) {
    app.post("/email", (req, res) => {
        emails.sendEmail(req, res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}