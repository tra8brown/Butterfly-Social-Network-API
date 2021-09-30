const router = require('express').Router();
const { getAllUsers, getUserById, addUser, updateUserById, deleteUserById } = require('../../controllers/user-controller');

//GET all users
router
    .route('/')
    .get(getAllUsers)
    .post(addUser);

//GET a single user by it's _id
// todo - uncomment

router
    .route('/:id')
    .get(getUserById);
    // .put(updateUser)
    // .delete(deleteUserById);

//populated thought and friend data
// todo - uncomment
// router
//     .route('/:id/friends/:friendId')
//     .post(addFriend)
//     .delete(deleteFriend);

//POST a new user:
//example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
// }

//PUT to update a user by it's _id

//DELETE to remove user by it's _id

//Bonus remove a user's associated thoughts when deleted
module.exports = router;