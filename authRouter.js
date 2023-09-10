const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')

router.post(
	'/registration',
	[
		check('username', 'Username have not to be empty').notEmpty(),
		check('password', 'Password have to be more then 4 and less then 9  symbols').isLength({
			min: 4,
			max: 10,
		}),
	],
	controller.registration
)
router.post('/login', controller.login)
router.get('/users', authMiddleware, controller.getUsers)

module.exports = router
