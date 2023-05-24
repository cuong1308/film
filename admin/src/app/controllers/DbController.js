class DbController {
    
    index(req, res) {
        res.render('/');
    }
}

module.exports = new DbController();