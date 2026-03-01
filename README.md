Application Web Pokedex :

    Une application web Pokédex interactive développée avec Next.js, React, TypeScript et Material-UI, permettant de consulter tous les Pokémon, filtrer par type, visualiser les détails et changer la langue des noms et types.



FONCTIONNALITES :

- Affichage de tous les Pokémon sous forme de cartes avec :

    Numéro ID
    Nom traduit selon la langue sélectionnée
    Image
    Types avec couleur spécifique

- Recherche par nom
- Filtre par type
- Détail Pokémon avec :
    Nom, image, ID
    Taille (m) et poids (kg)
    Types
    Bouton MOVES affichant tous les mouvements

- Sélecteur de langue disponible sur toutes les pages (français, anglais, japonais, etc.)
- Page 404 personnalisée avec image et bouton de retour à l'accueil
- Loader animé pendant le chargement des données
- Compatible avec React Router pour navigation SPA
- Déployable et déployé sur Vercel




INSTALLATION :

Cloner le dépôt :

git clone https://github.com/Nounouxxx/pokedex.git
cd pokedex

Installer les dépendances : 
    npm install

Lancer le serveur en développement : 
    npm run dev (en local)
ou 
    $env:PORT=Numéro_du_port; npm run dev
pour sélectionner un numéro de port précis

Pour la production : 
    npm run build (pour créer le dossier .next compilés si non présent)
    npm run start (pour lancer le serveur de production)

Ouvrir http://localhost:3000 (par défault) dans votre navigateur.





STRUCTURE DU PROJET :

pokedex/
├── public/                 # Images et assets publics (logo, loader GIF, 404 image)
├── src/
│   ├── components/         # Composants réutilisables (PokemonCard, Header, Loader, etc.)
│   ├── context/            # Contexte pour la gestion de la langue
│   ├── pages/              # Pages principales (Home, PokemonDetail, 404)
│   ├── router/             # Router React Router
│   ├── styles/             # Styles globaux
│   └── types/              # Types TypeScript
├── package.json
├── tsconfig.json
└── next.config.js