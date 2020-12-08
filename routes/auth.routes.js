const {Router} = require('express')
const config = require('config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register', 
    [
        check('email', 'Введено неправильну імейл адресу. Будь ласка, перевірте формат ****@*.com').isEmail(),
        check('password', 'Мінімальна довжина паролю 6 символів').isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Вказано неправильні дані при реєстрації'
            })
        }

        const {email, password} = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({message: 'Такий користувач вже існує'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashedPassword })

        await user.save()

        res.status(201).json({ message: "Створено користувача" })

    } catch (e) {
        res.status(500).json({ message: 'Щось пішло не так, спробуйте ще раз' })
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Користувача з такою імейл адресою/паролем не знайдено').normalizeEmail().isEmail(),
        check('password', 'Користувача з такою імейл адресою/паролем не знайдено').exists()
    ], 
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Вказано неправильні дані при авторизації'
            })
        }

        const {email, password} = req.body
        //Login check
        const user = await User.findOne({ email })

        if (!user){
            return res.status(400).json({ message: "Користувача з такими даними не знайдено"})
        }
        //Password check
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch){
            return res.status(400).json({ message: "Користувача з такими даними не знайдено" })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '10sec' }
        )

        res.json({ token, userId: user.id, message: `Вітаємо, ${email}` })

    } catch (e) {
        res.status(500).json({ message: 'Щось пішло не так, спробуйте ще раз' })
    }
})

module.exports = router