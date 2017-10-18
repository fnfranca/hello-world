var app = angular.module('myApp', [])

.controller('myCtrl', function($http, ItemService) {
    var self = this;

    self.Alpha = ItemService;

    self.addName = function() {
        self.Alpha.add({id: 4, label: "Teste"});
    };

    self.setLogin = function() {
        self.Alpha.setLogin('Flavio');
    };

    self.go = function() {
        $http.
        $location.path("index2.html");
    };
})

.controller('TabController', function($http, ItemService) {
    var self = this;
    this.Beta = ItemService;

    self.back = function() {
        $location.path("/index.html");
    };
  })

.factory('ItemService', function() {
    var names = [
        {id: 1, label: "Emil"},
        {id: 2, label: "Tobias"},
        {id: 3, label: "Linus"}
    ];
    var login = 'teste';
    
    return {
        list: function() {
            return names;
        },

        add: function(name) {
            names.push(name);
        },

        remove: function(id) {
            names.pop();
        },
        setLogin: function(loginName) {
            login = loginName;
        },
        getLogin: function() {
            return login;
        }
    }
});

