function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
  
    for(var i = 0; i <= localStorage.getItem("inverseRows"); i++){
        var tr = tbl.insertRow();
        for(var j = 0; j <= localStorage.getItem("inverseRows"); j++){
          var td = tr.insertCell();
          if (i==0 && j==0) continue;
          if (i==0) {
            td.appendChild(document.createTextNode(j));
          }
          else if (j==0) {
            td.appendChild(document.createTextNode(i));
          }
          else{
            var cell = document.createElement('input');
            // cell.defaultValue = 0; // default is 0
            cell.id = `cell${i}${j}`; //i-th row, j-th column
            cell.type = "text";
            cell.size = 2;
  
            td.appendChild(cell);
          }
          // <input type="text" size="4" autocomplete="off" name="matrix[0][2]" title="[1,3]" class="inputCell" style=""></input>
      }
    }
    body.appendChild(tbl);
  }
  tableCreate();