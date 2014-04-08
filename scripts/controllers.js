designCars.controller("MainCtrl", function($scope,$location){


})


designCars.controller("HomeCtrl", function($scope,$location,$rootScope) {
  
    $rootScope.home=false;

    $scope.carouselPrev = function(){
    $('#myCarousel').carousel('prev');
};
$scope.carouselNext = function(){
    $('#myCarousel').carousel('next');
};
    $scope.home = {
        message: "This is Home page"
    }
    $scope.getStarted=function(){
      $location.path('/models');
    }

})
designCars.factory("Models",function(){
  return modelList=[{name:'SUV',image_path:'images/suv.jpg',description:'This is an SUV'},
               {name:'Sports car',image_path:'images/sportscar.jpg',description:'This is a sports car'},
               {name:'Economy',image_path:'images/economy.jpg',description:'This is type is economy'},
               {name:'Compact',image_path:'images/compact.jpg',description:'compact car'}, 
               {name:'Intermediate',image_path:'images/intermediate.jpg',description:'intermediate'},
               {name:'Full Size',image_path:'images/fullsize.jpg',description:'Lorem Ipsum'},
               {name:'Premium',image_path:'images/premium.jpg',description:'Premium Car'},
               {name:'Convertible',image_path:'images/convertible.jpg',description:'This is a convertible'},
               {name:'Luxury',image_path:'images/luxury.jpg',description:'Luxury Car'},
               {name:'Minivan',image_path:'images/minivan.jpg',description:'Minivan'},
               {name:'Jeep Wrangler',image_path:'images/jeep.jpg',description:'This is type is economy'}];
})
designCars.factory("Engines",function(){
  return engineList=[{type:'Straight/Inline',description:'In-line engines have the cylinders arranged, one after the other, in a straight line. Almost all four cylinder engines are A straight/Inline engine is considerably easier to build than an otherwise equivalent Boxer or V type engines because the cylinder bank and crankshaft can be milled from a single metal casting and it requires fewer cylinder heads and camshafts.'},
                     {type:'V Type',description:'The V-type of engine has two rows of cylinders set normally at a ninety degree angle to each other. Advantages include its short length, great rigidity of the block, its heavy crankshaft, and attractive low profile. This is a tried and tested engine design with huge performance potential.'},
                     {type:'Boxer',description:'In 1896, Karl Benz invented the first internal combustion engine with its horizontally opposed pistons. This Boxer/Flat engine is an design with multiple pistons that all move in the horizontal plane. The most popular and significant layout has cylinders arranged in two banks on either side of a single crankshaft, generally known as boxers. This is because the two pistons join together in the middle of TDC ( Top Dead Centre)'},
                     {type:'Rotary Wankel',description:'The Rotary Wankel engine was an early type of internal-combustion engine in which the crankshaft remained stationary and the entire cylinder block rotated around it.'},
                     {type:'Diesel',description:'The Diesel engine was first invented by Rudolf Diesel, of German ethnicity born in Paris. Although quite similar in design to petrol internal combustion engines, Diesel engines use compression to ignite the compressed fuel to air mixture prior to injecting it into the combustion chamber, with out the need for spark plugs.'}];
})

designCars.value('design',{});
designCars.controller("ModelCtrl", function($scope,$rootScope,$location,Models){
  $rootScope.home=true;
  $rootScope.models=true;
  $rootScope.active='models';
  $scope.model={
    message: "This is the model page"
  }
 $scope.models=Models;
 $scope.nextPhase=function(){
    $location.path('/engines');
 }
 $scope.details=function($index){
  var modelId=$index;
 $location.path('/models/'+modelId);
}
})

designCars.controller("EngineCtrl", function($scope,$rootScope,design,$location,Engines){
  $rootScope.home=true;
  $rootScope.models=true;
  $rootScope.engines=true;
  $scope.engineDesc=false;
  $rootScope.active='engines'; 
  $scope.engine={
    message: "This is the engines page"
  }
  $scope.engines=Engines;
  $scope.design=design;
  $scope.display=function($index){
    $scope.engineDesc=true;
    $scope.engineInfo=$scope.engines[$index].description;
    $scope.engineType=$scope.engines[$index].type;
  }
  $scope.nextPhase=function(){
    $location.path('/colors');
  }
})

designCars.controller("ColorCtrl", function($scope,$rootScope){
  $rootScope.home=true;
   $rootScope.models=true;
  $rootScope.engines=true;
  $rootScope.colors=true;
  $rootScope.active='colors';  
  $scope.colors={
    message: "This is the color page"
  }
})

designCars.controller("ModelDetailsCtrl",function($scope,$route,$routeParams,$location,Models,design){
  $scope.models=Models;
$scope.params=$routeParams;
$scope.model=$scope.models[$scope.params.modelId];
$scope.saveModel=function(){
  design.name=$scope.model.name;
  design.image_path=$scope.model.image_path;
  design.description=$scope.model.description;

  $location.path('/models');
}
})