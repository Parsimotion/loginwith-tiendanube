'use strict'

angular.module 'tiendanubeApp'
.controller 'NavbarCtrl', ($scope, $location) ->
  $scope.menu = [
    title: 'Login with TiendaNube'
    link: '/auth/tiendanube'
  ]
  $scope.isCollapsed = true

  $scope.isActive = (route) ->
    route is $location.path()
