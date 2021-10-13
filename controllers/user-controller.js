const { builtinModules } = require("module");
const { model, models } = require("mongoose");
const { User, Thought, Reaction } = require("../models");

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //create user via POST method
    addUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    //GET user by :id
    getUserById(req, res){
        User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
    },

    //Udate User by :id
    updateUserById(req, res){
        User.findById(req.params.id)
        .then(user => {
            return Object.assign(user, 
                {username:req.body.username}, 
                {email:req.body.email}
            );
        }).then((model) => {
            return model.save();
        }).then((updatedModel) => {
            res.json({
                updatedModel
            });
        })
        .catch(err => res.status(400).json(err));
    }

    //DELETE user by :id

    //Updat4e a friend

    //deleting a friend
}

module.exports = userController