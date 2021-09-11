const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    updateThought,
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

//api/thoughts
router
    .route('/')
    .get(getAllThoughts);
// todo - uncomment
// .post(addThought);

//api/thoughts/:thoughtId
// todo - uncomment
// router
//     .route('/:thoughtId')
//     .get(getThoughtById)
//     .put(updateThought)
//     .delete(removeThought);

//api/thoughts/:thoughtId/reations
// todo - uncomment
// router
//     .route('/:thoughtId/reactions')
//     .post(addReaction);

// router
// todo - uncomment
//     .route('/:thoughtId/reactions/:reactionId')
//     .delete(removeReaction);

module.exports = router;