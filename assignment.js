// feetToMile
function feetToMile(feet){
    const mile= feet/5280;  //As we know , 1 mile = (1/5280) feet;
    return mile.toFixed(5); // you can change how long you want to keep after decimal , default is 5;
}

// // you can test form here , without any boiler plate 

// var result= feetToMile(15000)
// console.log(result)



//--------------------------------------------------------------------

// woodCalculator 
function woodCalculator(chair , table , bed) {
    let chairCount=chair * 1;     //1 chair needs 1 Cubic-feet
    let tableCount= table * 3;    //1 table needs 3 Cubic-feet
    let bedCount= bed * 5 ;        //1 bed needs 5 Cubic-feet
    const sumOfWood = ( chairCount + tableCount + bedCount );
    return sumOfWood ;
}

// // you can test form here , without any boiler plate 

// var result= woodCalculator(3,3,3)
// console.log(result)


//---------------------------------------------------------------
// tinyFriend
function tinyFriend(names){

  let shortestName =  names[0];
  for (let i = 0; i < names.length; i++){

    let currentWordLength = names[i];
    
    if (currentWordLength < shortestName){
      shortestName = currentWordLength;
    }
  }
  return shortestName;
}

// // you can test form here , without any boiler plate   

// var names=["shuvo", "sumona", "2", "no" ,"opeg"];
// let result=tinyFriend(names);
// console.log(result) 



//-------------------------------------------------------------
//brickCalculator
function brickCalculator(floor) {
  if (1<=floor && floor<=10) {
    var firstTenFloor = floor * 1000 * 15;
    console.log(firstTenFloor)
  }

  else if (11<=floor && floor<=20) {
    var secondTenFloor = ((10 * 1000 * 15) + (12 * 1000 * (floor-10))); //
    console.log(secondTenFloor)

  }

  else {
    var extraFloors= (floor - 20);
    var beyoundFloor = ((10 * 1000 * 15)+(12 * 1000 * 10)+(extraFloors * 10 * 1000))
    console.log(beyoundFloor)
  }

}

// // you can test form here , without any boiler plate 

//  brickCalculator(25);




 