const jwt = require('jsonwebtoken');
const User = require('../schemas/users');

module.exports = async(req, res, next) => {
	try {
		const { authorization } = req.headers;
		const [tokenType, tokenValue] = authorization.split(' ');

		if (tokenType !== 'Bearer') {
			res.json({
				msg: 'TypeIncorrect'
			});
			return;
		}
		const { userId } = jwt.verify(tokenValue, 'junhee916');
		console.log(jwt.verify(tokenValue, 'junhee916'))
		console.log(userId)
		console.log(tokenValue)

		await User.findById(userId, { _id: true, names: true, nickname: true})
			.exec()
			.then((user) => {
				console.log(user)
				res.locals.user = user;
				next();
			});
	} catch (error) {
		console.log(error)
		res.json({
			msg: 'not_login'
		});
		return;
	}
};