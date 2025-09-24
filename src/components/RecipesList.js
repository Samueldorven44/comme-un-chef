import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'

function RecipesList() {
  const [term, setTerm] = useState('')
  const [meals, setMeals] = useState([])

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
  }, [])

  useEffect(() => {
    if (term === '') {

      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then((res) => res.json())
        .then((data) => setMeals(data.meals || []))
      return
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
  }, [term])

  return (
    <div>
      <h1>🍽️ Rechercher une recette</h1>
      <SearchBar setTerm={setTerm} />

      {meals.length === 0 && <p>Aucune recette trouvée.</p>}

      {meals.map((meal) => (
        <div key={meal.idMeal} style={{ marginBottom: '20px' }}>
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
        </div>
      ))}
    </div>
  )
}

export default RecipesList
