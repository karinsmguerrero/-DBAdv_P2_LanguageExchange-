// Get all the clients from the DB
var user = require("../models/user.js");

module.exports.checkCredentials = async (req, res) => {
    const rs = await user.aggregate([
        {
            $project:
            {
                _id: 0,
                result: { $and: [{ $eq: ["$user", req.body.user] }, { $eq: ["$password", req.body.password] }] }
            }
        },
        {
            $match: {
                result: true
            }
        }

    ]);
    if (rs.length == 0)
        res.send({ result: 2 });
    else
        res.send({ result: 1 });
    return;
};

module.exports.checkLogin = async (req, res) => {
    console.log("checking");
    const rs = await user.find({user: req.body.user, password:req.body.password});
    if(rs.length == 0)
        res.send([{ result : 2}]);
    else
        //res.send( rs);
        console.log(rs);
        res.send(rs);
    return;
};

module.exports.getUserInfo = async (req, res) => {
    console.log("checking");
    const rs = await user.find({user: req.body.user});
    if(rs.length == 0)
        res.send([{ result : 2}]);
    else
        //res.send( rs);
        console.log(rs);
        res.send(rs);
    return;
};

module.exports.register = async (req, res) => {
    var ans;
    await user.find({ user: { $exists: true, $eq: req.body.user } }, { _id: 0, user: 1 }, function (err, result) {
        console.log(ans)
        if (err) {
            ans = err;
        } else {
            ans = result;
        }
    });
    if (ans != undefined && ans.length == 0) {
        await user.create(req.body);
        res.send({ result: 1 });
        return;
    }
    else {
        res.send({ result: 2 });
        return;
    }
};

module.exports.addHobby = async (req, res) => {
    const ans = await user.updateOne(
        { user: req.body.user },
        { $push: { hobbies: { name: req.body.name } } }
    )
    if (ans.nModified >= 1) {
        res.send({ result: 1 });
    }
    else {
        res.send({ result: 2 });
    }
}

module.exports.deleteHobby = async (req, res) => {
    const ans = await user.updateMany({ user: req.body.user }, {
        $pull: {
            hobbies: {
                name: req.body.name
            }
        }
    }, { multi: true })
    if (ans.nModified >= 1) {
        res.send({ result: 1 });
    }
    else {
        res.send({ result: 2 });
    }
}


module.exports.addContact = async (req, res) => {
    const ans = await user.updateOne(
        { user: req.body.user },
        { $push: { contact: { name: req.body.name } } }
    )
    if (ans.nModified >= 1) {
        res.send({ result: 1 });
    }
    else {
        res.send({ result: 2 });
    }
}

module.exports.deleteContact = async (req, res) => {
    const ans = await user.updateMany({ user: req.body.user }, {
        $pull: {
            contact: {
                name: req.body.name
            }
        }
    }, { multi: true })
    if (ans.nModified >= 1) {
        res.send({ result: 1 });
    }
    else {
        res.send({ result: 2 });
    }
}


module.exports.getUsersByLangDesiredToTeach = async (req, res) => {
    const lang_desired = req.body.lang_desired;

    var desired = [];
    //Extracts names of languages
    lang_desired.forEach(lang => {
        desired.push(lang.name);
    });

    await user.find({ "lang_desired.name": { $in: desired } }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
};

module.exports.getUsersByLangDesiredAndTeach = async (req, res) => {
    const lang_desired = req.body.lang_desired;
    const lang_Teach = req.body.lang_teach;

    var desired = [];
    lang_desired.forEach(lang => {
        desired.push(lang.name);
    });

    var teach = [];
    lang_Teach.forEach(lang => {
        teach.push(lang.name);
    });

    await user.find({
        $and: [{ "lang_desired.name": { $in: desired } },
        { "lang_teach.name": { $in: teach } }]
    }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
};

module.exports.getUsersByLangDesiredAndTeachAndCountry = async (req, res) => {
    const lang_desired = req.body.lang_desired;
    const lang_Teach = req.body.lang_teach;
    const countries = req.body.countries;

    var desired = [];
    lang_desired.forEach(lang => {
        desired.push(lang.name);
    });

    var teach = [];
    lang_Teach.forEach(lang => {
        teach.push(lang.name);
    });

    var country = [];
    countries.forEach(con => {
        country.push(con.name);
    });

    console.log(teach);

    await user.find({
        $and: [{ "lang_desired.name": { $in: desired } },
        { "lang_teach.name": { $in: teach } }, { country: { $in: country } }]
    }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
};

module.exports.getUsersByLangDesiredAndTeachAndAge = async (req, res) => {
    const lang_desired = req.body.lang_desired;
    const lang_Teach = req.body.lang_teach;
    const countries = req.body.countries;
    const age = req.body.age;

    var desired = [];
    lang_desired.forEach(lang => {
        desired.push(lang.name);
    });

    var teach = [];
    lang_Teach.forEach(lang => {
        teach.push(lang.name);
    });

    var country = [];
    countries.forEach(con => {
        country.push(con.name);
    });

    console.log(teach);

    await user.find({
        $and: [{ "lang_desired.name": { $in: desired } },
        { "lang_teach.name": { $in: teach } }, { country: { $in: country } }, { age: { $gte: age[0] } }, { age: { $lte: age[1] } }]
    }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
};

module.exports.getUsers = async (req, res) => {
    await user.find({}, { name: 1, lastname1: 1, lastname2: 1, country: 1, lang_desired: 1 }, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
};

module.exports.getUsersByCountry = async (req, res) => {
    await user.aggregate([{ $group: { _id: "$country", total: { $sum: 1 } } }], function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
};

module.exports.getUsersByLangTeach = async (req, res) => {
    await user.aggregate([{ $project: { _id: 0, lang_teach: 1 } },
    { $unwind: "$lang_teach" },
    { $group: { _id: "$lang_teach.name", total: { $sum: 1 } } }], function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
};

module.exports.getUsersByLangDesired = async (req, res) => {
    await user.aggregate([{ $project: { _id: 0, lang_desired: 1 } },
    { $unwind: "$lang_desired" },
    { $group: { _id: "$lang_desired.name", total: { $sum: 1 } } }], function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
};
