const loadSportsData = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value ;

    // console.log(searchText);

    const url= `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.teams));

}

const displaySearchResult = teams =>{
    const searchContainer = document.getElementById('search-container');
    
    teams.forEach(team => {

        console.log(team);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
            <div class="card">
                <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Team Name: ${team.strTeam}</h5>
                    <h6 class="card-title">Team Stadium :${team.strStadium}</h6>
                    <h6 class="card-title" Stadium LOcaion :>${team.strStadiumLocation}</h6>
                    <p class="card-text">${team.strDescriptionEN}</p>
                </div>
            </div>
         `;
        searchContainer.appendChild(div);

    });

}