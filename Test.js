function counting() {
    var arr = [] , counter;
    for (counter = 0; counter < 5; counter++) {
        arr[counter] = (function(c){
            return function () {
                return c;
            }
        })(counter);
    }
    return arr;
}
var arr = counting();
console.log(arr[0]());




var setBonus = function () {
    var that = this;
    var countBonus = function (inc) {
        that.salary += inc || that.salary*0.5;
    };
    countBonus();
};
setBonus();
console.log(this.salary);


for (var counter = 0; counter < 5; counter++) {
    setTimeout((function(counter){
            return function() {
                console.log("SetTimeout=======", counter);
            }
        })(counter)
        , 2000)
}