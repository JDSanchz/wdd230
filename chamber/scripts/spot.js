        // Load the JSON data using fetch
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                // Filter the companies with gold or silver membership
                const spotlightCompanies = data.companies.filter(company => {
                    return company.membership === 'gold' || company.membership === 'silver';
                });

                // Shuffle the spotlightCompanies array to randomize the results
                shuffleArray(spotlightCompanies);

                // Update the spotlight elements with the company data
                const spotlight1 = spotlightCompanies[0];
                const spotlight2 = spotlightCompanies[1];
                const spotlight3 = spotlightCompanies[2];

                document.getElementById('spotlight-title1').textContent = spotlight1.name;
                document.getElementById('spotlight-img1').src = spotlight1.image;
                document.getElementById('spotlight-img1').alt = `This is a logo for ${spotlight1.name}`;
                document.getElementById('spotlight-desc1').textContent = spotlight1.description;
        
                document.getElementById('spotlight-title2').textContent = spotlight2.name;
                document.getElementById('spotlight-img2').src = spotlight2.image;
                document.getElementById('spotlight-img2').alt = `This is a logo for ${spotlight2.name}`;
                document.getElementById('spotlight-desc2').textContent = spotlight2.description;
        
                document.getElementById('spotlight-title3').textContent = spotlight3.name;
                document.getElementById('spotlight-img3').src = spotlight3.image;
                document.getElementById('spotlight-img3').alt = `This is a logo for ${spotlight3.name}`;
                document.getElementById('spotlight-desc3').textContent = spotlight3.description;
            })
            .catch(error => console.error(error));

        // Shuffle an array in place
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }