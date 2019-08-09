
const express       = require('express')
const router        = express.Router()
const Article       = require('../../models/Articles')
const auth          = require('../../middleware/auth')


// @route GET api/articles
// @desc  Get ALL articles
// @access Public
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find().sort({ date: -1 })
        res.json(articles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
    
})

// @route GET api/article
// @desc  Get A SINGLE article
// @access Public
router.get('/:id', auth, async (req, res) => {
    try {
        const article = await Article.findById(req.params.id)
        res.json(article)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// @route POST api/article
// @desc  Create A article
// @access Public
router.post('/', auth, (req, res) => {
    const { title, author, date, imagePath, content, isPublished, } = req.body

    console.log(date)
    const newArticle = new Article({
        user: req.user.id,
        title: title,
        author: author,
        date: date,
        picture: imagePath,
        content: content,
        isPublished: isPublished
    })

    newArticle.save()
        .then(article => res.json(article))
})

// @route GET api/article
// @desc  Get A SINGLE article FOR EDIT
// @access Private
router.get('/:articleId/:userId', auth, async (req, res) => {
    const { articleId, userId, } = req.params
    
    //user: userId, 
    try {
        const article = await Article.find({ _id: articleId })

        res.json(article)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// @route       PUT api/articles/:id
// @desc        Update article
// @access      Private
router.put('/:id', auth, async (req, res) => {
    const { title, author, date, imagePath, content, isPublished, } = req.body

    const updatedFields = {}

    if (title) updatedFields.title             = title
    if (author) updatedFields.author           = author
    if (date) updatedFields.date               = date
    if (imagePath) updatedFields.picture       = imagePath
    if (content) updatedFields.content         = content
    if (isPublished) updatedFields.isPublished = isPublished


    try {
        let article = await Article.findById(req.params.id)

        if (!article) { res.send(404).json({ msg: 'article not found' }) }
        
        article = await Article.findByIdAndUpdate(
            req.params.id,
            { $set: updatedFields },
            { new: true }
        )

        res.json(article)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route DELETE api/article/:id
// @desc  Delete A article
// @access Public
router.delete('/:id', auth, (req, res) => {
    Article.findById(req.params.id)
        .then(article => article.remove()
            .then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})


module.exports = router
