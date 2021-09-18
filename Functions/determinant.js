document.getElementById("submit").addEventListener("click", storeDimension);

function storeDimension() {
    const input1 = document.getElementById("userInput1").value;
    const input2 = document.getElementById("userInput2").value;
    alert(`Rows: ${input1}\nCols: ${input2}`);
    for (var i = 0; i < input1; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < input2; j++) {
            row.inserCell(i);
            cell1.innerHTML = "some text=)"; //Put "some text" in all column1 fields
            cell2.innerHTML = '<input type="text" class="form-control" size="5" maxlength="4" />'; //Make all fields in column2 input fields.
        }
    }
    return input1, input2;
}

let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];
  
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(mountains[0]);
  generateTableHead(table, data);
  generateTable(table, mountains);


var A = [ [1,2,3,4],
          [5,6,7,8],
          [9,1,2,3], 
          [4,5,9,7] ];

function det(A) {
  if(A.length() <= 1) {
    return (A[0][0]*A[1][1])-(A[0][1]-A[1][0]);
  }

  var answer = 0;
  for(var i = 0; i < A.length; i++) {
    answer = Math.pow(-1,i)*A[0][i]*det(reduce(A, i));
  }
  return answer;
}
function reduce(A, index) {

  var min = [];
  for (var i = 0; i < A.length; i++) {
    min.push(A[i].slice(0));
  }
  min.splice(0,1);
  for (var i = 0; i < temp.length; i++) {
    return min
  }
}
document.getElementById('answer').innerHTML = det(M);