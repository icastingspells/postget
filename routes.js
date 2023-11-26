const Router = require('express');
const router = new Router();
const Controller = require('./controller.js');

router.post('/item', Controller.create);
router.get('/item', Controller.get);
router.delete('/item/:id', Controller.delete);
router.get('/item/:id', Controller.getOne);
router.put('/item/:id', Controller.update);

module.exports = router;