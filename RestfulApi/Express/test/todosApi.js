/**
 * Created by bazofeifa-as on 08/12/2014.
 */
'use strict';

var request = require('supertest');
var express = require('express');
var expect = require('chai').expect;

var app = express();
var todos = [
	{ id: 0, description: 'Learn about Unit Testing', status: false },
	{ id: 1, description: 'Use React', status: false }
];

// Setup server response.
app.get('/todos', function (req, res) {
	res.status(200).json(todos);
});

app.get('/todos/:id', function (req, res) {
	var id = req.params.id;
	res.status(200).json(todos[id]);
});

app.post('/todos/', function (req, res) {
	var data = req.body;
	res.status(200).json({
		status: 'ok',
		message: 'Inserted successfully'
	});
});

app.put('/todos/:id', function (req, res) {
	res.status(200).json({
		status: 'ok',
		message: 'Updated successfully'
	});
});

// Tests
describe('GET /todos', function () {
	it('Respond the todo list', function (done) {
		request(app)
			.get('/todos')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function (err, res) {
				expect(err).to.be.null;
				expect(res.body.length).to.eql(2);
				done();
			});
	});
});

describe('GET /todos/:id', function () {
	it('Respond with a specific todo', function (done) {
		var id = 0;
		request(app)
			.get('/todos/' + id)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function (err, res) {
				expect(err).to.be.null;
				expect(res.body.id).to.eql(id);
				done();
			});
	});
});

describe('POST /todos', function () {
	it('Respond with a success message', function (done) {
		var todo = { description: 'Learn about Unit Testing', status: true };
		request(app)
			.post('/todos/')
			.send(todo)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function (err, res) {
				expect(err).to.be.null;
				expect(res.body.message).to.eql('Inserted successfully');
				done();
			});
	});
});


describe('PUT /todos/:id', function () {
	it('Respond with a success message', function (done) {
		var id = 1;
		var todo = { description: 'Learn about Unit Testing', status: true };
		request(app)
			.put('/todos/' + id)
			.send(todo)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function (err, res) {
				expect(err).to.be.null;
				expect(res.body.message).to.eql('Updated successfully');
				done();
			});
	});
});