

function tambahTerus(input){

  let str = input.toString();
  let tambah = 0;
  let final = 0;
  let nilai = 0;
  let arr = [];
  for(let i = 0; i < str.length; i++){
    tambah += Number(str[i]);
  }
  if(tambah.toString().length === 1){
    final = tambah
  }else{
    final = tambah.toString();

    for(let j = 0; j < final.length; j++){

      nilai += Number(final[j]);
    }

    final = nilai;

  }

  if(final.toString().length > 1){
    let split = final.toString().split("");
    let hasilnya = '';
    for(let k = 0; k < split.length; k++){

      arr.push(Number(split[k]));
    }

    final = recursive(arr);

  }else{
    final = final;
  }

  return final;


}
function recursive(nilai){
  if (nilai.length === 1) {
    return nilai[0];
  }
  else {
    return nilai.pop() + recursive(nilai);
  }
}

console.log(tambahTerus(13)); // 4
console.log(tambahTerus(54)); // 9
console.log(tambahTerus(123)); // 6
console.log(tambahTerus(5)); // 5
console.log(tambahTerus(1234)); // 1
console.log(tambahTerus(99)); // 9
console.log(tambahTerus(88888888)); // 1
console.log(tambahTerus(333)); // 9
