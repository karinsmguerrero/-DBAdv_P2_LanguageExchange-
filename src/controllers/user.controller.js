// Get all the clients from the DB
var user = require("../models/user.js");

module.exports.checkCredentials = async (req, res) => {
    console.log("checking");
    const rs = await user.aggregate([
        {
            $project:
            {
                _id : 0,
                result: { $and: [{ $eq: [ "$user", req.body.user ] },{ $eq: [ "$password", req.body.password ] }] }
            }
        },
        {
            $match: {
                result : true
            }
        }
        
    ]);
    if(rs.length == 0)
        res.send([{ result : 2}]);
    else
        res.send( rs);
    //res.send({ result: 1 });
    return;
};

module.exports.register = async (req, res) => {
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

module.exports.getUsers = async (req, res) => {
    await user.find({}, { name: 1, lastname1: 1, lastname2: 1, age: 1 }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
};