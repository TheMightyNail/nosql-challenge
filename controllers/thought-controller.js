const { Thought, User } = require('../models');

const thoughtController = {

    createThought({ body }, res) {
        Thought.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },
    // addThought({ params, body }, res) {
    //     console.log(params);
    //     Thought.create(body)
    //         .then(({ _id }) => {
    //             return Thought.findOneAndUpdate(
    //                 { _id: params.thoughtId },
    //                 { $push: { reactions: _id } },
    //                 { new: true }
    //             );
    //         })
    //         .then(dbUserData => {
    //             console.log(dbUserData);
    //             if (!dbUserData) {
    //                 res.status(404).json({ message: 'No thought with that id found' });
    //                 return;
    //             }
    //             res.json(dbUserData);
    //         })
    //         .catch(err => res.json(err));
    // },

    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No thought found with that id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then(deletedThought => {
                if (!deletedThought) {
                    return res.status(404).json({ message: 'No thought found with that id' });  
                }
                return Thought.findOneAndUpdate(
                    { _id: params.thoughtId },
                    { $pull: { thoughts: params.thoughtId } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No thought found with that id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    }
};

module.exports = thoughtController