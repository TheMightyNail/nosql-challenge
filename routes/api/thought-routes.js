const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller')

// /api/thoughts
router.route('/:thoughtId')

router
    .route('/:thoughtId')
    .put(addReaction)
    .delete(removeThought)

router
    .route(':/thoughtId/:reactionId')
    .delete(removeReaction)
    
module.exports = router;