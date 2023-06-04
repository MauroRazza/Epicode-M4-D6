async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  const tableBody = document.getElementById('userTableBody');

  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${user.name}</td><td>${user.username}</td><td>${user.email}</td>`;
    tableBody.appendChild(row);
  });
}

function filterUsers() {
  const filter = document.getElementById('filter').value;
  const search = document.getElementById('search').value.toLowerCase();
  const tableRows = document.querySelectorAll('#userTableBody tr');

  tableRows.forEach(row => {
    const user = {
      name: row.cells[0].innerText.toLowerCase(),
      username: row.cells[1].innerText.toLowerCase(),
      email: row.cells[2].innerText.toLowerCase()
    };

    if (user[filter].includes(search)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

document.getElementById('filter').addEventListener('change', filterUsers);
document.getElementById('search').addEventListener('input', filterUsers);

fetchUsers();