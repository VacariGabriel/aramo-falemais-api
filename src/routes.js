const { Router } = require('express');
const { calculateTariff, getAllDDDs, getAllPlans } = require("./controller")

const routes = Router();

routes.post('/calculate-tariff', calculateTariff);   
routes.get('/get-all-ddds', getAllDDDs);
routes.get('/get-all-plans', getAllPlans)

module.exports  = routes;