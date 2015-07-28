'use strict'

angular.module 'tiendanubeApp'
.controller 'NavbarCtrl', ($scope, $location) ->
  $scope.menu = [
    title: 'Login with TiendaNube'
    link: '/auth/tiendanube'
  ,
    title: 'Login with Shopify'
    link: '/auth/shopify'
  ]
  $scope.isCollapsed = true

  $scope.isActive = (route) ->
    route is $location.path()
