const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        userID: {
            type: Schema.Types.ObjectId,
            default: () => Types.ObjectId()
        },
        username: {
            type: String, 
            // required: function() { return this.userId != null; },
            unique: true,
            trim: true
        },
        email: {
            type: String,
            // required: function() { return this.userId != null; },
            unique: true,
            // validate: [validateEmail, 'Please enter a valid e-mail address'],
            // match: ['/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/', 'Please enter a valid e-mail address']
        },
        // thoughts: {
            // array matching { _id } for thoughts model 
        // },
        // friends: {
            // array { _id } self referencing User Model ?
        // }
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;