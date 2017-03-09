

var array1 = ['-','-','-','-'];
var array2 = ['-','-','-','-'];

var array3 = ['-','-','-','-'];
var array4 = ['-','-','x','-'];

var prev = ['o','x','-','o','o','x','o','-','x'];
var curr = ['o','x','-','o','o','x','-','-','x'];

function getIndexOfCurrMove(array1,array2){
  var found  = function findI(array1, array2, i){
    //return -1 if no difference is found
    if(i >= array1.length){
      index = -1;
    //return the index of where the difference is
    }else if(!(array1[i] === array2[i])){
      index = i;
    //if neither of these, check the next index and iterate
    }else{
      i++;
      findI(array1, array2, i);
    }
    return index;
  }
  return found(array1,array2,0);
}
console.log(getIndexOfCurrMove(array1,array2));
console.log(getIndexOfCurrMove(array3,array4));
console.log(getIndexOfCurrMove(prev,curr));
/*
-1
2
6
*/
