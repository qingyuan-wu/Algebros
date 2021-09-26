document.getElementById("submit").addEventListener("click", retrieveMatrix);

function retrieveMatrix() {
    //initialize empty array:
    var A = [];
    //retrieve user inputs
    for(var i = 0; i < parseInt(localStorage.getItem("rows")); i++){
        A[i] = [];
        for(var j = 0; j < parseInt(localStorage.getItem("columns")); j++){
            A[i][j] = parseFloat(document.getElementById(`cell${i+1}${j+1}`).value);
        }    
    }
    // Call the determinant calculator function
    calcDet(A);
}

function calcDet(A){
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

    rows = A[0].length;
    for (var i = 0; i < rows; i++) {
      min[i].splice(col, 1);
    }
    min.splice(row, 1); //remove the row
    return min; //return the minor
}

function display() {
    document.write(`<div>det = ${localStorage.getItem("determinant")}</div>`);
}

display()