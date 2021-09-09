const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    toJSON: {
        virtuals: true
    }
});

//virtual
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

//create the user model using the UserSchema
const User = model('UserSchema', UserSchema);

//export the model
model.exports = User;