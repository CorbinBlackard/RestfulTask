const Task = require('../models/task.js')
module.exports = {
    new: function(req, res) {
        Task.find()
            .then(data => res.json({tasks: data}))
            .catch(err => res.json(err));
    },
    retrieve: function(req, res) {
        Task.findOne({_id: req.params.id})
        .then(data => res.json({task: data}))
        .catch(err => res.json(err));
    },
    create: function(req, res) {
        const task = new Task(
            {title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,}
        );
        
        task.save()
            .then(() => res.redirect('/tasks'))
            .catch(err => res.json(err));
    },
    update: function(req, res) {
        Task.updateOne({__id: req.params.id}, {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        })
            .then(() => res.redirect('/tasks'))
            .catch(err => res.json(err));
    },
    destroy: function(req, res) {
        Task.remove({id: req.params.id})
            .then(() => res.redirect('/tasks'))
            .catch(err => res.json(err));
    }


};