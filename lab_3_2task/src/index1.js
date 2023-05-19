import './index1.css';

const axios = require('axios');

const form = document.getElementById('btn');
const searchInput = document.querySelector('#search-input');
const jobListings = document.querySelector('#job-listings');

form.addEventListener('click', () => {
    let searchText = searchInput.value;
    searchText = searchText.trim().replace(/\s+$/g, "");
    searchText = searchText.charAt(0).toUpperCase() + searchText.slice(1);
    let localId = 0;
    
    if (searchText.length === 0) {
        alert("Укажите вакансию!")
        return
    }

            axios
                .get(`https://api.hh.ru/vacancies`, {
                    params: {
                        text: searchText,
                    },
                })
                .then((response) => {
                    jobListings.innerHTML = '';
                    response.data.items.forEach((item) => {
                        const jobListing = document.createElement('li');
                        jobListing.classList.add('job-listing');
                        jobListing.innerHTML = `
              <h2>${item.name}</h2>              <p>${item.employer.name} - ${item.area.name}</p>
              <a href="${item.alternate_url}" target="_blank">Apply now</a>`;
                        jobListings.appendChild(jobListing);
                    });
                })
                .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
