const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
    cards.innerHTML = '';
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let date = document.createElement('p');
      let place = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      date.textContent = `Date of Birth: ${prophet.birthdate}`;
      place.textContent = `Place of Birth: ${prophet.birthplace}`;
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ______________`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(date);
      card.appendChild(place);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    } // end of forEach loop
  )} // end of function expression

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
}

getProphetData();
const filterButton = document.getElementById('filter');
console.log(filterButton);
filterButton.addEventListener('click', filterProphetsByServiceYears);


async function filterProphetsByServiceYears() {
    const response = await fetch(url);
    const data = await response.json();
    const filteredProphets = data.prophets.filter((prophet) => {
      const servedYears = prophet.length;
      return servedYears >= 10;
    });
    displayProphets(filteredProphets);
  }
  const resetButton = document.querySelector('#reset-button');
  resetButton.addEventListener('click', async () => {
    await getProphetData();
  });
