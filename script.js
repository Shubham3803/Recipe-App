const searchBox = document.querySelector('.searchBox');
const search_button = document.querySelector('.search_button');
const recipeContainer = document.querySelector('.recipe-container');
const recipeCloseBtn = document.querySelector('.recipe-close-Btn');
const recipeDetailsContent = document.querySelector('.recipe-details-content');



const fetchRecipes =async (query)=>{
  recipeContainer.innerHTML="<h2>Fetching recipes...</h2>";
  const data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
  const response =await data.json();

  recipeContainer.innerHTML="";
  response.meals.forEach(meal=> {
    const recipeDiv =document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `
      <img src='${meal.strMealThumb}'>
      <h3>${meal.strMeal}</h3>
      <p>${meal.strArea} <span>Dish</span></p>
      <p>Belongs to <span>${meal.strCategory}</span> Category</p>
      
    `
    const button =document.createElement('button')
    button.textContent= "View Recipe";
    recipeDiv.appendChild(button);

    // Adding EventLisner to recipe Container

      button.addEventListener('click', ()=>{
        openRecipePopup(meal);
      })

    recipeContainer.appendChild(recipeDiv);
  });
  
}


const fetchIngredients = (meal)=>{
  console.log(meal);
  
}

const openRecipePopup = (meal) =>{
  recipeDetailsContent.innerHTML = `
  <h2>${meal.strMeal}</h2>
  <h3>Ingredents</h3>
  <ul>${fetchIngredients(meal)}</ul>
  `
  recipeDetailsContent.parentElement.style.display = 'block';

}


search_button.addEventListener('click', (e)=> {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  fetchRecipes(searchInput);
  console.log('button Clicked');
  
})