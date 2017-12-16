module.exports = (application) => {
    application.post('/chat', (req, res) =>{
        application.app.controllers.chat.initChat(application, req, res);
    });
    application.get('/chat', (req, res) =>{
        application.app.controllers.chat.initChat(application, req, res);
    });
}