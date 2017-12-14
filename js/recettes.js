(function(){
  var app = angular.module('recette-directives', []);

  app.directive("recetteDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/recette-description.html"
    };
  });

  app.directive("recetteReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/recette-reviews.html"
    };
  });



  app.directive("recetteTabs", function() {
    return {
      restrict: "E",
      templateUrl: "./view/recette-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });


})();
