const express = require('express');
const router = express.Router();
const driverService = require('./driver.service');

const getAll = (req, res, next) => {
	driverService.getAllDrivers()
		.then(drivers => res.json(drivers))
		.catch(err => next(err));
};

const register = (req, res, next) => {
	driverService.createDriver(req.body)
		.then(() => res.status(201).send(req.body))
		.catch(err => next(err));
};

const getById = (req, res, next) => {
	driverService.getDriverById(req.params.id)
		.then(driver => driver ? res.json(driver) : res.sendStatus(404))
		.catch(err => next(err));
};

const update = (req, res, next) => {
	driverService.updateDriver(req.params.id, req.body)
		.then(() => res.json({}))
		.catch(err => next(err));
};

const _delete = (req, res, next) => {
	driverService.delete(req.params.id)
		.then(() => res.sendStatus(204))
		.catch(err => next(err));
};

const authenticate = (req, res, next) => {
	driverService.driversAuthenticate(req.body)
		.then(driver => {
			driver.token = jwt.sign(
				{
					sub:
					{
						username: driver.username,
						firstname: driver.firstname,
						lastname: driver.lastname,
						permissions: [{ 'driver': false }, { 'driver': true }],
						locale: 'CO',
						prime: true
					}
				}
				, config.secret,
				{ expiresIn: '1h' });
			console.log(driver);
			return res.json(driver);
		})
		.catch(error => res.json(error));
};

// routes
router.get('/', getAll);
router.post('/register', register);
router.get('/:id/detail', getById);
router.put('/:id/detail', update);
router.delete('/:id/detail', _delete);
router.post('/authenticate', authenticate);

module.exports = router;
