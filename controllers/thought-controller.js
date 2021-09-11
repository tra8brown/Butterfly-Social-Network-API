const { Thought, User } = require("../models");

const thoughtController = {
    //GET all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //create a thought via POST method

    //GET a Thought by :id

    //update thoughts reaction by :id

    //delete thoughts by :id
}

module.exports = thoughtController