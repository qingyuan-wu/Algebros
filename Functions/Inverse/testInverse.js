import { create, all } from 'mathjs'
const math = create(all);
function calcInverse(A){
    //base case
    if(A.length <= 1) {
        localStorage.setItem("determinant", A[0][0]);
        return A[0][0];
    }

    var answer = 0;
    for(var j = 0; j < A.length; j++) {
        answer += Math.pow(-1,j)*A[0][j]*calcDet(reduce(A, 0, j)); //resucrsive step
    }

    // store result in "determinant"
    localStorage.setItem("determinant", answer);
    return answer;
}

function reduce(A, row, col) {
    // returns minor of A, with row row and col column removed
    
    //make a DEEP copy of A
    var min = []; 
    for (var i = 0; i<A.length; i++) {
        min[i] = A[i].slice();
    }

    var rows = A[0].length;
    for (var i = 0; i < rows; i++) {
      min[i].splice(col, 1);
    }
    min.splice(row, 1); //remove the row
    return min; //return the minor
}

// function display() {
//     document.write(`<div>det = ${localStorage.getItem("determinant")}</div>`);
// }

// display();

A = [[1,2],[3,4]]
console.log(math.inv(A));