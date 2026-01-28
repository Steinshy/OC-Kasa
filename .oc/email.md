# Brief Projet Kasa

## Email 1 : Brief refonte site Kasa

> **De :** Laura
> **À :** Moi

Hello,

Bienvenue ! Tu vas pouvoir nous aider à donner vie à un chantier sur lequel on travaille depuis plusieurs mois.

### Ton objectif

Démarrer le projet React et développer l'ensemble de l'application (composants React, routes React Router), en suivant les maquettes Figma (responsives !) et toutes les infos données ci-dessous. Et ce, avec un code de qualité !

### Back-end / data

Le recrutement de la personne en charge du back-end n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans ce fichier JSON pour que tu puisses construire le Front qui correspond.

### Contraintes techniques

Tu trouveras les coding guidelines de Kasa ici. Comme tu le verras, nous utilisons habituellement Vite pour créer les applications React, mais tu peux utiliser un autre bundler si tu préfères.

Voilà, j'espère que ce petit récapitulatif t'aura donné suffisamment de pistes pour aborder sereinement tes premiers jours chez nous.

Très bonne journée à toi !

*Laura*

---

*Plus tard dans la journée, vous recevez un e-mail de Paul, le designer, qui vous donne plus d'informations sur le design et les fonctionnalités du site.*

---

## Email 2 : Fonctionnalité et design

> **De :** Paul
> **À :** Moi

Salut,

Bienvenue parmi nous ! Laura m'a dit de te briefer sur le design de la nouvelle version du site. Voici les infos clés.

### Design

- Voici les maquettes sur Figma pour le design d'interface. J'ai l'habitude de travailler avec la logique de composants sur Figma ; Sandra m'a dit que ça te faciliterait le travail sur React.
- Tu trouveras toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer sur la ressource souhaitée et de faire "Exporter" au format voulu.
- Sur les vignettes des logements, pour les images de couverture, j'ai mis un rectangle orange que tu peux remplacer par l'image correspondante.

Pour avoir un rendu le plus réaliste possible de l'application, utilise les prototypes du site disponibles ici. Ils te permettront de voir les animations attendues sur les menus déroulants (Collapse).

### Contraintes fonctionnelles

Quelques précisions sur les fonctionnalités du site :

#### Galerie (composant Gallery)

- Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
- S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l'image.

#### Collapse

- Par défaut, les Collapses sont fermés à l'initialisation de la page.
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
- Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

---

Bon courage pour le développement, j'ai hâte de voir ce que ça va donner !

*Paul*
