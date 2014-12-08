/**
 * Created by bazofeifa-as on 04/12/2014.
 */
'use strict';

var express = require('express');
var ObjectId = require('mongoose').Types.ObjectId;
var TodosModel = require('../models/todos');
var router = express.Router();

router.get('/', function (req, res, next) {
	TodosModel.find({}, {description: true, status: true }, function (err, todos) {
		if(err) next(err);
		res.json(todos);
	});
});

router.get('/:id', function (req, res, next) {
	var data = req.params;
	TodosModel.findOne({"_id" : data.id } , function (err, todo) {
		if(err) return next(err);
		res.json(todo);
	});
});

router.post('/', function (req, res, next) {
	var data = req.body;
	var newTodo = new TodosModel({
		description: data.description
	});
	newTodo.save(function (err) {
		if(err) return next(err);
		res.json({ status: 'ok', msg: 'Inserted successfully' });
	});
});

// TODO: Implement.
router.put('/:id', function (req, res, next) {
	var data = req.body;
	TodosModel.findOne({ _id: new ObjectId(req.params.id)}, function (err, todo) {
		if(err) return next(err);
		if(todo === null) return res.json({ status: 'error', msg: 'Todo don\'t exist.' });
		todo.description = data.description;
		todo.status = data.status;
		todo.save();
		res.json({ status: 'ok', msg: 'Updated successfully' });
	});
});

module.exports = router;