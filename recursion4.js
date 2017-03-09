//indexs of the tictactoe game that are contiguous to other indexes
var tttGraph = {
              '0': ['1','3','4','2','6','8'],
              '1': ['0','2','4','7'],
              '2': ['1','4','5','0','6','8'],
              '3': ['0','4','6','5'],
              '4': ['0','1','2','3','5','6','7','8'],
              '5': ['2','4','8','3'],
              '6': ['3','4','7','0','2','8'],
              '7': ['4','6','8','1'],
              '8': ['4','5','7','0','2','6']
            };

//values of both users inputs of the tictactoe game
var prevMatch = ['-','-','-',
                 '-','-','-',
                 '-','x','x'];

var currMatch = ['-','-','-',
                 '-','-','-',
                 'x','x','x'];

//grab the index of the current move in question
function getIndexOfCurrMove(array1,array2){
  var found = function findI(array1, array2, i){
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

var currMoveIndex = getIndexOfCurrMove(prevMatch,currMatch);

function checkifWinner(tttGraph,currMatch,currMoveIndex){
  //create a sums variable that starts out with the index of the step entered
  var sum = currMoveIndex;
  //a winning move requires three contiguous values of the same character
  var  contiguous = 1;
  //add the current index in soon tracking of 3 values
  var track = [currMoveIndex];
  //a winning board is not possible unless the sum of the contiguous indexes
  //is one of these 5 values. If not for this, non linear victories are possible
  //and thats no good https://www.youtube.com/watch?v=geLucCUG4i0
  var winningSums = [3,9,12,15,21];
  //allows iteration of the arrays of the keys in the tttGraph object
  var i = 0;
  var key = currMoveIndex.toString();

//contiguous is not needed, remove it when done debugging
  var check = function core(tttGraph, currMatch, currMoveIndex, winningSums,contiguous,sum,i){
    //prevents javascript from complaining if there is no winner at the turn
    winningIndexes = [];

    console.log("-------------------------------");
    console.log("current Index : "+currMoveIndex);
    console.log("sum : "+sum);
    console.log("track : "+track);
    console.log("contiguous : "+contiguous);
    console.log("i : "+i);
    console.log("-------------------------------\n");

    var key = currMoveIndex.toString();
    var neighborIndex = Number(tttGraph[key][i])


    //if the sum of the indexes is a value within winning sums and three in a row
    if(!(winningSums.indexOf(sum) === -1)){
      console.log("TEST0")
      winningIndexes = track;

    //if three in a row but the sum is not part of the winning sums, then pop this value, and forget it completely
    }else if(winningSums.indexOf(sum) === -1 && contiguous === 3){
      console.log("TEST1")
      track.pop();
      contiguous--;
      sum -= Number(tttGraph[key][(i-1)]);
      core(tttGraph, currMatch, currMoveIndex, winningSums,contiguous,sum,i);


    //if there is a matching x or a matching o to the player's input nearby, do things
  }else if((currMatch[currMoveIndex] === currMatch[neighborIndex]) && track.indexOf(neighborIndex) === -1){
      console.log("TEST2")
      track.push(neighborIndex);
      sum += neighborIndex;
      contiguous++;
      currMoveIndex = neighborIndex;
      core(tttGraph, currMatch, currMoveIndex, winningSums,contiguous,sum,i);

    //if there is a matching x or a matching o to the player's input nearby, check the next potental location next to it
    }else if(i < tttGraph[key].length){
      console.log("TEST3")
      i++;
      core(tttGraph, currMatch, currMoveIndex, winningSums,contiguous,sum,i);

    }
    return winningIndexes;
    }
  //return the list of winning index
  return check(tttGraph, currMatch, currMoveIndex, winningSums,contiguous,sum,i);
}

//assign the results of the recursion to a variable to soon check its length to
//confirm victory
var winningNumbers = checkifWinner(tttGraph,currMatch,currMoveIndex);
var win = false;
if (winningNumbers.length === 3){
  win = true;
}

// console.log(winningNumbers);
// console.log(win);
