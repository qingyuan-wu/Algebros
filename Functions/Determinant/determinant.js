document.getElementById("submit").addEventListener("click", storeDimension);

function storeDimension() {
    const input1 = document.getElementById("userInput1").value;
    const input2 = document.getElementById("userInput2").value;
    alert(`Rows: ${input1}\nCols: ${input2}`);
    localStorage.setItem("rows", input1);
    localStorage.setItem("columns", input2);
    
    return input1, input2;
}

// var A = [ [1,2,3,4],
//           [5,6,7,8],
//           [9,1,2,3], 
//           [4,5,9,7] ];

// function det(A) {
//   if(A.length() <= 1) {
//     return (A[0][0]*A[1][1])-(A[0][1]-A[1][0]);
//   }

//   var answer = 0;
//   for(var i = 0; i < A.length; i++) {
//     answer = Math.pow(-1,i)*A[0][i]*det(reduce(A, i));
//   }
//   return answer;
// }
// function reduce(A, index) {

//   var min = [];
//   for (var i = 0; i < A.length; i++) {
//     min.push(A[i].slice(0));
//   }
//   min.splice(0,1);
//   for (var i = 0; i < temp.length; i++) {
//     return min
//   }
// }
// document.getElementById('answer').innerHTML = det(M);