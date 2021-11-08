
function requestHandler(req, res) {
    User.findById(req.userId, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            Task.findById(user.teskId, function (err, task) {
                if (err) {
                    return res.send(err);
                } else {
                    task.completed = true;
                    task.save(function (err) {
                        if(err) {
                            return res.send(err);
                        } else {
                            res.send('Task Completes');
                        }
                    })
                }
            })
        }
    })
}