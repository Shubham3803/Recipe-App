const searchBox = document.querySelector('.searchBox');
const search_button = document.querySelector('.search_button');
const recipe_container = document.querySelector('.recipe-container');


const fetchRecipes =async (query)=>{
  const data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
  const response =await data.json();
  console.log(response.meals[0]);
  
}

// const meraFunction = (query)=>{
//   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata ${query}`)
//   .then(response => {
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     console.log(response)
//     return response.json(); // Parse the JSON response
//   })
//   .then(data => {
//     console.log('Success:', data);
//     // Work with your data here
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
// }

search_button.addEventListener('click', (e)=> {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  fetchRecipes(searchInput);
  console.log('button Clicked');
  
})