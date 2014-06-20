---
layout: post
title: Combinaison
---

Une combinaison est une façon de choisir un certain nombre d'éléments parmi un ensemble plus grand; autrement dit, une combinaison est un [sous-ensemble](Ensemble) d'un ensemble fini. Le mot *combinaison* est souvent préféré à *sous-ensemble* dans les contextes (par exemple, en combinatoire ou en probabilités) où l'on s'intéresse à compter le nombre de combinaisons différentes.

## Définition et notation

Soit $$A$$ un ensemble de [cardinalité](Cardinalité) $$n$$ et soit $$k$$ un entier naturel. Une **$$k$$-combinaison** est un [sous-ensemble](Ensemble#sous-ensembles) de $$A$$ de [cardinalité](Cardinalité) $$k$$.

Le nombre de $$k$$-combinaisons d'un ensemble $$n$$ est noté $$\binom{n}{k}$$, ou $$C_n^k$$, ce qui se lit *$$k$$ parmi $$n$$*. La valeur $$\binom{n}{k}$$ est appelée le $$(n,k)$$-ième **coefficient binomial**.


## Récurrence fondamentale

Il y a une unique $$0$$-combinaison et une unique $$n$$-combinaison, constituée respectivement par l'ensemble vide et $$A$$ tout entier. On en déduit

$$\binom{n}{0} = \binom{n}{n} = 1$$

pour tout entier naturel $$n$$. Par convention on étend $$\binom{n}{k}$$ à des valeurs de $$k$$ négatives ou supérieures à $$n$$ en posant

$$\binom{n}{k} = 0 \qquad$$

si $$k < 0$$ ou  $$k > n$$.

Pour toutes les autres valeurs du coefficient binomial, on prouve aisément la récurrence suivante:

$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}.$$

**Preuve:** Soit $$a\in A$$ un élément quelconque, on compte d'abord les $$k$$-combinaisons contenant $$a$$. Si une $$k$$-combinaison contient $$a$$, ses autres $$k-1$$ éléments appartiennent à la [différence](Ensemble#différences) $$A\setminus a$$ et forment donc une $$(k-1)$$-combinaison de $$A\setminus a$$. Comme à chaque $$(k-1)$$-combinaison de $$A\setminus a$$ correspond une unique $$k$$-combinaison de $$A$$ contenant $$a$$, ces combinaisons sont en nombre $$\binom{n-1}{k-1}$$.

On compte maintenant les combinaisons ne contenant pas $$a$$. Une telle $$k$$-combinaison contient $$k$$ éléments appartenant à $$A\setminus a$$, il y a donc $$\binom{n-1}{k}$$ de telles combinaisons. Puisque toute $$k$$ combinaison de $$A$$ doit nécessairement tomber dans l'une de ces deux catégories, on déduit l'égalité. CQFD

### Triangle de Pascal

La récurrence fondamentale met en rapport les coefficients binomiaux avec le triangle de Pascal. Le **triangle de Pascal** est un tableau de nombres triangulaire et infini:
par convention ses cases sont numérotées en partant de $$0$$ du haut vers le bas et de la gauche vers la droite. Le contenu des cases est défini ainsi:

- La case en (0,0) vaut 1;
- Toute autre case est obtenue en faisant la somme des deux cases immédiatement au dessus à gauche et droite. S’il n’y a pas de case à gauche ou à droite, sa valeur est considérée égale à 0.

L’animation suivante montre la procédure pour obtenir une case du triangle de Pascal.

![Triangle de Pascal, animation](http://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
Auteur:
[Hersfold](http://commons.wikimedia.org/wiki/User:Hersfold). Source:
[Wikimedia Commons](http://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif)

De cette définition il est immédiat que les cases du triangle de Pascal obéissent la même récurrence que les coefficients binomiaux. En effet, la valeur de la case $$(n,k)$$ est exactement le coefficient binomial $$\binom{n}{k}$$.

Il est bien connu que la $$n$$-ième ligne du triangle de Pascal donne les coefficients qui apparaissent dans l'expansion de la formule $$(a+b)^n$$. En effet, on peut prouver l'égalité suivante (appelée **théorème binomial**):

$$(a+b)^n = \sum_{k=0}^n \binom{n}{k}a^n b^{n-k}.$$

**Exercice:** prouver cette égalité par récurrence.

### Autres égalités remarquables

Une formule souvent utilisée pour calculer avec les coefficients binomiaux est la suivante:

$$\binom{n}{k} = \frac{n!}{k!(n-k)!}.$$

D'autres formules utiles sont

- $$\binom{n}{k} = \binom{n}{n-k}$$,
- $$\binom{n}{k} = \frac{n}{k}\binom{n-1}{k-1}$$,
- $$\sum_{k=0}^n \binom{n}{k} = 2^n$$.

La dernière est une conséquence immédiate du théorème binomial, mais elle peut aussi être déduite de la façon suivante: la réunion des $$k$$-combinaisons pour tout $$k$$ forme l'[ensemble des parties](Ensemble#ensemble-des-parties) de $$A$$.

**Exercice:** montrer par récurrence les égalités précédentes.
