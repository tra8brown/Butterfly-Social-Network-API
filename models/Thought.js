const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId(),
        default: () => new Types.ObjectId()
    },
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

// Borrowed from 
// https: //stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
function getDate(createdAt) {
    var yyyy = createdAt.getFullYear();
    var mm = createdAt.getMonth() + 1; // getMonth() is zero-based
    var dd = createdAt.getDate();
    return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd}
}

//create the pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//export the Pizza model
model.exports = Pizza;