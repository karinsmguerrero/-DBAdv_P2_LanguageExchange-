module.exports = app => {

    const user = require("../controllers/user.controller.js");

    //---- User ------
    // Handles credential checking
    app.post("/api/login", user.checkCredentials);
    //Retrieves all users
    app.get("/api/users", user.getUsers);
    //Handles user registration
    app.post("/api/register", user.register);
    // Handles hobby addong
    app.put("/api/addHobby", user.addHobby);
    // Handles hobby deletion
    app.delete("/api/deleteHobby", user.deleteHobby);
    //Retrieves all users by language desired - Report 1
    app.post("/api/reports/1", user.getUsersByLangDesired);
    //Retrieves all users by language desired who teach a desired language - Report 2
    app.post("/api/reports/2", user.getUsersByLangDesiredAndTeach);
};