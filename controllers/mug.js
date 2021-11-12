var mug = require('../models/mug'); 
 
// List of all mugs 
exports.mug_list = async function(req, res) { 
    try{ 
        themugs = await mug.find(); 
        res.send(themugs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific mug. 
exports.mug_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: mug detail: ' + req.params.id); 
}; 
 
// Handle mug create on POST. 
exports.mug_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: mug create POST'); 
}; 
 
// Handle mug delete form on DELETE. 
exports.mug_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: mug delete DELETE ' + req.params.id); 
}; 
 
// Handle mug update form on PUT. 
exports.mug_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: mug update PUT' + req.params.id); 
}; 