//can you create like a sort of graph?
//a function takes in a number within an array
//close attention to the indexes of the numbers within the array are important
//probably it would be wiser to pass in the index of the element rather than the value of the element itself

//okay now we are working with indexes. now what?
//if the user picks an element at index 5, what should the function do?

/*

Game = [-,-,-,
	      -,-,x
        -,-,-]
what i want the program to do after this is for element at index 5 to FIRST
check if it has any neighbors at index 2, index 4 and index 7.

Apparently you dont want it to check at the diagonals, why? because it would waste
time for it to check possibilties that could not possibly exist.

Game = [-,-,C,
	      -,C,x
        -,-,C]

if neighbors exist, then check the values. If the all the values are '-' then it has
already reached base. there is a problem however, how does each element check viable
locations to see where it should start seeking for a 3 in a row. Like this situation
you stated before illustrated below, will not happen. how will you ensure that:

Game = [-,C,C,
	      -,C,x
        -,C,C]

try to implement a single cycle graph recursively
weighted by one each edge
implemented using a dictionary
you could try an adjacent matrix,
a vertex is never adjacent to itself
https://www.youtube.com/watch?v=fMuTwUYhxeY
https://www.youtube.com/watch?v=2guA5uMEmZQ

0: 1, 3, 4
1: 0, 2, 4
2: 1, 4, 5
3: 0, 4, 6
4: 0, 1, 2, 3, 5, 6, 7, 8
5: 2, 4, 8
6: 3, 4, 7
7: 4, 6, 8
8: 4, 5, 7


this will be how it will make its check for potential answers.
However, there is one last issue. How will it tell that this x path is not a
solution:

Game = [o,-,x,
	      -,x,o
        -,o,x]

okay lets check this step by step, monitoring the x's
Game = [-,-,-,
	      -,-,-
        -,-,-]

        0: 1, 3, 4
        1: 0, 2, 4
        2: 1, 4, 5
        3: 0, 4, 6
        4: 0, 1, 2, 3, 5, 6, 7, 8
        5: 2, 4, 8
        6: 3, 4, 7
        7: 4, 6, 8
        8: 4, 5, 7

*/
