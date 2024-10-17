const { response } = require('express');
const User = require('./model');

/* CRUD SERVICES */

/* usersla okkom gannd API ek, mongo DB wldi promise ekakin tmi userslawa gannd wenn */
const getUsers = (req, res, next) => {
    User.find() /* me find ek sql wl SELECT ekata samanai, mrkrdi return krnn promise ekk */
    .then(response => {
        res.json({response})
    })
    .catch(error => {
        res.json({error})
    })
};

/* user kenek add krnnd function ek */
const addUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name
    });
    user.save()
    .then(response => {
        res.json({response})
    })
    .catch(error => {
        res.json({error})
    })
}

/* user edit function */
const updateUser = (req, res, next) => {
   /*  const id = req.body.id; mehem tmi apit oni deyk variable ekakata ganne
    const name = req.body.name; */
    /* uda varible ekakat gaththa wade lesiyenm krgnnd puluwn mehem */
    const {id, name} = req.body; /* meken kiyanne request body eke {} athule tiyen item walata adla values gann kiyl, ekt kiyno api object destructuring kiyl */
    /* id ek api ewana id ekea wena kenawa argen, eyata set krnnd oni eyage name ek api ewana name ek bawata */
    User.updateOne({id: id}, {$set: {name: name}})
    .then(response => {
        res.json({response})
    })
    .catch(error => {
        res.json({error})
    })
}

const deleteUser = (req, res, next) => {
    const id = req.body.id;
    User.deleteOne({id: id})
    .then(response => {
        res.json({response})
    })
    .catch(error => {
        res.json({error})
    })
}

/* id ek pass karama adala details gannd */
/* const getUserById = (id,callback) => { */
    /* .find eken tmi yawana id ekata adala details hoyann */
/*     const user = users.find(user => user.id == id);
    callback(user);
} */

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;