/*global TicketApp */

var CompanyCtrl = TicketApp.controller('CompaniesCtrl', ['$filter', '$scope', 'Companies', function ($filter, $scope, Companies) {
        'use strict';

        $scope.companies = [];


        $scope.company = {
            companyName: null,
            email: null,
            location: null,
            billing: null,
            id: null
        };

        $scope.addCompany = function () {

            console.log('addCompany() called');

            if (!$scope.company.companyName || !$scope.company.email ||
                !$scope.company.location || !$scope.company.billing) {
                // TODO something required is missing
                console.log('Missing field');
                return false;
            }

            delete $scope.company.id;

            Companies.save($scope.company, function (data) {
                console.log('Company saved!');
                console.dir(data);
            }, function (data) {
                console.log('Error!');
                console.dir(data);
            });
        };

        $scope.removeCompany = function () {



            $scope.removeCompany = function (userId) {
                console.log('removeCompany(' + userId + ') called');

                Companies.remove({
                    userId: userId
                }, function (data) {
                    console.log('Company removed');

                    $scope.companies = $filter('filter')($scope.companies, {
                        id: '!' + userId
                    }, true);
                }, function (data) {
                    console.log('Error!');
                    console.dir(data);
                });
            };



        };

        $scope.updateCompany = function () {

        };

        $scope.getCompany = function () {

        };

        $scope.listCompanies = function () {
            $scope.companies = Companies.query();
        };

}]);