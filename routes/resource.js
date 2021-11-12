var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var mug_controller = require('../controllers/mug'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// mug ROUTES /// 
 
// POST request for creating a mug.  
router.post('/resource/mug', mug_controller.mug_create_post); 
 
// DELETE request to delete mug. 
router.delete('/resource/mug/:id', mug_controller.mug_delete); 
 
// PUT request to update mug. 
router.put('/resource/mug/:id', 
mug_controller.mug_update_put); 
 
// GET request for one mug. 
router.get('/resource/mug/:id', mug_controller.mug_detail); 
 
// GET request for list of all mug items. 
router.get('/resource/mug', mug_controller.mug_list); 
 
module.exports = router;