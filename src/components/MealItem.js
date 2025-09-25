import '../styles/MealItem.css'

function MealItem({ meal, onClick }) {
  return (
    <div className="MealItem" onClick={() => onClick(meal)}>
      <img className='img-MealItem' src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
      <p>Catégorie : {meal.strCategory}</p>
    </div>
  )
}

export default MealItem
