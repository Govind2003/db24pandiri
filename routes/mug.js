var express = require('express'); 
const mug_controlers= require('../controllers/mug'); 
var router = express.Router(); 
 
/* GET home page. */
router.get('/', mug_controlers.mug_view_all_Page);
module.exports = router;
