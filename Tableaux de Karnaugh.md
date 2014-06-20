---
layout: post
title: Tableaux de Karnaugh
---

La méthode des tableaux de Karnaugh est une technique de simplification de formules booléennes en *forme disjonctive*, le but étant de minimiser le nombre de composantes d'un circuit électronique donné. Cette méthode est peu pratique pour simplifier des circuits à plus de quatre entrées, son intérêt est donc purement historique et pédagogique, la simplification de circuits étant aujourd'hui réalisée par ordinateur à l'aide de l'[algorithme de Quine-McCluskey](http://fr.wikipedia.org/wiki/M%C3%A9thode_de_Quine-Mc_Cluskey) et d'[heuristiques](http://en.wikipedia.org/wiki/Espresso_heuristic_logic_minimizer).

## Définitions

Une **formule booléenne** est une formule du [calcul propositionnel classique](Calcul des propositions), i.e. une formule obtenue en combinant

- des *formules atomiques*: $$A, B, \ldots$$,
- les opérateurs logiques: $$\vee, \wedge, \neg, \to, \ldots$$.

En théorie des circuits on s'intéresse uniquement à l'aspect [sémantique](Calcul des propositions#sémantique) des formules, i.e. à leurs tables de vérité. On rappelle que deux formules sont [(sémantiquement) **équivalentes**](Calcul des propositions#vérité) si elles ont la même table de vérité. Puisque on s'intéresse exclusivement à l'équivalence sémantique, et qu'on sait que la conjonction et la disjonction sont associatives, i.e. que

$$(A\wedge B)\wedge C \equiv A\wedge (B\wedge C),\qquad
(A\vee B)\vee C \equiv A\vee (B\vee C),$$

on évite dorénavant de noter les parenthèses qui par associativité conduiraient à des formules équivalentes.

On appelle **clause conjonctive** une conjonction de zéro ou plusieurs formules atomiques et formules atomiques niées, par exemple $$A\wedge B \wedge \neg C$$. Par convention, la conjonction vide est la formule qui vaut toujours vrai.

On appelle **clause disjonctive** une disjonction de zéro ou plusieurs formules atomiques et formules atomiques niées, par exemple $$A\vee B \vee \neg C$$. Par convention, la disjonction vide est la formule qui vaut toujours faux.

Une formule en **forme normale disjonctive** est une disjonction de zéro ou plusieurs clauses conjonctives, par exemple

$$(A\wedge B \wedge\neg C) \vee (A\wedge \neg B).$$

Une formule en **forme normale conjonctive** est une conjonction de zéro ou plusieurs clauses disjonctives, par exemple

$$(A\vee B \vee \neg C) \wedge (A\vee \neg B).$$

On adopte les mêmes conventions qu'auparavant sur la conjonction et la disjonction vide.

**Exercice:** montrer que toute formule du calcul propositionnel est équivalente à une  formule en forme disjonctive et à une formule en forme conjonctive.

Le but des tableaux de Karnaugh est de trouver la formule la forme normale disjonctive la plus "courte" possible équivalente à une formule donnée. Il n'est pas difficile de modifier la méthode pour donner la forme normale conjonctive la plus courte.


## Notation

On préfère en théorie des circuits noter les opérateurs logiques de la façon suivante:

- La négation est notée $$\bar{A}$$ plutôt que $$\neg A$$.
- La disjonction est notée $$A+B$$ plutôt que $$A\vee B$$; une disjonction de plusieurs formules $$\phi_1,\phi_2,\ldots$$ peut être notée $$\sum_i \phi_i$$.
- La conjonction est notée $$A\cdot B$$ ou $$AB$$, plutôt que $$A\wedge B$$; une conjonction de plusieurs formules $$\phi_1,\phi_2,\ldots$$ peut être notée $$\prod_i \phi_i$$.

D'autres opérateurs booléens, tel le NAND ou le XOR, peuvent être employés, mais nous n'allons pas en parler.

Afin de réduire le nombre de parenthèses, deux autres conventions sont normalement adoptées:

- On omet les parenthèses partout où les différents parenthèsages conduisent à des formules équivalentes par associativité, ainsi on note $$ABC$$ plutôt que $$(AB)C$$ ou $$A(BC)$$, et $$A+B+C$$ plutôt que $$(A+B)+C$$ ou $$A+(B+C)$$.
- On donne une priorité plus grande à l'opérateur $$\cdot$$ qu'à l'opérateur $$+$$ (comme on le fait en arithmétique); ainsi $$A+BC$$ doit être lu comme $$A+(BC)$$ et non pas comme $$(A+B)C$$. Cette dernière convention est particulièrement adaptée à l'écriture en forme disjonctive.


## La méthode de Karnaugh à deux variables

On commence par décrire la méthode pour des formules à deux variables $$A$$ et $$B$$. On commence par écrire la table de vérité de la formule de départ dans un tableau qui porte une variable en ligne et une en colonne.

Par exemple, pour la formule $$AB+\bar{A}B+A\bar{B}$$ on a la table

|            |$$\bar{B}$$|  $$B$$
|$$\bar{A}$$ |     0     |   1
|      $$A$$ |     1     |   1

On s'intéresse seulement aux 1 présents dans la table et on essaye de les regroupe par paquets. Un paquet doit respecter les règles suivantes:

- doit contenir un nombre de 1 égal à une puissance de 2,
- doit être un rectangle,
- ne doit pas contenir de 0.

Les paquets peuvent se chevaucher, le but est de couvrir tous les 1 qui apparaissent dans la table. Dans l'exemple précédent, on peut former trois paquets de taille 1, ou bien deux paquets de taille 2 se chevauchant en $$AB$$ (ou encore d'autre combinaisons plus baroques).

Maintenant on traduit les paquets en une forme normale disjonctive. À chaque paquet correspond la table de vérité d'une unique clause conjonctive: plus grand le paquet, plus petite  la clause. La formule d'origine est finalement équivalente à la disjonction de chacun des paquets: moins de paquets, moins de disjonctions. 

Ainsi pour obtenir la forme disjonctive minimale il faut former le moins de paquets les plus grands possibles. Dans l'exemple, en choisissant trois paquets de taille 1 on se réduit à la formule d'origine, alors qu'en choisissant deux paquets de taille 2 on en a un qui correspond à la clause $$A$$ (équivalente à $$A\bar{B}+AB$$) et un qui correspond à la clause $$B$$ (équivalente à $$\bar{A}B+AB$$); la formule est donc finalement équivalente à $$A+B$$ (ce qu'on aurait bien pu deviner dès le départ).


