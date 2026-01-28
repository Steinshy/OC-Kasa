# Kasa

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7.13.0-CA4245?logo=react-router&logoColor=white&style=for-the-badge)](https://reactrouter.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.39.1-4B32C3?logo=eslint&logoColor=white&style=for-the-badge)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.8.0-F7B93E?logo=prettier&logoColor=white&style=for-the-badge)](https://prettier.io/)
[![Stylelint](https://img.shields.io/badge/Stylelint-17.0.0-263238?logo=stylelint&logoColor=white&style=for-the-badge)](https://stylelint.io/)

Kasa est une plateforme web de location d'appartements entre particuliers. Trouvez votre logement idéal parmi une sélection d'appartements disponibles à la location, avec des descriptions détaillées, des photos et toutes les informations nécessaires pour faire votre choix.

## Démonstration

- 🌐 **Demo :** [À venir]
- 📦 **GitHub :** [https://github.com/Steinshy/Kasa](https://github.com/Steinshy/Kasa)

## Aperçu rapide

- Liste des logements disponibles avec descriptions détaillées
- Pages individuelles pour chaque logement
- Navigation fluide avec React Router
- Design responsive mobile, tablette et desktop
- Interface moderne et intuitive
- Gestion des erreurs avec page 404

## Structure du projet

```text
Kasa/
├── public/
│   └── logements.json          # Données des logements
├── src/
│   ├── components/            # Composants réutilisables
│   │   ├── ExampleCard/      # Exemple de composant
│   │   └── Layout/           # Layout principal avec navigation
│   ├── pages/                 # Pages de l'application
│   │   ├── Home/             # Page d'accueil
│   │   ├── About/            # Page À propos
│   │   └── Contact/          # Page Contact
│   ├── App.css               # Styles globaux (si nécessaire)
│   ├── index.css             # Styles de base
│   └── main.jsx              # Point d'entrée de l'application
├── .gitignore                # Fichiers ignorés par Git
├── .prettierignore           # Fichiers ignorés par Prettier
├── eslint.config.js          # Configuration ESLint
├── prettier.config.js        # Configuration Prettier
├── stylelint.config.js       # Configuration Stylelint
├── vite.config.js            # Configuration Vite
├── index.html                # Template HTML
├── package.json               # Dépendances et scripts
└── README.md                  # Documentation du projet
```

## Technologies

- **React 19.2.0** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **React Router DOM 7.13.0** - Routage côté client pour React
- **Vite 7.2.4** - Outil de build rapide et moderne
- **ESLint 9.39.1** - Linter JavaScript/JSX
- **Prettier 3.8.0** - Formateur de code
- **Stylelint 17.0.0** - Linter CSS

## Responsive Design

| Appareil | Point de rupture | Disposition |
| -------- | ---------------- | ----------- |
| Mobile   | < 768px          | 1 colonne   |
| Tablette | 768px–1024px     | 2 colonnes  |
| Desktop  | > 1024px         | 3 colonnes  |

## Fonctionnalités principales

### Navigation

- Page d'accueil avec liste des logements
- Page À propos
- Page Contact
- Navigation avec React Router
- Layout partagé avec header et navigation

### Structure des composants

- Architecture modulaire avec composants réutilisables
- Séparation claire entre pages et composants
- Styles CSS modulaires par composant
- Exports propres avec fichiers index.js

## Navigateurs supportés

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Navigateurs mobiles

## Accessibilité

- Structure HTML sémantique
- Navigation clavier complète
- Indicateurs de focus visibles
- Contraste conforme WCAG AA
- Alternatives textuelles pour images

## Démarrage

### Prérequis

- Node.js 18+ et npm (ou yarn/pnpm)

### Installation

```bash
git clone https://github.com/Steinshy/Kasa.git
cd Kasa
npm install
```

### Utilisation

#### Mode développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

#### Build de production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`

#### Prévisualisation du build

```bash
npm run preview
```

### Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée un build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run lint:fix` - Corrige automatiquement les erreurs ESLint
- `npm run format` - Formate le code avec Prettier
- `npm run format:check` - Vérifie le formatage sans modifier les fichiers
- `npm run stylelint` - Vérifie les styles CSS avec Stylelint
- `npm run stylelint:fix` - Corrige automatiquement les erreurs Stylelint
- `npm run typecheck` - Vérifie les types TypeScript (si configuré)

## Qualité du code

Le projet utilise plusieurs outils pour maintenir la qualité du code :

- **ESLint** - Détection des erreurs et problèmes de code
- **Prettier** - Formatage automatique du code
- **Stylelint** - Linting des fichiers CSS
- Configuration stricte pour garantir la cohérence du code

## Liens utiles

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

## Licence

Ce projet est réalisé à des fins pédagogiques dans le cadre du parcours OpenClassrooms.

**Copyright 2026 Kasa. Tous droits réservés.**

Ce projet est fourni "tel quel", sans garantie d'aucune sorte, expresse ou implicite.
