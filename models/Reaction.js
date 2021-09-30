const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    // reactionId: {
    //     type: Schema.Types.ObjectId(),
    //     default: () => new Types.ObjectId()
    // },
    reactionBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)

    },
});

module.exports = ReactionSchema;