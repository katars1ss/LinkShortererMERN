const {Router} = require('express')
const config = require('config')
const shortid = require('shortid')
const Link = require('../models/Link')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/generate', auth, async (req, res) => {
    try {
        const baseUrl = config.get('baseUrl')
        const {from} = req.body

        const code = shortid.generate()

        const re = /(?:https|http):\/\//
        const matches = from.match(re)
        
        const newfrom = matches ? from : "https://" + from
        //const existing = await Link.findOne({ from })

        /*if (existing){
            return res.json({ link: existing })
        }*/

        const to = baseUrl + "/t/" + code

        const link = new Link({
            code, to, from:newfrom, owner: req.user.userId
        })

        await link.save()

        res.status(201).json({ link })
    } catch (e) {
        res.status(500).json({ message: 'Щось пішло не так, спробуйте ще раз' })
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const links = await Link.find({ owner: req.user.userId })
        res.json(links)
    } catch (e) {
        res.status(500).json({ message: 'Щось пішло не так, спробуйте ще раз' })
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const link = await Link.findById(req.params.id) 
        res.json(link)
    } catch (e) {
        res.status(500).json({ message: 'Щось пішло не так, спробуйте ще раз' })
    }
})

router.delete('/delete/:id', auth, async (req, res) => {
    try {
        await Link.findByIdAndDelete(req.params.id)
        res.status(200).json({message: `Посилання #${req.params.id} видалено з БД`})
    } catch (e) {
        res.status(500).json({ message: 'Щось пішло не так, спробуйте ще раз' })
    }
})

module.exports = router