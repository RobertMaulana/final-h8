let input = ["Budi", "Badu", "Joni", "Jono"];

function initialGrouping(input){
  let sementara = [];
  let unik = '';
  for(let i = 0; i < input.length; i++){

    sementara.push(input[i][0]);

  }
  for(let j = 0; j < sementara.length; j++){

  }
  console.log(sementara);
}

initialGrouping(input)

/*

[
  [ “B”, “Budi”, “Badu” ],
  [ “J”, “Joni”, “Jono” ],
]

*/
