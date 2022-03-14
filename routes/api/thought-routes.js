const router = require('express').Router();
const {
    createThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller')

// /api/thoughts
router.route('/')
    .post(createThought)

router
    .route('/:thoughtId')
    .put(addReaction)
    .delete(removeThought)

router
    .route(':/thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;