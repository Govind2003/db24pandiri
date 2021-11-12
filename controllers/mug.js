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
// VIEWS 
// Handle a show all view 
exports.mug_view_all_Page = async function(req, res) { 
    try{ 
        themugs = await mug.find(); 
        res.render('mug', { title: 'mug Search Results', results: themugs }); 
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

// Handle mug create on POST. 
exports.mug_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new mug(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"mug_type":"steel", "size":"medium", "age":"14"} 
    console.log('the first'+req.body.mug_type)
    console.log('the second'+ req.body.size)
    document.mug_type = req.body.mug_type;
    console.log(document.mug_type)
    document.size = req.body.size; 
    document.age = req.body.age; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};