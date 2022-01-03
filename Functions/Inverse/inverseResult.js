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
    calcInverse(A);
}

function calcInverse(A) {
    

}