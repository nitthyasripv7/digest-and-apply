(function(){
    'use strict';
    angular.module('digest',[])
    .controller('counter',counter);

    counter.$inject=['$scope','$timeout'];
    function counter($scope,$timeout){
        $scope.counter=0;


        $scope.increment=function(){
            $timeout(function(){
                $scope.counter++;
                console.log("function incremented");
            },2000);

            // setTimeout(function(){
            //     $scope.$apply(function(){
            //         $scope.counter++;
            //         console.log("incremented");
            //     })
             
            // },2000);
            
        };
           // $scope.increment=function(){
        //     setTimeout(function(){
        //         $scope.counter++;
        //         console.log("incremented");
        //         $scope.$digest();
        //     },2000);
            
        // };
     
    }
})();