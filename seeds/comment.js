const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Thanks for the information!',
        userId: 2, 
        postId: 3,
    },
    {
        comment_text: 'This content is so helpful.',
        userId: 4, 
        postId: 5,
    },
    {
        comment_text: 'Why must you post about this?',
        userId: 5, 
        postId: 1,
    },
    {
        comment_text: 'Do people even listen to you?',
        userId: 3, 
        postId: 2,
    },
    {
        comment_text: 'Great job! Keep up the good work!',
        userId: 3, 
        post_id: 4,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments; 