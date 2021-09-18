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
