import https from "https";
import fs from "fs";

module.exports = app => {
    app.db.sequelize.sync().done(() => {
        if (process.env.NODE_ENV !== "test") {

            const credentials = {
                key: fs.readFileSync("ntask.key", "utf8"),
                cert: fs.readFileSync("ntask.cert", "utf8")
            }

            https.createServer(credentials, app).listen(app.get("port"), () => {
                console.log(`NTask API - porta ${app.get("port")}`);
            });
        }
    });
}