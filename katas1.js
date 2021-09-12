// -1

function oneThroughTwenty() {
    let resultado =[];
    
   for(let i=1; i<=20; i++){
      resultado.push(i);
    }

    return resultado;

}
console.log(oneThroughTwenty());

// *******************************************
// -2

function evensToTwenty() {
  let resultado =[];

  for (let i=1; i<=20; i++){

    if(i%2 == 0){
    resultado.push(i);
    }

  }

  return resultado;

}
console.log(evensToTwenty())

// *******************************************
// -3

function oddsToTwenty() {
  let resultado=[];

  for(let i = 1; i <= 20; i++){

    if(i % 2 == 1){
      resultado.push(i);
    }

  }

  return resultado;

}
console.log(oddsToTwenty());

// *******************************************
// -4

function multiplesOfFive() {
  let resultado =[];

  for(let i = 1; i <= 100; i++ ){

    if( i % 5 == 0 ){
      resultado.push(i);
    }

  }

  return resultado;

}

console.log(multiplesOfFive());

// *******************************************
// -5

function squareNumbers() {
    let resultado = []

    for(i = 1; i <= 100; i++){

      if( i ** 2 <= 100){
        resultado.push(i**2);
      }

    }

    return resultado;
}

console.log(squareNumbers());

// *******************************************
// -6

function countingBackwards() {
    let resultado = [];

    for(let i = 20; i >= 1; i--){
      resultado.push(i);
    }
    
    return resultado;
}

console.log(countingBackwards())

// *******************************************
// -7

function evenNumbersBackwards() {
    let resultado=[];

    for(let i = 20; i >= 1; i--){
      if(i % 2 == 0){
        resultado.push(i);
      }
    }

    return resultado;
}

console.log(evenNumbersBackwards());

// *******************************************
// -8

function oddNumbersBackwards() {
  let resultado=[];
  
  for(let i = 20; i >= 1; i--){
    if(i % 2 != 0){
      resultado.push(i);
    }
  }
  
  return resultado;
}

console.log(oddNumbersBackwards());

// *******************************************
// -9

function multiplesOfFiveBackwards() {
    let resultado=[];

    for(let i = 100; i >= 1; i--){
      if(i % 5 == 0){
        resultado.push(i);
      }
    }
    
    return resultado;
}

console.log(multiplesOfFiveBackwards());

// *******************************************
// -10

function squareNumbersBackwards(){ 
  let resultado = [];

  for(let i = 100; i >= 1; i--){
    if( i ** 0.5 < 100){
      resultado.push(i)
    }
  }

  return resultado;
}

console.log(squareNumbersBackwards());
