---
layout: post
title: Logique mathématique
---

Son étude remonte à la fin du XIXème siècle, avec les travaux de Boole,
De Morgan et Frege; mais le grand essor de la logique a eu lieu au
tournant du XXème siècle, grâce aux travaux de Hilbert, Russel,
Whitehead et puis Gödel.

## Théories formelles

Le concept de *théorie formelle* est né au début du XXe siècle, lorsque
les mathématiciens ont commencé à s’interroger sur le fondement des
Mathématiques.

De façon générale, un *système formel* est une modélisation du langage
du mathématicien, ou plus souvent d’une petite partie de celui-ci. Sa
*théorie formelle* est l’ensemble de règles qui dictent quelles sont les
façons possibles de manipuler les objets du système. Un système formel
est en général composé d’une liste de **symboles**, d’une **syntaxe**
qui dicte quelles sont les façons admissibles de combiner les symboles,
et d’une **sémantique** ou **interprétation** qui détermine la façon
dont les symboles doivent être interprétés par des objets mathématiques
abstraits. Ces trois composants sont bien indépendants, et il est
courant d’obtenir des théories formelles légèrement différentes en
changeant tel ou tel détail de la sémantique ou de la syntaxe, par
exemple. On appelle **formule** toute suite de symboles qui respecte les
règles de la syntaxe.

Les [systèmes de numération](Représentation des entiers) et les
*expressions arithmétiques* sont des exemples de systèmes formels très
simples. Par exemple, le système de numération en base cinq, est
constitué des éléments suivants.

-   Les symboles : 0, 1, 2, 3 et 4.
-   Une seule règle de syntaxe : les symboles peuvent être juxtaposés
    pour former pour former un nombre, pourvu qu’on ne commence pas par
    le symbole 0. Ex. : 1234 est admissible, mais 0023 ne l’est pas.
-   L’interprétation usuelle qui associe à une suite de chiffre le
    nombre correspondant. Ex. : à 123 il est associé le nombre
    **trente-huit**.

Comme dit plus haut, ces trois éléments sont indépendants : en changeant
la liste des symboles et la sémantique, on obtient un système de
numération différent, où à 123 sera associé un nombre différent, par
exemple **cent-vingt-trois**.

Le système des expressions arithmétiques est obtenu à partir d’un
système de numération en ajoutant les éléments suivants.

