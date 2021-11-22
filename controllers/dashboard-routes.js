const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });
        
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('all-posts-admin', {
            layout: 'dashboard',
            posts, 
        });
        } catch (err) {
            res.redirect('login');
        }
    });
//             attributes: [
//                 'id',
//                 'title',
//                 'content',
//                 'created_at'
//             ],
//             include: [{
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 },
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             const posts = dbPostData.map(post => post.get({ plain: true }));
//             res.render('dashboard', { posts, loggedIn: true });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

        router.get('/new', withAuth, (req, res) => {
            res.render('new-post', {
                layout: 'dashboard',
            });
        });

        router.get('/edit/:id', withAuth, async (req, res) => {
        try{
            const postData = await Post.findOne(req.params.id);
            
            if (postData) {
                const post = postData.get({ plain: true });

                res.render('edit-post', {
                    layout: 'dashboard', 
                    post, 
            });
        } else {
            res.status(404).end();
          }
        } catch (err) {
          res.redirect('login');
        }
      });


        //     attributes: ['id',
        //         'title',
        //         'content',
        //         'created_at'
        //     ],
        //     include: [{
        //             model: User,
        //             attributes: ['username']
        //         },
        //         {
        //             model: Comment,
        //             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //             include: {
        //                 model: User,
        //                 attributes: ['username']
        //             }
        //         }
        //     ]
        // })
        // .then(dbPostData => {

module.exports = router;