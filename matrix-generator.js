function generator (rows, columns){
  var myArr = [];

  for (var n = 0; n < rows * columns; n++){
    myArr.push(Math.floor(Math.random() * 100) + 1);
  }


  myArr.sort(function(a,b){
    return a - b;
  });

  var myMatrix = [];

  var index = 0;

  for (var c = 0; c < columns; c++){
    myMatrix.push([]);
    for (var r = 0; r < rows; r++){
      myMatrix[c].push(myArr[index]);
      index++;
    }
  }

  return myMatrix;
}

console.log(generator(5,3));