
// Get the current date in milliseconds
const currentDate = new Date().getTime();

// Get the last visit date from localStorage
const lastVisitDate = localStorage.getItem('lastVisitDate');

if (lastVisitDate) {
  // Calculate the time difference in days
  const timeDiff = (currentDate - parseInt(lastVisitDate)) / (1000 * 60 * 60 * 24);
  const daysSinceLastVisit = Math.round(timeDiff);

  // Display the message to the user
  document.querySelector("#visitdate").innerHTML= `It's been ${daysSinceLastVisit} days since your last visit.`;
}

// Store the current date in localStorage for the next visit
localStorage.setItem('lastVisitDate', currentDate.toString());
