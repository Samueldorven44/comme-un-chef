import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import MealItem from './MealItem'
import RecipeDetailsSidebar from './RecipeDetailsSidebar'
import '../styles/RecipesList.css'

function RecipesList() {
  const [term, setTerm] = useState('')
  const [meals, setMeals] = useState([])
  const [selectedMeal, setSelectedMeal] = useState(null)

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
      <h1 className='title'>🍽️ Rechercher une recette</h1>
      <SearchBar setTerm={setTerm} />

      {meals.length === 0 && <p>Aucune recette trouvée.</p>}

      <div className = "MealList">
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} meal={meal} onClick={setSelectedMeal} />
        ))}
      </div>

      <RecipeDetailsSidebar meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
    </div>
  )
}

export default RecipesList
