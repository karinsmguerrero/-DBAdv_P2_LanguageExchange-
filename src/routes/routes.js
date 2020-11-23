module.exports = app => {

    const user = require("../controllers/user.controller.js");

    //---- User ------
    // Handles credential checking
    app.post("/api/login", user.checkLogin);
    //Handles user registration
    app.post("/api/register", user.register);
    // Handle user information
    app.post("/api/userinfo", user.getUserInfo);
    // Handles hobby adding
    app.put("/api/addHobby", user.addHobby);
    // Handles hobby deletion
    app.delete("/api/deleteHobby", user.deleteHobby);
    // Handles contact info adding
    app.put("/api/addContact", user.addContact);
    // Handles contact deletion
    app.delete("/api/deleteContact", user.deleteContact);
    //Retrieves all users by language desired - Report 1
    app.post("/api/reports/1", user.getUsersByLangDesiredToTeach);
    //Retrieves all users by language desired who teach a desired language - Report 2
    app.post("/api/reports/2", user.getUsersByLangDesiredAndTeach);
    //Retrieves all users by language desired who teach a desired language - Report 3
    app.post("/api/reports/3", user.getUsersByLangDesiredAndTeachAndCountry);
     //Retrieves all users by language desired who teach a desired language - Report 4
     app.post("/api/reports/4", user.getUsersByLangDesiredAndTeachAndAge);
    //Retrieves all users - Report 5
    app.get("/api/reports/5", user.getUsers);
    //Retrieves all users - Report 6
    app.get("/api/reports/6", user.getUsersByCountry);
    //Retrieves all users - Report 7
    app.get("/api/reports/7", user.getUsersByLangTeach);
    //Retrieves all users - Report 8
    app.get("/api/reports/8", user.getUsersByLangDesired);
};