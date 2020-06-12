const { Router } = require('express');
const { calculateTariff, getAllDDDs, getAllPlans } = require("./controller")

const routes = Router();

routes.post('/calculate-tariff', calculateTariff);   
routes.get('/ddds', getAllDDDs);
routes.get('/plans', getAllPlans)

module.exports  = routes;