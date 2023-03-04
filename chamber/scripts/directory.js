let data; // declare data variable

async function getData() {
  try {
    const response = await fetch('data.json');
    data = await response.json();
    displayDataAsCards(data.companies);
  } catch (error) {
    console.error(error);
  }
}

function displayDataAsCards(data) {
  const directory = document.querySelector('#business-directory');
  directory.innerHTML = ''; // clear any existing content

  data.forEach(company => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h2>${company.name}</h2>
      <img src="${company.image}" alt="This the logo for ${company.name}" loading="lazy"/>
      <p>${company.description}</p>
      <ul>
        <li><strong>Address:</strong> ${company.address}</li>
        <li><strong>Phone:</strong> ${company.phone}</li>
        <li><strong>Website:</strong> ${company.website}</li>
      </ul>
    `;
    directory.appendChild(card);
  });
}

function displayDataAsList(data) {
    const directory = document.querySelector('#business-directory');
    directory.innerHTML = ''; // clear any existing content
  
    const table = document.createElement('table');
    table.setAttribute('id','table')
    table.classList.add('table');
  
    // Create table header
    const tableHeader = document.createElement('tr');
    tableHeader.innerHTML = `
      <th>Name</th>
      <th>Description</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Website</th>
    `;
    table.appendChild(tableHeader);
  
    // Add data to table rows
    data.forEach(company => {
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${company.name}</td>
        <td>${company.description}</td>
        <td>${company.address}</td>
        <td>${company.phone}</td>
        <td>${company.website}</td>
      `;
      table.appendChild(tableRow);
    });
  
    directory.appendChild(table);
}

getData();

const listViewButton = document.querySelector('#list-view');
listViewButton.addEventListener('click', function() {
  displayDataAsList(data.companies);
});

const cardViewButton = document.querySelector('#card-view'); // change variable name
cardViewButton.addEventListener('click', function() {
  displayDataAsCards(data.companies);
});
