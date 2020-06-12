const jsonPlans = require('../database/faleMais.json');

module.exports = {
    calculateTariff (request, response) {
        const { source, destination, callTime, plan } = request.body
        const [objPlan] = jsonPlans.plans.filter(objPlan => objPlan.name === plan)

        const [tariff] = jsonPlans.tariffs.filter(tariff => {
            if(tariff.source === source && tariff.destination === destination){
                return tariff
            }
        })
        
        if(!tariff || !objPlan){
            return response.status(400).send({ erro: "we haven't this plan" })
        }        
        
        let tariffs = {}
        tariffs.withPlan = calculeRateWithPlan(tariff, objPlan, callTime).toFixed(2)
        tariffs.withoutPlan = calculeRateWithoutPlan(tariff, callTime).toFixed(2)

        return response.json({ tariffs });
    },

    getAllDDDs(request, response){
        const ddds = jsonPlans.tariffs.reduce((ddds, index) => {
            if (ddds.indexOf(index.source) === -1) {
                ddds = ddds.concat(index.source)
              }

            if (ddds.indexOf(index.destination) === -1) {
                ddds = ddds.concat(index.destination)
            }

              return ddds
        },[]).sort()

        return response.json({ ddds })
    },

    getAllPlans(request, response){
        return response.json({ plans: jsonPlans.plans })
    }
}

const calculeRateWithPlan = (tariff, plan, callTime) => {
    const valuePerMinutes = parseFloat(tariff.valuePerMinute)

    if(callTime > plan.freeMinutes) {
        const interestRate = 1.1;
            return (callTime - plan.freeMinutes) * interestRate * valuePerMinutes
    }
    return 0
}

const calculeRateWithoutPlan = (tariff, callTime) => {
    return tariff.valuePerMinute * callTime
}