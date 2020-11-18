module.exports = app => {

    const user = require("../controllers/user.controller.js");

    //---- User ------
    // Handles credential checking
    app.post("/api/login", user.checkCredentials);
    //Retrieves all users
    app.get("/api/users", user.getUsers);
    //Handles user registration
    app.post("/api/register", user.register);
};