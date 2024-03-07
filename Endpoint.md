Endpoints :

GET
- https://pointfinder.alwaysdata.net/testapi : Tester le déploiement de l'API (Code attendu : 200)

POST :
- https://pointfinder.alwaysdata.net/signin : Se connecter avec un login/mail
    Input :{ "auth":"user_test", "password":"test" }
    Status :
        - 200 : Utilisateur connecté
        - 400 : Mot de passe requis 
        - 401 : Mot de passe incorrect
        - 404 : Utilisateur non trouvé  
        - 500 : Erreur serveur 
        - 501 : Utilisateur désactivé

- https://pointfinder.alwaysdata.net/signup : Créer un compte
    Input :
    { "login": "user_test", "password": "test", "mail": "test@mail.com" }
    Status : 
        - 200 : Utilisateur créé
        - 409 : Login déjà utilisé
        - 410 : Mail déjà utilisé
        - 500 : Erreur serveur
        - 501 : Mot de passe valide requis

- https://pointfinder.alwaysdata.net/session : Récupère les informations de l'utilisateur connecté
    Input : { "auth": "user_test" } / { "auth": "test@mail.com" }
    Status :
        - 200 : Utilisateur connecté
        - 404 : Utilisateur non trouvé
        - 500 : Erreur serveur

- https://pointfinder.alwaysdata.net/receiveusers : Récupère tous les utilisateurs (Code attendu : 200)
    Input : { "choice" : 1 }
    Status : 
        - 200 : Retours d'utilisateurs
        - 500 : Erreur serveur
        - 501 : Mauvais choix 
    Choice :
        - 0 : Utilisateurs inactifs
        - 1 : Utilisateurs actifs
        - 2 : Tous les utilisateurs

- https://pointfinder.alwaysdata.net/interets : Récupère les intérêts en fonction du choix
    Input : { "id_type" : 1, "code_postal" : "29200" }
    Status :
        - 200 : Intérêts récupérés
        - 404 : Pas de lieux trouvés
        - 500 : Erreur serveur
    Choix : 
          - 1 : Restaurant 
          - 2 : Sante
          - 3 : Cinema
          - 4 : Parking
          - 5 : Commerces
          - 6 : Station-service
          - 7 : Toilettes
          - 8 : Hotel 

- https://pointfinder.alwaysdata.net/send-reset-password-email : Envoie un mail de réinitialisation de mot de passe
    Input : { "mail" : "test@mail.com }
    Status :
        - 200 : Mail envoyé
        - 404 : Utilisateur non trouvé
        - 500 : Erreur serveur

PUT : 

- https://pointfinder.alwaysdata.net/inactiveuser : Désactive un utilisateur
    Input : { "mail" : "test@mail", "password" : "test" }
    Status :
        - 200 : Utilisateur désactivé
        - 400 : Mot de passe requis
        - 401 : Mot de passe incorrect
        - 404 : Utilisateur non trouvé 
        - 500 : Erreur serveur

- https://pointfinder.alwaysdata.net/activeuser : Active un utilisateur
      Input : { "mail" : "test@mail" }
      Status :
          - 200 : Utilisateur désactivé
          - 404 : Utilisateur non trouvé
          - 500 : Erreur serveur

  - https://pointfinder.alwaysdata.net/updatemail : Met à jour le mail de l'utilisateur
        Input : { "mail" : "test@mail.com", "new_mail" : "test2@mail.com" }
        Status :
            - 200 : Mail mis à jour
            - 404 : Utilisateur non trouvé
            - 500 : Erreur serveur
            - 501 : Mail inchangé          

- https://pointfinder.alwaysdata.net/updatelogin : Met à jour le login de l'utilisateur
      Input : { "mail" : "test@mail.com", "newlogin" : "test2" }
      Status :
          - 200 : Login mis à jour
          - 404 : Utilisateur non trouvé
          - 500 : Erreur serveur

- https://pointfinder.alwaysdata.net/updatepwd : Met à jour le mot de passe de l'utilisateur
      Input : { "mail" : "test@mail.com", "new_pwd" : "test2" }
      Status :
          - 200 : Mot de passe mis à jour
          - 404 : Utilisateur non trouvé
          - 500 : Erreur serveur

- https://pointfinder.alwaysdata.net/changehabilitation : Change le niveau d'habilitation de l'utilisateur
      Input : { "mail" : "test@mail.com", "id_habilitation" : 10 }
      Status :
          - 200 : Habilitation changée
          - 404 : Utilisateur non trouvé
          - 500 : Erreur serveur
      Niveaux d'habilitation : 
          - 10 : Utilisateur
          - 50 : Administrateur

DELETE : 

- https://pointfinder.alwaysdata.net/deleteuser : Supprime un utilisateur
        Input : { "mail" : "test@mail" }
        Status :
            - 200 : Utilisateur supprimé
            - 404 : Pas d'utilisateur en base
            - 500 : Erreur serveur