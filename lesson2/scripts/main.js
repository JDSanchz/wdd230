let date = new Date();
let year = date.getFullYear();

document.querySelector('#upd').innerHTML = '&copy;' + year + '.:|:. Jesus Del Barrio .:|:. Idaho';

let currentdate = document.lastModified;

document.querySelector('updates').textContent = `Last Updated: ${currentdate}`;