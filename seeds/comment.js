const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Thanks for the information!',
        user_id: 2, 
        post_id: 3,
    },
    {
        comment_text: 'This content is so helpful.',
        user_id: 4, 
        post_id: 5,
    },
    {
        comment_text: 'Why must you post about this?',
        user_id: 5, 
        post_id: 1,
    },
    {
        comment_text: 'Do people even listen to you?',
        user_id: 3, 
        post_id: 2,
    },
    {
        comment_text: 'Great job! Keep up the good work!',
        user_id: 3, 
        post_id: 4,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments; 