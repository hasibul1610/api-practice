const loadMenus = () =>{
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    

    searchField.value = '';
    if(searchText == ''){
        console.log("write somthing");
    }

    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals));  
    } 
}

const displaySearchResult = meals =>{
    // console.log(meals);

    const searchResult = document.getElementById('search-result');
    searchResult.textContent ='';

    
    

    meals.forEach(meal =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div onclick="menuDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">Area Of Origin ${meal.strArea}</p>
                <p class="card-text">Food Category ${meal.strCategory}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);


    });

    
}

const menuDetails =async (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    // console.log(mealId);

    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayDetails(data.meals[0]));

    // do it in async way 
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.meals[0]);
}

const displayDetails = meal => {
    // console.log(meal);

    const menuContainer = document.getElementById('menu-details');
    const div = document.createElement('div');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions}</p>
        </div>
        `;
    menuContainer.appendChild(div);
}

