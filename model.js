const mongoose = require('mongoose');
const Schema = mongoose.Schema; /* model ekak hadagnnd schema ekk */

/* user kenek kohomd ape tiyenn oni, monawada tiyenn oni properties kiyala dena podi blueprint ekk */
const userSchema = new Schema({
    id: Number,
    name: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;