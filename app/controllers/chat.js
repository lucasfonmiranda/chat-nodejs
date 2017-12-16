module.exports.initChat = (application, req, res) =>{
    
    var dataForm = req.body;
    //Here we using the middleware body-parser to check if the user have one valid nickname to access the chat

    req.assert('nickname', 'Please insert yout nickname').notEmpty();
    req.assert('nickname', 'Your nickname need min 4 letter').len(4, 15);

    var error = req.validationErrors();

    if(error){
        res.render("index", {validation: error})
        return;
    }

    res.render("chat");
}