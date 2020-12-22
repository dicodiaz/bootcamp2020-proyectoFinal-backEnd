const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require('cors');
const jwt = require('./commons/jwt');
const errorHandler = require('./commons/error-handler');

const apiConstants = require('./commons/api-constants');
const rideController = require('./rides/ride.controller');
const customerController = require('./customers/customer.controller');
const driverController = require('./drivers/driver.controller');
const carController = require('./cars/car.controller');

const baseApiPath = apiConstants.baseApiPath.concat(apiConstants.apiVersion);

const customerPath = '/users/customers';
const driverPath = '/users/drivers';
const carPath = '/cars';
const ridePath = '/rides';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(jwt());
app.use(errorHandler);

app.use(baseApiPath + customerPath, customerController);
app.use(baseApiPath + driverPath, driverController);
app.use(baseApiPath + carPath, carController);
app.use(baseApiPath + ridePath, rideController);

module.exports = app;
