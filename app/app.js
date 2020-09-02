var app = angular.module('app',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'app/home/index.html'
        })
        .state('about',{
            url: '/about',
            templateUrl: 'app/about/index.html'
        })
        .state('post',{
            url: '/post',
            templateUrl: 'app/post/index.html'
        })
        .state('contact',{
            url: '/contact',
            templateUrl: 'app/contact/index.html',
            controller: 'contactCtrl'
        })
})