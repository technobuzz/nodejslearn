
var haveGoodDay  = function (food, drink, fn1) {

  console.log('have a good day');
  if (fn1 && typeof(fn1) === "function"){
    fn1();
  };
}


haveGoodDay('bagel' , 'coffee' , function () {
 console.log('completed: had a good day');
});