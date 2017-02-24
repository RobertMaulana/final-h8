// Function 2 Competency Test

function removeDash(str) {
  // Code Disini
  return str.replace(/-/g, " ");
}

function capitalizeString(str) {
  // Code Disini

  let tes = str.replace(/-/g, " ");
  let split = tes.split(" ");
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
  }
  return split.join(" ");
}


function transformTextToNumber(str) {
  // Code Disini

  let lower = str.toLowerCase();
  let ganti = '';
  for(let j = 0; j < lower.length; j++){

    if(lower[j] === "a"){
      ganti += lower[j].replace(/a/,"4");

    }else if(lower[j] === "i"){
      ganti += lower[j].replace(/i/,"1");
    }else if(lower[j] === "e"){
      ganti += lower[j].replace(/e/,"3");
    }else if(lower[j] === "s"){
      ganti += lower[j].replace(/s/,"5");
    }else if(lower[j] === "o"){
      ganti += lower[j].replace(/o/,"0");
    }else{
      ganti += lower[j];
    }

  }

  let split = ganti.split(" ");
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
  }
  let capital = split.join(" ");
  return capital;

}


function stringManipulator(str) {
  var cleanedStr = removeDash(str);
  var capitalizedStr = capitalizeString(cleanedStr);
  var transformedStr = transformTextToNumber(capitalizedStr);
  return transformedStr;
}

console.log(stringManipulator("Hello-world,-tHis-IS-aN-eXAMple-seNTence"));
// H3ll0 W0rld, Th15 15 4n 3x4mpl3 53nt3nc3

console.log(stringManipulator("lORem-IpSUM DolOR sIt-AmeT"));
// L0r3m 1p5um D0l0r 51t 4m3t

console.log(stringManipulator("d1s i5-v3Ry e4sy-I can-do th1s"));
// D15 15 V3ry 345y 1 C4n D0 Th15
