const { Post } = require('../models');

const postData = [
    {
        title: 'Where the Red Fern Grows',
        content: 'He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. Him hard find read are you sang. Parlors visited noisier how explain pleased his see suppose. ',
        userId: 1
    },
    {
        title: 'Old Yeller',
        content: 'Lose eyes get fat shew. Winter can indeed letter oppose way change tended now. So is improve my charmed picture exposed adapted demands. Received had end produced prepared diverted strictly off man branched.',
        userId: 2
    },
    {
        title: 'Clue of the Painted Creek',
        content: 'Cottage out enabled was entered greatly prevent message. No procured unlocked an likewise. Dear but what she been over gay felt body. Six principles advantages and use entreaties decisively. ',
        userId: 3
    },
    {
        title: 'Venus Sanctuary',
        content: 'Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left.',
        userId: 4
    },
    {
        title: 'The Grey Beast',
        content: 'Had repulsive dashwoods suspicion sincerity but advantage now him. Remark easily garret nor nay. Civil those mrs enjoy shy fat merry. You greatest jointure saw horrible. He private he on be imagine suppose.',
        userId: 5
    }
]

const seedsPost = () => Post.bulkCreate(postData);

module.exports = seedPosts;