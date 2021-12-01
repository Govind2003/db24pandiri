var express = require('express'); 
const mug_controlers= require('../controllers/mug'); 
var router = express.Router();

// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
 
/* GET home page. */
router.get('/', mug_controlers.mug_view_all_Page);

// GET request for one mug.
router.get('/mug/:id', mug_controlers.mug_detail);
/* GET detail mug page */
router.get('/detail', mug_controlers.mug_view_one_Page);
/* GET create mug page */
router.get('/create', secured, mug_controlers.mug_create_Page);
/* GET create update page */
router.get('/update', secured, mug_controlers.mug_update_Page);
/* GET create mug page */
router.get('/delete', secured, mug_controlers.mug_delete_Page);
module.exports = router;
