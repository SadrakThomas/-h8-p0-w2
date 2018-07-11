// SOAL NO. 1
var rows1 = 5;
for (var i = 0; i < rows1; i++){
    var asterix = '*';
    console.log(asterix);
}

// SOAL NO. 2
var rows2 = 5
for (var i = 0; i < rows2; i++){
    var asterix = '';
   for (j = 0; j < rows2; j++){
        asterix += '*';
   }
   console.log(asterix);
}

// SOAL NO. 3
var rows3 = 5;
for (var i = 0; i < rows3; i++){
    var asterix = '';
   for (j = 0; j <= i; j++){
        asterix += '*';
   }
   console.log(asterix);
}