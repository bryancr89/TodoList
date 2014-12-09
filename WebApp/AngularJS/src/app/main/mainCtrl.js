'use strict';

angular.module('angularJs')
	.controller('MainCtrl', ['MainService', function (MainService) {
		var viewModel = this;
		viewModel.newTodo = { description: '', status: false };
		viewModel.filter = '';
		viewModel.isAdding = false;
		viewModel.todos = [];
		viewModel.changeStatus = changeStatus;
		viewModel.isValid= isValid;
		viewModel.view = view;
		viewModel.adding = adding;
		viewModel.addTodo = addTodo;

		MainService.get().then(function (res) {
			viewModel.todos = res;
		});

		angular.forEach(viewModel.todos, function (todo) {
			todo.rank = Math.random();
		});

		function view(status) {
			viewModel.filter = { status: status };
		}

		function changeStatus(todo) {
			MainService.update(todo);
		}

		function adding() {
			viewModel.isAdding = !viewModel.isAdding;
		}

		function isValid() {
			return viewModel.newTodo.description.trim().length > 0;
		}

		function addTodo(todo){
			MainService.create(todo).then(function (res) {
				viewModel.todos.unshift(res);
				viewModel.newTodo.description = '';
			});
		}
	}]);
