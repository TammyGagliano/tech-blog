const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
     foreignKey: 'user_id',
     onDelete: "CASCADE"
});

// Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// });

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: "CASCADE"
});

// Post.hasMany(Comment, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// })

module.exports = { User, Post, Comment };