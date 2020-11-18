module.exports = app => {
    
    const user = require("../controllers/user.controller.js");

    //---- User ------
    // Handles credential checking
    app.post("/api/login", user.checkCredentials);

    app.get("/api/users", user.getUsers);

    app.post("/api/register", user.register);
/*
    // Run specified Report and retireve results
    app.put("/api/reports/:reportId", reports.getReportResult);


    //---- Venta ------
    // Create a new sale in the system
    app.post("/api/sale", sale.createOrder);
*/
};