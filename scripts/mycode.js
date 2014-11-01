///// <reference path="mycode.js" />
var app = angular.module('HackingCodeApp', []);


app.controller('MainController', function ($rootScope, $http, $scope) {
        
    $scope.nome = "xico";

    $scope.registro = function () {
        alert('xico');
        $http.post('http://localhost:9090/Empresa').success(RegistroCallback);
    }

    $scope.Clear = function () {
        
        $scope.Participante.fone = "";
        $scope.Participante.email = "";
        $scope.Participante.area = "";
    }

    function RegistroCallback(data, status) {
        $scope.objeto = data[0];
        alert($scope.objeto);
    }

    
});
