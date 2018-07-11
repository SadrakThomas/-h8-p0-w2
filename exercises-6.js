console.log ('1. Looping dengan While --------------------------------------------------------------');

console.log('LOOPING PERTAMA');

var loop = 0;

while(loop < 20) {
  loop += 2;
  console.log(loop + ' - I love coding');
}

console.log('LOOPING KEDUA');

while(loop > 0) {
  console.log(loop + ' - I will become fullstack developer');
  loop -= 2
}

console.log ('2. Looping dengan For --------------------------------------------------------------');

console.log('LOOPING PERTAMA');

for(loop = 1 ; loop <= 20; loop++) {
  console.log(loop + ' - I love coding');
}

console.log('LOOPING KEDUA');

for(loop = 20; loop > 0; loop--) {
  console.log(loop + ' - I will become fullstack developer');
}

console.log ('3. Ganjil / Genap --------------------------------------------------------------');

for(angka = 1; angka <= 100; angka++) {
  if (angka % 2 === 1) {
  console.log(angka + ' GANJIL');
  }
  else {
    console.log(angka + ' GENAP');
  }
}

console.log ('Kelipatan --------------------------------------------------------------');
for(angka = 1; angka <= 100; angka += 2) {
  if (angka % 3 === 1){
    
  }
  else {
    console.log(angka + ' kelipatan 3');
  }
}

for(loop = 1; angka <= 100; angka += 5) {
  if (angka % 6 === 0){
    
  }
  else {
    console.log(angka + ' kelipatan 6');
  }
} 

for(angka = 1; angka <= 100; angka += 9) {
  if (angka % 10){
    
  }
  else {
    console.log(angka + ' kelipatan 10');
  }
} 