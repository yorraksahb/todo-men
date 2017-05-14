/**
 * Created by bhaskarroy on 5/11/17.
 */

'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks'),

    list_all_tasks = function (req, res) {
        Task.find({}, function (err, task) {
            if(err){
                res.send(err);
            }
            else
                res.json(task);
        });
    },

    create_a_task = function(req, res){
        var newTask = new Task(req.body);
        newTask.save(function (err, task) {
            if(err)
                res.send(err);
            res.json(task);
        });
    },

    read_a_task = function(req, res) {
        Task.findById(req.params.taskId, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    },

    update_a_task = function(req, res) {
        Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    },

    delete_a_task = function(req, res) {
        Task.remove({
            _id: req.params.taskId
        }, function(err, task) {
            if (err)
                res.send(err);
            res.json({ message: 'Task successfully deleted' });
        });
    };

    module.exports = {
        list_all_tasks: list_all_tasks,
        create_a_task: create_a_task,
        read_a_task: read_a_task,
        update_a_task: update_a_task,
        delete_a_task: delete_a_task
    };