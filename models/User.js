const mongoose = require('mongoose');

const modelName = 'user';
const UserSchema = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    username: String,
    password: String
});
const User = mongoose.model(modelName, UserSchema);

module.exports = User;