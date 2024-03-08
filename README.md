Ce projet nommé Pointfinder a été réalisé par 4 étudiants du domaine professionnel "Génie Logiciel" de l'ISEN Yncréa Ouest :

- Romain TAMIC (backend)
- Marion DEFFEE (frontend et PO)
- Delphine ALLANO (mobile)
- Térence ROUSIC (frontend)

Ce projet est une application web et mobile conçue pour aider les utilisateurs à découvrir des points d'intérêt autour d'eux en fonction de leurs préférences personnelles.

Notre application a été déployé avec plusieurs technologies :

- L'application mobile a été conçue sur Android Studio, dans le langage Java, avec Android 9 et téléphone Crosscall X4
- L'application web a été conçue en VueJS et JavaScript, en intégrant la carte OpenStreetMap et des modules Leaflet. Puis, elle a été déployé sur des serveurs AlwaysData.

Versions des technologies utilisées :

- VueJS 3.3.9
- NodeJS 21.6.0
- Express 4.18.2
- MariaDB 3.2.2
- Bycrypt 5.1.1
- nodejs-nodemailer-outlook 1.2.4

Plusieurs technologies tierces ont aussi été utilisés pour ce projet :

- FileZilla : ce logiciel permet de transférer nos fichiers sur les serveurs AlwaysData
- Insomnia : ce logiciel a permis de tester les endpoints du backend de manière intuitive
- Cypress : ce logiciel a permis de tester le front et de créer des tests unitaires
- JMerise : ce logiciel a permis de construire la base de données via un MCD et de générer un script de base pour pouvoir le tester localement
- MAMP/WAMP : ce logiciel a permis de tester localement la base de données

Les données utilisées pour alimenter la base de données proviennent de GeoMineData, et ont été intégrés par le backend via un programme en Python.

Dans le dossier 'Documentation' se trouvent les livrables et supports utiles au projet, ainsi qu'un README décrivant les endpoints et un README décrivant les fonctionnalités du frontend.

Concernant le déploiement de l'application : 
- le backend 'server.js' doit être transférer dans le dossier 'www' à la même racine que le dossier 'package.json'. Le serveur est lancé via AlwaysData via une tâche planifiée qui lance la commande 'node server.js'
- le frontend doit être build localement afin de construire le dossier 'dist' qui sera transférer sur les serveurs AlwaysData. Le fichier 'App.vue' est placé à la racine du dossier 'src' et les autres vues dans le dossier 'views'

Guide d'utilisation :
- Allez sur le site : https://pointfinder.alwaysdata.net
- Cliquez sur le bouton 'Access to the application'
- Plusieurs cas de figure :
  - Si vous avez un compte, vous pouvez entrez vos identifiants
  - Si vous avez un compte, mais que votre mot de passe a été oublié, cliquez sur 'Forgot password', un mail va vous être envoyé avec votre nouveau mot de passe
  - Si vous n'avez pas de compte, cliquez sur 'Sign-up' et entrez votre username, e-mail, et votre password
- Une pop-up va apparaitre pour vous demander votre position actuelle, acceptez pour pouvoir vous localiser
- Vous pouvez choisir jusqu'à deux centres d'intérêt maximum pour afficher les balises de la ville de Brest
- Si un centre d'intérêt vous plait, cliquez sur sa balise pour pouvoir afficher l'itinéraire pour y accéder, les détails de ce point s'affichent sur la gauche
- Pour accéder à votre profil, mettez votre souris sur l'icône en haut à droite
- En cliquant sur l'icône 'Profil', vous pouvez accéder aux détails de votre profil, sinon, vous pouvez vous déconnecter avec l'icône de déconnexion
- Sur votre profil, l'affichage dépend de votre niveau d'habiliation :
  - Administrateur : vous pouvez voir les différents profils inscrits en base et avez la main pour éditer ces derniers au besoin, ou les désactiver (Soyez sûrs de vos modifications toutefois)
  - Utilisateur : vous pouvez modifier vos identifiants ou désactiver votre compte (il faudra contacter un administrateur pour le réactiver)       
