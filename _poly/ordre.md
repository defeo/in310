---
layout: post
title: Ordre
---

Les ordres sont une généralisation du concept d'ordre sur les nombres.

## Définition et notation

On **ordre** sur un ensemble $$A$$ est une [Relation](../relation) $$\preceq\subset{A\times A}$$ qui satisfait les propriétés suivantes:

- réflexivité: $$x\preceq x$$ pour tout $$x$$,
- transitivité: si $$x\preceq y$$ et $$y\preceq z$$, alors $$x\preceq z$$,
- anti-symétrie: si $$x\preceq y$$ et $$y\preceq x$$, alors $$x=y$$.

Un ordre qui est aussi une [relation totale](../relation#relations-sur-un-ensemble) est appelé un **ordre total**. Un ordre qui n'est pas total est aussi appelé un **ordre partiel**. Un ensemble muni d'un ordre est appelé un **ensemble (totalement/partiellement) ordonné**, ou parfois simplement un ordre.

### Ordres stricts

Un **ordre strict** est une relation [irréflexive et transitive](../relation#relations-sur-un-ensemble). Notez bien qu'un ordre strict **n'est pas un ordre** au sens de la définition précédente; on dit **ordre large** lorsque l'on veut rendre clair qu'on parle d'un ordre et non pas d'un ordre strict.

**Exercice:** Démontrer qu'une relation est irréflexive et transitive si et seulement si elle est [asymétrique](../relation#relations-sur-un-ensemble) et transitive.

À tout ordre $$\preceq$$ on peut associer un ordre strict $$\prec$$ de la façon suivante:

> $$a\prec b$$ si et seulement si $$a\preceq b$$ et $$a\ne b$$.

Inversement, à tout ordre strict $$\prec$$ on peut associer un ordre $$\preceq$$ de la façon suivante:

> $$a\preceq b$$ si et seulement si $$a\prec b$$ ou $$a=b$$.

## Exemples

- L'ordre classique sur les entiers $$a\le b$$ est un *ordre total*, l'ordre $$a < b$$ est son *ordre strict* associé.
- La relation $$a\vert b$$ ($$a$$ divise $$b$$) est un *ordre partiel*.
- La relation d'inclusion ensembliste $$A\subset B$$ est un *ordre partiel*.
- Soit $$\Sigma$$ un alphabet, la relation sur $$\Sigma^\ast$$ donnée par l'ordre alphabétique est un *ordre total*.
- La relation sur $$\Sigma^\ast$$ donnée par $$a\preceq b$$ si et seulement si $$a$$ est un sous-mot de $$b$$ est un ordre partiel (ex.: "art" est un sous-mot de "tarte").

## Diagramme de Hasse

Les diagrammes de Hasse sont une façon de représenter graphiquement les ordres, surtout les ordres finis. On représente les éléments de l'ensemble par des sommet et les relations entre les éléments par des arêtes; ensuite on ôte les arêtes correspondant à la réflexivité et celles qu'on pourrait déduire de la transitivité.

Formellement, si $$\prec$$ est un ordre strict (associé à son ordre faible), on dessine un sommet pour chaque élément de l'ensemble et on dessine une arête entre deux éléments $$a$$ et $$b$$ (en général en allant du bas vers le haut) si $$a\prec b$$ et s'il n'y a pas déjà un chemin allant de $$a$$ vers $$b$$. Le diagramme de Hasse n'est pas nécessairement unique.

Voici le diagramme de Hasse de l'ordre sur l'[ensemble des parties](../ensemble#ensemble-des-parties) de $$\{x,y,z\}$$ donnée par l'inclusion ensembliste:


![Diagramme de Hasse de l'ensemble des parties de l'ensemble à trois éléments](http://upload.wikimedia.org/wikipedia/commons/e/ea/Hasse_diagram_of_powerset_of_3.svg)
Cette image a été crée par [KSmrq](http://commons.wikimedia.org/wiki/User:KSmrq). Téléchargée de [Wikimedia Commons](http://en.wikipedia.org/wiki/File:Hasse_diagram_of_powerset_of_3.svg).

**Exercice:** Démontrer par induction que le diagramme de Hasse de l'ordre $$\le$$ sur les entiers est une droite.

## Ordres bien fondés

Soit $$\mathcal{R}\subset A\times A$$ une relation et soit $$C\subset A$$ un sous-ensemble. On dit qu'un élément $$c\in C$$ est **minimal dans $$C$$** si pour tout $$b\in C$$ on n'a pas $$b\mathcal{R}c$$.

On dit qu'une relation sur un ensemble $$A$$ est **bien fondée** si tout sous-ensemble de $$A$$ a un élément minimal. Un ordre dont l'ordre strict associé est bien fondé est appelé un **ordre bien fondé**; si, en plus, il est total il est appelé un **bon ordre**.

**Note:** Si l'ordre n'est pas total, l'élément minimal n'est pas
nécessairement unique. Considérez par exemple l'ensemble des nombres
premiers muni de la relation d'ordre $$a|b$$.

Une **chaîne** est une suite d'éléments où chaque élément est en relation avec son successeur. Par exemple:

$$0 \le 2 \le 4 \le 6 \le \cdots$$

De façon équivalente, un ordre est bien fondé *s'il n'y a pas de chaîne infinie strictement décroissante*.

### Exemples

- Les nombres naturels avec l'ordre usuel forment un *bon ordre*.
- L'ordre usuel sur les entiers, les rationnels ou les réels n'est pas bien fondé.
- Les entiers munis de l'ordre $$a|b$$ forment un *ordre bien fondé*
  (mais pas un bon ordre).
- L'ordre sur $$\mathcal{P}(A)$$ donné par l'inclusion ensembliste est *bien fondé*.
- L'ordre sur $$\Sigma^\ast$$ donné par $$a\preceq b$$ si $$a$$ est un sous-mot de $$b$$ est bien fondé.
- L'ordre lexicographique n'est pas bien fondé. Par exemple, la chaîne $$AB > AAB > AAAB > \cdots$$ est infinie et strictement décroissante.


### Ordres bien fondés et induction

voir [Induction](../induction), [Récursivité](../recursivite).

Les ordres bien fondés sont à la base du principe d'[Induction](../induction) et de la programmation [récursive](../recursivite).

Le [principe d'induction](../induction), qui dans sa forme la plus simple parle des propriétés qu'on peut démontrer sur $$\mathbb{N}$$, peut être généralisé à tout ordre bien fondé, donnant ainsi ce que l'on appelle *induction structurelle*.

La [programmation récursive](../recursivite) est basée sur le fait que si un programme fait des appels récursifs avec des arguments *strictement plus petits*, il construit une chaîne strictement décroissante, qui ne peut donc pas être infinie dès lors que le domaine de la fonction est bien fondé.

## Pour approfondir

### Ordinaux

Deux bons ordres sont *isomorphes* s'il existe une fonction [bijective](../fonction#injectivité-surjectivité-bijectivité) *monotone* d'[inverse](../fonction#inverse) *monotone* (i.e. une bijection telle que $$a\le b\Leftrightarrow f(a)\le f(b)$$) entre eux. Être isomorphe est une relation d'équivalence, et une telle classe d'équivalence est appelée un **ordinal**.

On peut imposer une relation d'ordre sur les ordinaux en posant $$\alpha\le\beta$$ si et seulement s'il existe une injection monotone de $$\alpha$$ dans $$\beta$$. De façon intéressante, cet ordre est un *bon ordre* (au moins dans des théories des ensembles standard, mais il existe aussi des [théories anti-fondationnelles](http://en.wikipedia.org/wiki/Non-well-founded_set_theory) où il ne l'est pas).

Dans les ordinaux on retrouve un sous-ensemble isomorphe (en tant qu'ordre) aux nombres naturels, que l'on note habituellement $$\omega$$. Les ordinaux constituent donc une généralisation des nombres naturels, dans laquelle on peut faire de l'induction, qu'on appelle **induction transfinie**.

**Attention:** Tout comme [il n'existe pas d'ensemble de tous les ensembles](../ensemble#paradoxe-de-russel), il n'existe pas d'ensemble de tous les ordinaux. En effet si un tel ensemble devait exister il serait isomorphe à un ordinal $$\alpha$$ (puisque il y a un ordre total sur les ordinaux), mais alors cet ensemble se contiendrait lui même, violant ainsi le bon ordonnancement.
