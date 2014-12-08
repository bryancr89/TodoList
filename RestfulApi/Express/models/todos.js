/**
 * Created by bazofeifa-as on 04/12/2014.
 */
'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Todos = new Schema({
	description: { type: String, required: true},
	status: { type: Boolean, required: true, default: false}
});

module.exports = mongoose.model('Todos', Todos);