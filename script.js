var app = angular.module('myList', []);

app.controller('itemsInList', function($scope){
  $scope.items = [
    'Pick up cereal',
    'Buy paper plates',
    'Feed the Dog',
    'Purchase Dinner',
    'Pick Up Niece'
  ];//my unorder listw/ objects
  $scope.addItem = function(){ //connected to the ng-click button
    $scope.items.push($scope.addMoreItems);//pushes new items from ng-model "addMoreItems" to the item in itmes
    $scope.addMoreItems ='';
 }
  // $scope.Ichecked = {
  //   items: ['checked']
  // };
  // $scope.checkedAll = function(){
  //   $scope.checked.items = angular.copy($scope.items);
  // };
  // $scope.uncheckedAll = function(){
  //   $scope.checked.itemsInLists = [];
  //
  // };
  //
  // $scope.checkFirst = function(){
  //   $scope.checked.items.splice(0, $scope.checked.items.length);
  //
  // };
});
