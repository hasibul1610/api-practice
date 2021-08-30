const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {

    console.log(countries);
    for(const country of countries){
        const countryContainer = document.getElementById('country-container');
        const div = document.createElement('div');
        div.classList.add('countries');
        div.innerHTML = `
            <h2>Country Name ${country.name}</h2>
            <h2>Country Population ${country.population}</h2>
        `;
        countryContainer.appendChild(div);
    }
}

const searchButton = () =>{
    const searchField = document.getElementById('search-input');
    
    const searchInput = searchField.value ;

    // console.log(searchInput);

    const url = `https://restcountries.eu/rest/v2/name/${searchInput}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data[0]));
    
}

const displaySearchResult = (country) => {
    // console.log(country);
    const postContainer = document.getElementById('result-container');
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${country.name}</h2>
            <img width="200px" src="${country.flag}">
        `;
        postContainer.appendChild(div);
}