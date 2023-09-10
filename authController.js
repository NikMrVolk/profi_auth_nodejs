const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')

class AuthController {
	async registration(req, res) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({ massage: 'registration error', errors })
			}
			const { username, password } = req.body
			const candidate = await User.findOne({ username })
			if (candidate) {
				return res.status(400).json({ message: 'User with this login exist' })
			}
			const hashPassword = bcrypt.hashSync(password, 7)
			const userRole = await Role.findOne({ value: 'USER' })
			const user = new User({ username, password: hashPassword, roles: [userRole.value] })
			await user.save()
			return res.json({ message: 'User successfully added' })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Registration error' })
		}
	}
	async login(req, res) {
		try {
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Login error' })
		}
	}
	async getUsers(req, res) {
		try {
			res.json(`server work`)
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: 'Get users error' })
		}
	}
}

module.exports = new AuthController()
