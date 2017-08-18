module.exports = function (app, models) {
    // CREATE route
    app.post('/api/new', function (req, res) {
        var post = req.body;
        models.Posts.create(post).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    });
    // READ list route
    app.get('/api/all', function(req, res) {
        models.Posts.findAll({}).then(function (data) {
            res.json(data);
        });
    });
    // UPDATE route
    app.put('/api/update', function (req, res) {
        models.Posts.update({
            name: req.body.name
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (data) {
            res.json(data);
        })
    });
    // DELETE route
    app.delete('/api/delete/:id', function (req, res) {
        models.Posts.destroy(
            {
                where: {
                    id: req.params.id
                }
            }).then(function (data) {
                res.json(data);
            });
    });
}