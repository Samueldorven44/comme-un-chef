# Comme un Chef

Ce dépôt est un **exercice d'entraînement à l'intégration d'API avec React**. 

## 🎯 Objectifs pédagogiques

- Réviser la structure d'une application créée avec Create React App.
- Pratiquer les hooks `useState` et `useEffect` pour charger et filtrer des données distantes.
- Comprendre la gestion d'état entre composants parents et enfants.
- S'éxercer sur l'intégration d'une API.

## 🧩 Fonctionnalités principales

- Recherche dynamique de recettes auprès de l'API **[TheMealDB](https://www.themealdb.com/api.php)**.
- Affichage d'une liste de plats avec visuel, catégorie et filtrage par mot-clé.
- Ouverture d'un panneau latéral détaillant la recette sélectionnée : origine, instructions et lien vers une vidéo YouTube.

## 🗂️ Structure rapide

```
src/
  components/
    App.js                   # Point d'entrée de l'interface
    RecipesList.js           # Récupération des données et gestion du filtrage
    SearchBar.js             # Composant contrôlé pour la saisie utilisateur
    MealItem.js              # Carte d'affichage d'une recette
    RecipeDetailsSidebar.js  # Panneau d'informations détaillées
  styles/                    # Feuilles de styles CSS modulaires
```

Ce projet reste volontairement simple afin de se concentrer sur la maîtrise des appels API dans un environnement React.
