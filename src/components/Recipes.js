import { useState, useEffect } from 'react'

function Recipes() {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Recettes trouvées :</h2>
      {meals && meals.map((meal) => (
        <div key={meal.idMeal}>
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
        </div>
      ))}
    </div>
  );


}

export default Recipes
