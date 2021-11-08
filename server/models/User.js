const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    email: {type: String, required: true, unique: true },
    password: {type: String, required:true},
    likedShowsId: [{type: Types.ObjectId, ref:'likedShowID'}],
    username: {type: String}
})

module.exports = model('User', schema);