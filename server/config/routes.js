const emails = require("../controllers/emails")

module.exports = function (app) {
    app.post("/email", (req, res) => {
        emails.sendEmail(req, res);
    });
}