## La méthode de Karnaugh à quatre variables

La méthode à quatre variables et légèrement plus complexe que celle à deux variables, comportant deux subtilités supplémentaires. La méthode pour trois variables est analogue et on ne la traite pas ici.

Comme auparavant, on écrit la table de vérité dans un tableau avec autant de lignes que de colonnes. On fait attention dans cette phase à ordonner les lignes (et les colonnes) en sorte qu'une seule variable change de valeur entre une ligne et la suivante (et une colonne et la suivante).

Voici un exemple de tableau de Karnaugh à quatre variables $$A,B,C,D$$.


|                     |$${\bar{C}\bar{D}}$$ | $${\bar{C}D}$$ | $${CD}$$ | $${C\bar{D}}$$
|-|:-:|:-:|:-:|:-:
|$${\bar{A}\bar{B}}$$ |          0          |      1         | 1        |  0
|      $${\bar{A}B}$$ |          1          |      0         | 0        |  1
|            $${AB}$$ |          1          |      0         | 0        |  0
|      $${A\bar{B}}$$ |          0          |      1         | 1        |  0


Maintenant on forme des paquets de 1 comme pour le cas à deux variables, mais on s'autorise en plus à avoir des paquets qui *s'enroulent* autour des bords gauche-droite et haut-bas. Dans l'exemple ci-dessus, la façon optimale de découper le tableau consiste à former les paquets suivants:

- Les deux 1 en première ligne avec les deux 1 en dernière ligne, ce qui forme un paquet de 4. La table de vérité de ce paquet est $$\bar{A}\bar{B}\bar{C}D + \bar{A}\bar{B}CD + A\bar{B}\bar{C}D + A\bar{B}CD$$, ce qui est équivalent à la clause conjonctive $$\bar{B}D$$.
- Les deux 1 en première colonne, ce qui est équivalent à $$B\bar{C}\bar{D}$$.
- Le 1 en dernière ligne avec le 1 en première ligne et deuxième colonne, ce qui est équivalent à $$\bar{A}B\bar{D}$$.

En conclusion le tableau de l'exemple est équivalent à la formule $$\bar{B}D + B\bar{C}\bar{D} + \bar{A}B\bar{D}$$.

Remarquez que dans la méthode de Karnaugh l'ordre des variables ne compte pas: on arriverait au même résultat en permutant les variables et/ou les négations. Il est par contre fondamental qu'entre deux lignes (et deux colonnes) successives (y compris en *enroulant* autour des bords) une seule variable change de valeur: sans cela, les paquets rectangulaires ne correspondraient pas à des clauses conjonctives.
