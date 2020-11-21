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

module.exports.getUsers = async (req, res) => {
    await user.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    return;
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
    const ans = await user.update({ user: req.body.user }, {
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


module.exports.getUsersByLangDesired = async (req, res) => {
    const lang_desired = req.body.lang_desired; 

    var desired = [];
    //Extracts names of languages
    lang_desired.forEach(lang => {
        desired.push(lang.name);
    });

    await user.find({ "lang_desired.name": { $in: desired} }, function (err, result) {
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

    console.log(teach);

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

//db.users.find({ $and : [{"lang_desired.name" :{ $in: ["Inglés", "Español"] } }, {"lang_teach.name" : {$in: ["Frances", "Alemán"]} } ]})  