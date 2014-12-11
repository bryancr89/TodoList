/**
 * Created by bazofeifa-as on 09/12/2014.
 */
'use strict';
angular.module('angularJs')
	.factory('MainService', ['Restangular', function (Restangular) {
		var httpTodos = Restangular.allUrl('todos', 'http://localhost:9000/todos');

		function createTodo(todo) {
			return httpTodos.post(todo);
		}

		function updateTodo(todo) {
			return httpTodos.customPUT(todo, todo._id);
		}

		function get(id) {
			if (id === undefined) return httpTodos.getList();
			return httpTodos.one(id).get();
		}

		return {
			create: createTodo,
			update: updateTodo,
			get: get
		};
	}]);