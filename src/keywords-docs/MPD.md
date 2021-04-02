---
title: "MPD"
tags:
    - MPD
authors:
    - Alex Rovere
related:
    - MCD
    - MLD
sources:
    - https://www.base-de-donnees.com/mpd/
---

**M**odèle **P**hysique des **D**onnées

Dans la méthodologie Merise, le MPD (Modèle Physique des Données) fait suite au MCD. Ensuite viendra le MLD.

L’étape de création du MPD est presque une formalité comparée à la création du MCD. L’analyste fait évoluer sa modélisation de haut niveau pour la transformer en un schéma plus proche des contraintes des logiciels de bases de données. Il s’agit de préparer l’implémentation dans un SGBDR.

Concrètement, cette étape permet de construire la structure finale de la base de données avec les différents liens entre les éléments qui la composent. Pour la peine, on change aussi de vocabulaire :

-Les entités se transforment en tables ;
-Les propriétés se transforment en champs (ou attributs) ;
-Les propriétés se trouvant au milieu d’une relation génèrent une nouvelle table ou glissent vers la table adéquate en fonction des cardinalités de la relation ;
-Les identifiants se transforment en clés et se retrouvent soulignés. Chaque table dispose d’au minimum 1 clé dite primaire ;
-Les relations et les cardinalités se transforment en champs parfois soulignés : il s’agit de créer des « clés étrangères » reliées à une « clé primaire » dans une autre table.
