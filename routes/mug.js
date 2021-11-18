var express = require('express'); 
const mug_controlers= require('../controllers/mug'); 
var router = express.Router(); 
 
/* GET home page. */
router.get('/', mug_controlers.mug_view_all_Page);

// GET request for one mug.
router.get('/mug/:id', mug_controlers.mug_detail);
/* GET detail mug page */
router.get('/detail', mug_controlers.mug_view_one_Page);
/* GET create mug page */
router.get('/create', mug_controlers.mug_create_Page);
/* GET create update page */
router.get('/update', mug_controlers.mug_update_Page);
/* GET create mug page */
router.get('/delete', mug_controlers.mug_delete_Page);
module.exports = router;
