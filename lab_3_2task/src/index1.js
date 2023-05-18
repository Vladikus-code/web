import './index1.css';

const axios = require('axios');

const form = document.getElementById('btn');
const locationInput = document.querySelector('#location-input');
const searchInput = document.querySelector('#search-input');
const jobListings = document.querySelector('#job-listings');

form.addEventListener('click', () => {
    let locationName = locationInput.value;
    locationName = locationName.trim().replace(/\s+$/g, "");
    locationName = locationName.charAt(0).toUpperCase() + locationName.slice(1);
    let searchText = searchInput.value;
    searchText = searchText.trim().replace(/\s+$/g, "");
    searchText = searchText.charAt(0).toUpperCase() + searchText.slice(1);
    let localId = 0;
    
    if (searchText.length === 0) {
        alert("Укажите вакансию!")
        return
    }
    if (locationName.length === 0) {
        alert("Укажите город!")
        return
    }
    axios.get(`https://api.hh.ru/areas/`)
        .then((response) => {
            for (let e of response.data) {
                for (let a of e.areas) {
                    if (a.name === locationName) {
                        localId = a.id
                    }
                    for (let c of a.areas) {
                        if (c.name === locationName) {
                            localId = c.id;
                        }
                    }
                }
            }
            if (localId === 0) {
                alert("Город не найден")
                return
            }
            axios
                .get(`https://api.hh.ru/vacancies`, {
                    params: {
                        text: searchText,
                        area: localId,
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
});