-   Les symboles : $$+, -, \times, \div, \mod, =, (, )$$.
-   Les règles de formation usuelle qui disent qu’il est correct
    d’écrire $$123+345=678$$, mais qu’il est incorrect d’écrire
    $$12++45-($$.
-   L’interprétation usuelle qui à + associe le concept d’addition, à -
    celui de soustraction, etc.

Il est important de remarquer que la syntaxe est complétement ignorante
de l’interprétation des formules, et qu’en particulier elle ne dit rien
de la vérité ou de la fausseté de celles-ci. Par exemple, la formule
$$1+1=3$$ est **syntaxiquement correcte**, tout en étant fausse dans
toutes les interprétations possibles.

À nouveau, en changeant la base du système de numération sous-jaceant,
on change l’interprétation des formules sans toucher à la syntaxe. Ainsi
$$5+5=10$$ sera vrai en base dix, mais faux en base six.

**Note :** La frontière entre la syntaxe et la sémantique peut être
floue. Par exemple, puisque les quatre opérations sont des procédés
*algorithmiques*, il serait possible d’inclure les règles de l’addition,
de la soustraction, etc. dans la syntaxe, en interdisant ainsi d’écrire
des égalités fausses. Ce choix n’est en général pas le bon, car une
théorie formelle sert justement à étudier la vérité et la fausseté des
formules.

Le [Calcul des proposition](Calcul des propositions) et le
[Calcul des prédicats](Calcul des prédicats) sont d’autres exemples
plus avancés (et plus intéressants) de systèmes formels.

#### Du bon usage des parenthèses

Les parenthèses $$($$, $$)$$ jouent un rôle fondamental dans beaucoup de
théories formelles, où elles sont normalement utilisées pour indiquer
l’ordre d’application des opérateurs. Par exemple, il est bien connu que
dans la théorie des expressions

$$(1+2)\times 3$$

et

$$1+(2\times 3)$$

sont des formules syntaxiquement et sémantiquement différentes. Pour
compliquer les choses, il est bien connu que

$$1+2\times 3$$

est équivalent à la deuxième formule ci-dessus. Mais cette équivalence,
se situe-t-elle au niveau syntaxique, ou bien au niveau sémantique ?
C’est à dire, s’agit-il de la même formule écrite de deux façons
différentes, ou bien s’agit-il de deux formules différentes ayant la
même interprétation ?

Différents auteurs appliquent des conventions différentes. Telle que
nous l’avons présentée plus haut, la théorie des expressions inclut les
parenthèses parmi ses symboles. Les trois formules sont donc
syntaxiquement différentes, et leur équivalence n’a de sens qu’au niveau
de la syntaxe.

Cependant dans le reste du wiki nous allons adopter une convention plus
souple, qui délègue au niveau de la syntaxe ce genre d’équivalences. En
gros, nous allons imposer que toute formule soit écrite avec le plus de
parenthèses possibles.

Nous allons éliminer les parenthèses de la liste des symboles du
système, et nous allons supposer que toute formule nous est donnée
implicitement avec son **arbre de formation**, c’est à dire avec la
liste des règles syntaxiques nécessaires pour la former. Ceci est
analogue à la façon dont les compilateurs des langages de programmation
interprètent les programmes (une technique appelée *syntax driven
analysis*).

Par exemple, la règle syntaxique concernant le symbole + nous dit que si
$$A$$ et $$B$$ sont deux formules, alors $$A+B$$ est aussi une formule. En
utilisant deux fois cette règle, on peut former, par exemple, les deux
formules

$$
\begin{array}{rrrlll}
&1&+&1&+&1\\
&&\swarrow&&\searrow\\
&1+1&&&&1\\
&\swarrow\searrow\\
1&&1
\end{array}
$$

et

$$
\begin{array}{rrrlll}
1&+&1&+&1\\
&\swarrow&&\searrow\\
1&&&&1+1&\\
&&&&\swarrow\searrow\\
&&&1&&1
\end{array}
$$

Il est pratique de représenter les deux formules ci-dessus par $$(1+1)+1$$
et $$1+(1+1)$$ respectivement, mais dans ce cas le parenthèses ne font
plus partie des symboles admissibles : elles sont là pour mettre en
évidence la structure syntaxique des formules.

Cependant, il est souvent fastidieux et peu intéressant de noter toutes
les parenthèses. Par exemple nous avons maintenant deux façons d’écrire
le nombre $$123$$, à savoir $$(12)3$$ et $$1(23)$$. Puisque notre sémantique
ne fait pas de distinction entre les deux arbres de formation, nous ne
noterons pas les parenthèses dans ce cas.

Une autre convention adoptée souvent pour réduire le nombre de
parenthèses consiste à assigner une *priorité* par défaut aux
opérateurs. Ainsi il est bien connu que la formule $$1+2\times 3$$ est à
lire comme $$1+(2\times 3)$$ et non pas comme $$(1+2)\times 3$$. De la même
façon, la syntaxe peut être utilisée pour interdire une formule comme
$$(1+2=3)\times 4$$ et d’autre formules qu’on n’a pas envie de considérer
au niveau de la sémantique.

Pour tous ces détails, nous allons faire appel à l’intuition et au bon
sens du lecteur. Une étude détaillée de la syntaxe des systèmes (ou
langages) formels sera abordée dans d’autres cours, lorsque le concept
de *grammaire régulière* sera introduit.


## Syntaxe, sémantique, métalogique

Voir [Calcul des propositions](Calcul des propositions),
[Calcul des prédicats](Calcul des prédicats).


## Théorie de la preuve

Voir [Théorie de la preuve](Théorie de la preuve).


## Théories axiomatiques

### Système de Peano

### Système de Zermelo-Fraenkel

### Théorèmes d'incomplétude de Gödel
