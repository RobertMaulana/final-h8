// Function 1 Competency Test

function findMax(numberArr) {
  let final = 0;
  for(let i = 0; i < numberArr.length; i++){

    if (numberArr[i] > final) {

        final = numberArr[i];

    }
  }
  return final;

}



function findMin(numberArr) {
  let final = 0;
  for(let i = 0; i < numberArr.length; i++){

    if (numberArr[i] < final) {

        final = numberArr[i];

    }
  }

  return final;
}


function findMean(numberArr) {
  // Code Disini
  let jml = 0;
  for(var i = 0; i < numberArr.length; i++){
    jml += numberArr[i];
  }
  return Math.floor(jml / numberArr.length);
}


function findOdds(numberArr) {
  // Code Disini

  let hasil = '';
  for(let i = 0; i < numberArr.length; i++){

    if(numberArr[i] % 2 !== 0){

      hasil += numberArr[i] + "-";
    }
  }
  return hasil.slice(0, hasil.length - 1);

}

function findEvens(numberArr) {
  // Code Disini
   let hasil2 = '';
   for(let i = 0; i < numberArr.length; i++){

     if(numberArr[i] % 2 === 0){


       hasil2 += numberArr[i] + "-";
     }
   }
   return hasil2.slice(0, hasil2.length - 1);
}


function numberProcessing(numberArr) {
  let max = findMax(numberArr);
  let min = findMin(numberArr);
  let mean = findMean(numberArr);
  let odds = findOdds(numberArr);
  let evens = findEvens(numberArr);

  return 'Min: ' + min + ', Max: ' + max + ', Mean: ' + mean +  ', Odds: '+ odds +', Evens: ' + evens;
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
