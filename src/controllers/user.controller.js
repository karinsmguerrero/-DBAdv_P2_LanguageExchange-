// Get all the clients from the DB
var user = require("../models/user.js");

exports.checkCredentials = (req, res) => {
    console.log("checking");
    console.log(req.body.user);
    console.log(req.body.password);
    res.send({ result: 1 });
    return;
};

async function register(req, res) {
    try {
        await user.create(req.body);
        res.send({ result: 1 });
        return;
    }
    catch {
        res.send({ result: 2 });
        return;
    }
};
module.exports.register = register;

async function getUsers(req, res) {
    await user.find({}, { name: 1, lastname1: 1, lastname2: 1, age: 1 }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
};

module.exports.getUsers = getUsers;