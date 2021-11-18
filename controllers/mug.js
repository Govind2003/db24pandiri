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


// Handle mug create on POST. 
exports.mug_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: mug create POST'); 
}; 

 
exports.mug_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await mug.findById( req.params.id)
    // Do updates of properties
    if(req.body.mug_type)
    toUpdate.mug_type = req.body.mug_type;
    if(req.body.age) toUpdate.age = req.body.age;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
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




// for a specific mug.
exports.mug_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await mug.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle mug delete on DELETE.
exports.mug_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await mug.findByIdAndDelete(req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };  

   // Handle a show one view with id specified by query
exports.mug_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await mug.findById( req.query.id)
    res.render('mugdetail',
   { title: 'mug Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a mug.
// No body, no in path parameter, no query.
// Does not need to be async
exports.mug_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('mugcreate', { title: 'mug Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for updating a mug.
// query provides the id
exports.mug_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await mug.findById(req.query.id)
    res.render('mugupdate', { title: 'mug Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle a delete one view with id from query
exports.mug_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await mug.findById(req.query.id)
    res.render('mugdelete', { title: 'mug Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };