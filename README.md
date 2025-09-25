# Comme un Chef

Ce dépôt présente un **exercice d'entraînement à la consommation d'API avec React**. L'objectif principal est de manipuler le cycle de vie d'un composant fonctionnel, d'utiliser `fetch` pour interroger un service REST public et de mettre en forme les résultats dans une interface moderne.

## 🎯 Objectifs pédagogiques

- Réviser la structure d'une application créée avec Create React App.
- Pratiquer les hooks `useState` et `useEffect` pour charger et filtrer des données distantes.
- Comprendre la gestion d'état entre composants parents et enfants.
- Expérimenter la mise en page responsive via des composants et feuilles de style dédiés.

## 🧩 Fonctionnalités principales

- Recherche dynamique de recettes auprès de l'API **[TheMealDB](https://www.themealdb.com/api.php)**.
- Affichage d'une liste de plats avec visuel, catégorie et filtrage par mot-clé.
- Ouverture d'un panneau latéral détaillant la recette sélectionnée : origine, instructions et lien vers une vidéo YouTube.
- Design simple et efficace pour se concentrer sur la logique de récupération de données.

## 🚀 Prise en main

```bash
yarn install
yarn start
```

L'application est servie sur [http://localhost:3000](http://localhost:3000). Toute modification des sources est automatiquement rechargée.

## 🧪 Tests

Aucun scénario de test automatisé spécifique n'a été rédigé pour cet entraînement. Vous pouvez toutefois lancer la commande par défaut de Create React App :

```bash
yarn test
```

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

## 🔭 Pistes d'amélioration

- Ajouter une gestion d'état avancée (loading, erreurs, pagination).
- Internationaliser l'interface et traduire les contenus de l'API.
- Mettre en place des tests unitaires et des tests d'intégration (React Testing Library).
- Déployer l'exercice sur une plateforme comme Netlify ou Vercel pour partager le résultat.

---

Ce projet reste volontairement simple afin de se concentrer sur la maîtrise des appels API dans un environnement React moderne.
