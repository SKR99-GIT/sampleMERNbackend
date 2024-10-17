/* app.js eke tiyen URLs wlt access wennd path hadagnnd oni, ann ekata tmi me file ek oni wenn */
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers); 
router.post('/createuser', controller.addUser); 
router.put('/updateuser', controller.updateUser); 
router.delete('/deleteuser', controller.deleteUser); 

module.exports = router;