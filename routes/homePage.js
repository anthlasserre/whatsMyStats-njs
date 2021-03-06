const OW = require('../services/overwatch.js')
const R6 = require('../services/R6.js')
const RL = require('../services/rocketleague.js')
const Express = require('express')
var routeur = Express.Router()
const { search, home } = require('../controllers/games.js')

routeur.get('/', home)
routeur.post('/search', search)

routeur.get('/', async (req, res, next) =>{
    res.status(200).render('index', {pageTitle: "What's My Stats"}) 
});

routeur.get('/overwatch/:battletag', async(req,res,next) => {
    res.status(200);
    OW.searchPlayer('pc','eu',req.params.battletag).then((data) => {
        console.log(data)
    });
})

routeur.get('/R6/:username', async(req,res,next) => {
    res.status(200);
    R6.searchPlayer('uplay',req.params.username).then((data) => {
        console.log(data)
    })
})

routeur.get('/RocketLeague/:username', async(req,res,next) => {
    res.status(200);
    RL.searchPlayer('steam',req.params.username).then((data) => {
        console.log(data)
    })
})

module.exports = routeur