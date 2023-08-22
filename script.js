// Your code here

const tableElement = document.querySelector('table');

function makeRow() {
  const row = document.createElement('tr');
  
  for (let i = 0; i < 30; i++) {
    const cell = document.createElement('td');
    row.appendChild(cell);
  }
  
  tableElement.appendChild(row);
}

makeRow();

document.getElementById("add-row").onclick = makeRow;

function colorize(event) {
  const tdCell = event.target;
  const selectedColor = document.getElementById('colorSelector').value;

  if (tdCell.tagName !== 'TD') return;

  tdCell.style.backgroundColor = selectedColor;
}

document.querySelector('table').onclick = colorize;


  
