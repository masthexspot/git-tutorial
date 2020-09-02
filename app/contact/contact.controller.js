app.controller('contactCtrl',function($scope){
    console.log('contactCtrl');

    $scope.createContact = function(data){
        console.log(data);
    }
})