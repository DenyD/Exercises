app.controller("namesCtrl", function($scope) {
    $scope.names = [
        {name:'Janek',country:'Poland'},
        {name:'Carl',country:'USA'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'France'},
        {name:'Vladimir',country:'Russia'},
        {name:'Birgit',country:'USA'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Japan'}
        ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});
app.filter('myFormat', function() {
    return function(x) {
        var i;
        var c;
        var txt = x+ ' = ';
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            else if(i % 2 == 1) {
                c = ' ' + c + ' ';
            }
            txt +=c;
        }
        return txt;
    };
});