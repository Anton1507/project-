const Router = require('express').Router;
const WorkController=require('../controllers/course_controller')
const router = new Router();

router.post('/createWork',WorkController.create);
router.post('/seachWork',WorkController.seachWork);

router.post('/getWork',WorkController.getWork);



module.exports=router;
