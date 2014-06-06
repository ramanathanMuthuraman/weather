/*Creat ethe apllication with two dependencies ui.boostrap ans ngAnimate*/

var myApp = angular.module('myApp',['ui.bootstrap','ngRoute','ngAnimate']).run(function ($rootScope) {
	/*
		hide preloader initially 
	*/
    $rootScope.showPreloader = false;
});	