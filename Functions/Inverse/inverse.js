document.getElementById("submit").addEventListener("click", storeDimension);

function storeDimension() {
    const input1 = document.getElementById("userInput1").value;
    
    alert(`Rows and Columns: ${input1}\n`);
    localStorage.setItem("inverseRows", input1);
    
    return input1;
}