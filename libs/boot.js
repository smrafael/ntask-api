module.exports = app => {
    app.db.sequelize.sync().done(() => {
        if (process.env.NODE_ENV !== "test") {
            app.listen(app.get("port"), () => {
                console.log(`NTask API - porta ${app.get("port")}`);
            });
        }
    });
}