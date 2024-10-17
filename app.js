const express = require('express'); /* Import the express module*/
const app = express();/*Create an instance of the express app*/
const cors = require('cors');
const controller = require('./controller') /* import controller file */

/* mulinnm app express instase ekt middle-ware ekk add krnnd tmi me yann,(middle-ware ekak kiyl kiynn api ekk call krnot eke jaathi 2k tiyeno request and responce kiyl, ethkot me warga dekata adala events wlt life cycle wlt change ekk krnnd tmi me middleware use krnn)*/
app.use(cors());

/* html form eken wenass widiahata decode krl ewana information ekak me express application eke method eken access krnkot ewa hariyata encode krl gannd me middle ware ek use krno*/
app.use(
    express.urlencoded({
        extended: true,/* complex/nested object unath, apit url encoded krgnnd puluwn, meka damme nathuw tibboth normal widihata array and string withrai encode wenn*/
    })
)

/* mekedi krnn request response bodies wl api yawana data json object or json arrays wlt convert krn ek */
app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers(req, res, next => {
        res.send();
    })
});

app.post('/createuser', (req, res) => {
    /* request ekk widihata tmi id ek api yawann, query parameter ekk widihata tmi data ek pass krnn eg:-url eke "?id=1" (eka 1k paradana widihak, tw karama tiyeno) */
    /* const id = req.query.id; */
    controller.addUser(req.body, (callback) => {
        res.send();
    });
})

app.put('/updateuser', (req, res) => {
    /* request ekk widihata tmi id ek api yawann, query parameter ekk widihata tmi data ek pass krnn eg:-url eke "?id=1" (eka 1k paradana widihak, tw karama tiyeno) */
    /* const id = req.query.id; */
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
})

app.delete('/deleteuser', (req, res) => {
    /* request ekk widihata tmi id ek api yawann, query parameter ekk widihata tmi data ek pass krnn eg:-url eke "?id=1" (eka 1k paradana widihak, tw karama tiyeno) */
    /* const id = req.query.id; */
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
})

module.exports = app;