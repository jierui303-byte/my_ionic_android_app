// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
  .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    // 向导页面
    .state('tutorial', {
      url: '/',
      templateUrl: 'templates/tutorial.html',
      controller: 'TutorialCtrl'
    })
    //这是一个普通路由
    .state('goods', {
      url: "/goods/:id",
      templateUrl: "templates/goods/goods.html",
      controller: 'GoodsCtrl'
    })
    //下面这是路由组
    .state('tabs', {
      url: "/tabs",
      abstract: true,
      templateUrl: "templates/tabs/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'tabs-home': {
          templateUrl: "templates/home/home.html",
          controller: 'HomeCtrl'
        }
      }
    })
    .state('tabs.fenlei', {
      url: "/fenlei",
      views: {
        'tabs-fenlei': {
          // templateUrl: "about.html"
          templateUrl: "templates/fenlei/fenlei.html",
          controller: 'FenleiCtrl'
        }
      }
    })
    .state('tabs.cart', {
      url: "/cart",
      views: {
        'tabs-cart': {
          templateUrl: "templates/cart/cart.html",
          controller: 'CartCtrl'
        }
      }
    })
    .state('tabs.mime', {
      url: "/mime",
      views: {
        'tabs-mime': {
          templateUrl: "templates/mime/mime.html",
          controller: 'MimeCtrl'
        }
      }
    });


  // $urlRouterProvider.otherwise("/tabs/home");
  $urlRouterProvider.otherwise("/");

});
