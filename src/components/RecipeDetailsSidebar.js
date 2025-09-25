import '../styles/RecipeDetailsSidebar.css'

function RecipeDetailsSidebar({ meal, onClose }) {
  if (!meal) return null

  return (
    <div className="SideBar">
      <button className='btn-SideBar' onClick={onClose}>Fermer</button>
      <img className="img-MealSideBar" src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
      <p>Origine : {meal.strArea}</p>
      <p>Catégorie : {meal.strCategory}</p>
      <p>Instructions : {meal.strInstructions}</p>
      {meal.strYoutube && (
        <p>
          <a className='link-yt' href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
           👉 Voir la vidéo
          </a>
        </p>
      )}
    </div>
  )
}

export default RecipeDetailsSidebar
