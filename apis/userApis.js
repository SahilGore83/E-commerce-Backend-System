const User = require('../model/User')

const user_all = async (req, res) => {
    try {
        const user = await User.find()
        console.log(`Data Sent`);
        res.json(user)
    }
    catch (error) {
        console.log(`fetch error :- ${error}`);
        res.json({ 'message': error })
    }
}

const insert_user = async (req, res) => {
    const user = new User({
        u_serid: req.body.u_serid,
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd,
        u_u_email: req.body.u_u_email,
        u_addr: req.body.u_addr,
        u_contact: req.body.u_contact,
    })
    try {
        const saveUser = await user.save()
        console.log("User Inserted ");
        res.status(200).send(saveUser)
    }
    catch (err) {
        // console.log("Insert Error");
        console.log(`insert error :- ${err}`);
        res.json({ "message": err })

    }
}

const update_user = async (req, res) => {
    let u_serid = req.body.u_serid
    const user = {
        u_serid: req.body.u_serid,
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd,
        u_u_email: req.body.u_u_email,
        u_addr: req.body.u_addr,
        u_contact: req.body.u_contact,
    }
    try {
        const updateUser = await User.updateOne({ u_serid }, user)
        if (updateUser.modifiedCount != 0 || updateUser.matchedCount != 0) {
            console.log("User Updated")
            res.json({ 'update': 'Success' })
        }
        else {
            console.log("User Not updated");
            res.json({ 'update': 'Record not found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}

const delete_user = async (req, res) => {
    let u_serid = req.body.u_serid
    try {
        const userDelete = await User.deleteOne({ u_serid })
        if (userDelete.deletedCount != 0) {
            console.log("User Deleted");
            res.json({ "message": "deleted" })
        }
        else {
            console.log("record not found");
            res.send({ "message": "record not found" })

        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}


module.exports = {
    user_all,
    insert_user,
    update_user,
    delete_user
}
