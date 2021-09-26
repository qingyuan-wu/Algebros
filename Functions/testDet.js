// NOT connected to any html, test the functionality of the det function

function calcDet(A) {

    if(A.length <= 1) {
        console.log(`The determinant is ${A[0][0]}`);
        return A[0][0];
    }
    var answer = 0;
    for(var j = 0; j < A.length; j++) {
        console.log("To take minor of\n");
        console.log(A);
        answer += Math.pow(-1,j)*A[0][j]*calcDet(reduce(A, 0, j));
    }
    console.log(`${answer}`);
    return answer;
}

function reduce(A, row, col) {
    // returns minor of A, with row row and col column removed
    // console.log(A);

    //make a DEEP copy of A
    var min = []; 
    for (var i = 0; i<A.length; i++) {
        min[i] = A[i].slice();
    }
    rows = A[0].length;
    for (var i = 0; i < rows; i++) {
      min[i].splice(col, 1);
    }
    min.splice(row, 1); //remove the row
    console.log(`${row}, ${col} minor is ${min}`);
    return min; // return the minor
}

const A = [[1,1,2],
    [4,5,6],
    [7,8,9]];
const B = [[1,2],
        [3,4]];
// console.log(reduce(A,0,2));
calcDet(B);
calcDet(A);