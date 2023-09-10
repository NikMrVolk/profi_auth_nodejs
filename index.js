const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5005

const app = express()

app.use(express.json())

const start = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://querty:querty123@cluster0.2v5dyx0.mongodb.net/?retryWrites=true&w=majority`
		)
		app.listen(PORT, () => console.log(`server started on port ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()
