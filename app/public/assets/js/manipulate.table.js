var formTable = document.getElementById("formIdTable");
var opTagTable = document.getElementById("opTagTable");

function submitForm(event) {
  var tableNumber = $("#table-number").val();
  tableNumber == "" ? (tableNumber = 5) : tableNumber;

  opTagTable.innerHTML = "";
  event.preventDefault();
  opTagTable.innerHTML = `${createTable(tableNumber)}`;
}

formTable.addEventListener("submit", submitForm);

function createTable(number) {
  let table = `<table class="alt">
  <thead>
      <tr>
        <th>Number</th>
        <th>Operation</th>
        <th>Number</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>`;
  for (let i = 1; i <= 10; i++) {
    table += `<tr>
    <td>${number}</td>
    <td>x</td>
    <td>${i}</td>
    <td>${number * i}</td>
  </tr>`;
  }
  table += `</tbody>
  </table>`;
  return table;
}
