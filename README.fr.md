# Kasa - Plateforme de location d'appartements

**Langues:** [English](README.md) | [Français](README.fr.md)

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7.13-CA4245?logo=react-router&logoColor=white&style=flat-square)](https://reactrouter.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC3?logo=pwa&logoColor=white&style=flat-square)](https://web.dev/progressive-web-apps/)
[![Node](https://img.shields.io/badge/Node-18+-339933?logo=node.js&logoColor=white&style=flat-square)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-Steinshy%2FKasa-181717?logo=github&style=flat-square)](https://github.com/Steinshy/Kasa)

Plateforme web moderne pour la location d'appartements entre particuliers. Découvrez des propriétés de qualité avec des descriptions détaillées, des galeries photo et toutes les informations nécessaires pour prendre une décision éclairée.

## Liens rapides

- **Démo en direct:** [https://steinshy.github.io/OC-Kasa/](https://steinshy.github.io/OC-Kasa/)
- **Dépôt:** [https://github.com/Steinshy/Kasa](https://github.com/Steinshy/Kasa)

## Fonctionnalités

- Annonces complètes avec descriptions détaillées
- Pages individuelles pour chaque propriété avec galeries d'images
- Navigation fluide avec React Router 7
- Design entièrement responsive (mobile, tablette, desktop)
- Progressive Web App avec support hors ligne
- Stratégies de mise en cache avancées (Google Fonts, API, images)
- Gestion complète des erreurs avec pages 404
- TypeScript pour la sécurité des types
- Pipeline de build moderne avec Vite

## Structure du projet

```text
Kasa/
├── public/                     # Ressources statiques
│   ├── favicon.*              # Fichiers favicon
│   ├── apple-touch-icon.png   # Icône écran d'accueil iOS
│   ├── site.webmanifest       # Manifeste PWA
│   ├── pwa-*.png              # Icônes PWA
│   └── web-app-manifest-*.png # Icônes d'application web
├── src/
│   ├── components/            # Composants réutilisables
│   │   ├── Card/             # Carte de location
│   │   ├── Collapse/         # Sections réductibles
│   │   ├── Gallery/          # Diaporama d'images
│   │   ├── Host/             # Profil du propriétaire
│   │   ├── Layout/           # Wrapper layout principal
│   │   ├── Loader/           # Spinner de chargement
│   │   ├── Rating/           # Affichage étoiles
│   │   └── Tags/             # Badges de tags
│   ├── helpers/              # Fonctions utilitaires
│   │   └── validator.tsx     # Validation de données
│   ├── hooks/                # Hooks React personnalisés
│   ├── pages/                # Pages de routes
│   │   ├── Home/            # Page annonces
│   │   ├── Rental/          # Page détails
│   │   ├── About/           # Page À propos
│   │   └── NotFound/        # Page 404
│   ├── types/               # Types TypeScript
│   ├── utils/               # Configuration & API
│   └── main.tsx             # Point d'entrée application
├── .lighthouserc.json        # Configuration Lighthouse CI
├── eslint.config.js          # Configuration ESLint
├── vite.config.ts            # Configuration Vite
├── tsconfig.json             # Configuration TypeScript
├── index.html                # Template HTML
├── package.json              # Dépendances & scripts
└── README.md                 # Fichier documentation
```

## Stack technologique

| Catégorie             | Technologie             | Version |
| --------------------- | ----------------------- | ------- |
| Framework             | React                   | 19.2+   |
| Langage               | TypeScript              | 5.9+    |
| Outil de build        | Vite                    | 7.3+    |
| Routage               | React Router            | 7.13+   |
| Icônes                | lucide-react            | 0.575+  |
| Linting               | ESLint                  | 9.39+   |
| Formatage             | Prettier                | 3.8+    |
| Linting CSS           | Stylelint               | 17.4+   |
| PWA                   | Workbox/vite-plugin-pwa | 7.0+    |
| Vérification de types | Compilateur TypeScript  | 5.9+    |

## Design responsive

| Appareil | Point de rupture | Disposition |
| -------- | ---------------- | ----------- |
| Mobile   | < 768px          | 1 colonne   |
| Tablette | 768px–1024px     | 2 colonnes  |
| Desktop  | > 1024px         | 3 colonnes  |

## Fonctionnalités principales

### Navigation

- Page d'accueil avec liste des locations
- Pages détail de chaque propriété
- Page À propos avec sections réductibles
- Page erreur 404
- React Router v7 avec support SSR
- Layout partagé avec navigation en en-tête

### Architecture des composants

- Composants modulaires et réutilisables
- Séparation claire entre pages et composants
- Styles SCSS par composant
- Exports barrel avec fichiers index
- Hooks personnalisés pour la logique de navigation
- Pas de HOCs (remplacés par gestion de données)

## Support des navigateurs

| Navigateur          | Version            |
| ------------------- | ------------------ |
| Chrome              | 90+                |
| Firefox             | 88+                |
| Safari              | 14+                |
| Edge                | 90+                |
| Navigateurs mobiles | Dernières versions |

## Accessibilité

- Structure HTML sémantique
- Navigation complète au clavier
- Indicateurs de focus visibles
- Conformité au contraste WCAG AA
- Texte alternatif pour les images
- Attributs ARIA appropriés
- Utilisation accessible des couleurs

## Démarrage

### Prérequis

- Node.js 18+
- npm 9+ (ou yarn/pnpm)

### Installation

```bash
git clone https://github.com/Steinshy/Kasa.git
cd Kasa
npm install
```

### Développement

```bash
npm run dev
```

L'application s'exécute sur `http://localhost:5173` avec rechargement à chaud.

### Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans le dossier `dist/`.

```bash
npm run preview
```

Prévisualiser le build de production localement sur le port 3000.

### Commandes disponibles

| Commande                | Objectif                                                |
| ----------------------- | ------------------------------------------------------- |
| `npm run dev`           | Démarrer le serveur de développement sur le port 5173   |
| `npm run build`         | Créer un build de production optimisé                   |
| `npm run start`         | Servir le build de production (build requis en premier) |
| `npm run preview`       | Prévisualiser le build de production sur le port 3000   |
| `npm run lint`          | Vérifier le code avec ESLint                            |
| `npm run lint:fix`      | Corriger automatiquement les violations ESLint          |
| `npm run format`        | Formater le code avec Prettier                          |
| `npm run format:check`  | Vérifier le formatage sans modifications                |
| `npm run stylelint`     | Linter les fichiers CSS                                 |
| `npm run stylelint:fix` | Corriger automatiquement les erreurs CSS                |
| `npm run typecheck`     | Vérifier les types TypeScript                           |
| `npm run analyze`       | Analyse de la taille du bundle (génère dist/stats.html) |
| `npm run lighthouse`    | Exécuter l'audit Lighthouse CI                          |
| `npm run clean`         | Supprimer les dossiers dist/ et .lighthouseci/          |
| `npm run update:check`  | Vérifier les dépendances obsolètes                      |

## Qualité du code

Le projet applique la qualité du code par plusieurs outils :

| Outil          | Objectif                      | Commande             |
| -------------- | ----------------------------- | -------------------- |
| **ESLint**     | Linting JavaScript/TypeScript | `npm run lint`       |
| **Prettier**   | Formatage du code             | `npm run format`     |
| **Stylelint**  | Linting CSS                   | `npm run stylelint`  |
| **TypeScript** | Sécurité des types            | `npm run typecheck`  |
| **Lighthouse** | Audits de performance         | `npm run lighthouse` |

Une configuration stricte garantit un code cohérent et maintenable dans tout le projet.

## Fonctionnalités de performance

- Séparation du code CSS avec bundles séparés par composant
- Chargement paresseux des images et optimisation
- Service Worker avec mise en cache hors ligne
- Compression Gzip pour les transferts réseau
- Minification du code avec esbuild
- Tree-shaking pour supprimer le code inutilisé

## Fichiers de configuration clés

- `eslint.config.js` - Configuration flat ESLint
- `vite.config.ts` - Configuration Vite avec support PWA
- `tsconfig.json` - Options du compilateur TypeScript
- `.lighthouserc.json` - Paramètres Lighthouse CI

## Ressources

- [Documentation React](https://react.dev/)
- [React Router v7](https://reactrouter.com/)
- [Documentation Vite](https://vitejs.dev/)
- [Manuel TypeScript](https://www.typescriptlang.org/docs/)
- [Guide Web.dev PWA](https://web.dev/progressive-web-apps/)

## Licence

Projet pédagogique pour le cursus OpenClassrooms.

Copyright 2026 Kasa. Tous droits réservés.

Ce projet est fourni "tel quel" sans aucune garantie, expresse ou implicite.
