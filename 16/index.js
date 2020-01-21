function freeze2(someFood) {
	alert(someFood + ' are frozen too!');
}

function refrigerator(someFood, cb) {
	setTimeout(() => {
  	//cb(someFood) //1
    //alert(someFood + ' are frozen now!'); //2
    freeze2(food); //3
  }, 3000)
}

let food = [' apple', ' orange', 'milk'];

refrigerator(food, (foodToFreeze) => {
	alert(foodToFreeze + ' are frozen now!');
})
