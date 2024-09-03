const express = require('express');
const controllers = require('../controllers/myController');

const router = express.Router();

router.get('/', controllers.defaultCon);
router.get('/createForm', controllers.createTrackerCon);
router.post('/addTracker', controllers.addTrackerCon);
router.get('/singleTracker/:id', controllers.singleTrackerCon);
router.post('/updateTracker/:id', controllers.updateTrackerCon);
router.get('/deleteTracker/:id', controllers.deleteTrackerCon);
// router.get('/singleView/:id', controllers.singleViewCon);


module.exports = router;
