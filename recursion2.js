var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];


var numbers = [76,98,34,99,34]

//getting an index of first incident
function indexOf(value,array){
  var i = 0;
  var recursiveSearch = function fI(value,i,array){
    if(i >= array.length){
      index = -1;
    }else if(array[i] === value){
      index = i;
    }else{
      i++;
      fI(value,i,array);
    }
    return index;
  }
  return recursiveSearch(value,i,array);
}

console.log(indexOf("John",people));
//7
console.log(indexOf(99,numbers));
//3
