// Customers
const getAllCustomersQuery = 'SELECT * FROM public.customers';

const createCustomerQuery = 'INSERT INTO public.customers (customer_id, firstname, lastname, email, phone, username, password) VALUES ($1, $2, $3, $4, $5, $6, $7)';

const getCustomerByIdQuery = 'SELECT * FROM public.customers WHERE id=$1';

const updateCustomerQuery = 'UPDATE public.customers SET customer_id=$2, firstname=$3, lastname=$4, email=$5, phone=$6, username=$7, password=$8 WHERE id=$1';

const deleteCustomerQuery = 'DELETE FROM public.customers WHERE id=$1';

const authenticateCustomerQuery = 'SELECT * FROM public.customers WHERE username=$1 AND password=$2';

// Drivers
const getAllDriversQuery = 'SELECT * FROM public.drivers';

const createDriverQuery = 'INSERT INTO public.drivers (driver_id, firstname, lastname, age, username, phone, password) VALUES ($1, $2, $3, $4, $5, $6, $7)';

const getDriverByIdQuery = 'SELECT * FROM public.drivers WHERE id=$1';

const updateDriverQuery = 'UPDATE public.drivers SET driver_id=$2, firstname=$3, lastname=$4, age=$5, username=$6, phone=$7, password=$8 WHERE id=$1';

const deleteDriverQuery = 'DELETE FROM public.drivers WHERE id=$1';

const authenticateDriverQuery = 'SELECT * FROM public.drivers WHERE username=$1 AND password=$2';

// Cars
const getAllCarsQuery = 'SELECT * FROM public.cars';

const createCarQuery = 'INSERT INTO public.cars (plate, model, motor, chassis, color) VALUES ($1, $2, $3, $4, $5)';

const getCarByIdQuery = 'SELECT * FROM public.cars WHERE id=$1';

const updateCarQuery = 'UPDATE public.cars SET plate=$2, model=$3, motor=$4, chassis=$5, color=$6 WHERE id=$1';

const deleteCarQuery = 'DELETE FROM public.cars WHERE id=$1';

// Rides
const getAllRidesQuery = 'SELECT * FROM public.rides';

const createRideQuery = 'INSERT INTO public.rides (first_point, target_point, driver_id, customer_id, time) VALUES ($1, $2, $3, $4, $5)';

const getRideByIdQuery = 'SELECT * FROM public.rides WHERE id=$1';

const updateRideQuery = 'UPDATE public.rides SET first_point=$2, target_point=$3, driver_id=$4, customer_id=$5, time=$6 WHERE id=$1';

const deleteRideQuery = 'DELETE FROM public.rides WHERE id=$1';

module.exports = {
  getAllCustomersQuery,
  createCustomerQuery,
  getCustomerByIdQuery,
  updateCustomerQuery,
  deleteCustomerQuery,
  authenticateCustomerQuery,
  getAllDriversQuery,
  createDriverQuery,
  getDriverByIdQuery,
  updateDriverQuery,
  deleteDriverQuery,
  authenticateDriverQuery,
  getAllCarsQuery,
  createCarQuery,
  getCarByIdQuery,
  updateCarQuery,
  deleteCarQuery,
  getAllRidesQuery,
  createRideQuery,
  getRideByIdQuery,
  updateRideQuery,
  deleteRideQuery
};
