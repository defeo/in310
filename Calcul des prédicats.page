Le **calcul des prédicats**, ou **logique du premier ordre**, est une [théorie formelle](Logique mathématique) (au sens où il s'agit de manipuler des *formules*) qui modélise le raisonnement mathématique.

Des exemples de théories mathématiques modélisables en logique du premier ordre sont les **entiers naturels** (via les [axiomes de Peano](#système-de-Peano)) ou les mathématiques entières (via les [axiomes de Zermelo-Fraenkel](#système-de-zermelo-fraenkel)). Il existe cependant des limitations bien connues à la possibilité de réaliser ces modélisations, comme l'a démontré Gödel avec ses [théorèmes d'incomplétude](#théorèmes-d'incomplétude-de-Gödel).


# Définitions

On fait comme d'habitude une distinction entre **syntaxe** et **sémantique**. Si la première est à peine plus complexe que la syntaxe du [Calcul des propositions](), la deuxième est beaucoup plus riche, car n'importe quelle structure mathématique peut faire de modèle à la logique du premier ordre.

## Syntaxe

La logique du premier ordre a été conçue pour décrire n'importe quelle structure mathématique, comme par exemple les nombres naturels. Avant de pouvoir énoncer des propriétés (i.e., des théorèmes) d'une structure mathématique, nous devons définir quel est son *langage*, i.e. quelles sont les façons légitimes de  combiner les objets de la structure.

Un **langage** est la donnée des éléments suivants (tous en quantité pas nécessairement finie):

- Des **symboles de constante**, par exemple: $0,1,2,\ldots$.
- Des **symboles de fonction**, par exemple: $f,g,h,\ldots$. À chaque symbole est associé un entier strictement positif appelé **arité de la fonction**; ce nombre indique le nombre d'arguments pris par la fonction.
- Des **prédicats** (ou **symboles de relation**), par exemple: $P,Q,R,\ldots$. À chaque symbole est aussi associé une **arité**, qui peut être dans ce cas positive ou nulle.

Par exemple, le langage de l'arithmétique est constitué de:

- les constantes $0, 1, 2, \ldots$;
- les symboles de fonction $+,-,\times,/$ (tous de arité $2$);
- les relations $=,\le$ (tous de arité $2$).

On peut combiner les symboles d'un langage pour former des **termes**. Pour cela, nous nous donnons un ensemble [dénombrable](Cardinalité) de **variables** $x,y,z,\ldots$. alors un **terme** est

- soit une variable,
- soit un symbole de constante,
- soit l'application d'un symbole de fonction d'arité $n$ à $n$ termes.

Par exemple

$$0+1,\qquad x-3,\qquad (y+5)\times 6$$

sont des termes, mais

$$-5,\qquad x=y,\qquad ++3, xy$$

n'en sont pas. Un terme qui ne contient pas de variables est dit **clos**.

**Remarque**: les parenthèses ne font pas partie du langage. Elles sont simplement là pour rendre les termes non-ambigus, i.e. pour indiquer dans quel ordre les fonctions ont été appliquées pour obtenir le terme.

Une **formule atomique** est un prédicat du langage de arité $n$ appliqué à $n$ termes. Par exemple

$$x=y,\qquad (2+y) = x,\qquad  (0 + 1) = (3 - 2)$$

sont des formules atomiques, mais

$$2+3,\qquad 2 + (y=x), \qquad y=x=z, 0\le 1\le 2$$

n'en sont pas (même si certaines d'entre elles sont des raccourcis communément utilisés).

Finalement nous sommes prêts à définir la syntaxe de la logique du premier ordre. Nous nous donnons les **connecteurs logiques suivants**

- Les connecteurs du [Calcul des propositions](): $\wedge,\vee,\neg,\to,\ldots$;
- Les **quantificateurs**
    - $\forall$, qui se lit *pour tout*,
    - $\exists$, qui se lit *il existe*.

Une **formule du premier ordre** (ou **formule bien formée**) est:

- soit une formule atomique,
- soit, si $\phi$ et $\psi$ sont deux formules du premier ordre, l'une des expressions suivantes:
    - $\phi\wedge\psi$, ou $\phi\vee\psi$, ou $\neg\phi$, ou $\phi\to\psi$, etc.,
    - $\exists x. \phi$, ou $\forall x. \phi$, pour une variable quelconque $x$.

Voici des exemples de formules:

$$\forall x.(x\le 0\vee x=0),\qquad (\exists x.x+2=0)\wedge(\exists y.z=2)$$

et des non-exemples:

$$\forall x\le 0. x=y,\qquad \exists x.x,\qquad (\exists x.x=y)+1$$

(même si la première est un raccourci courant).


## Sémantique

à venir en 2012-2013


# Théorie de la preuve

La théorie de la preuve de la logique du premier ordre n'est pas plus compliquée que celle du [Calcul des propositions](): la définition de **vérité** est similaire, et les **systèmes de preuve** sont identiques (après ajout de quelques règles d'inférence).

## Vérité

à venir en 2012-2013

## Preuve

à venir en 2012-2013



# Pour approfondir

## Système de Peano

## Système de Zermelo-Fraenkel

## Théorèmes d'incomplétude de Gödel
