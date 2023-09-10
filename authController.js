const User = require('./models/User')
const Role = require('./models/Role')

class AuthController {
	async registration(req, res) {
		try {
		} catch (e) {}
	}
	async login(req, res) {
		try {
		} catch (e) {}
	}
	async getUsers(req, res) {
		const userRole = new Role()
		const adminRole = new Role({ value: 'ADMIN' })
		await userRole.save()
		await adminRole.save()
		try {
			res.json(`server work`)
		} catch (e) {}
	}
}

module.exports = new AuthController()
