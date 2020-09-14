---
title: Équivalence
---

Une équivalence est une [relation](../relation) ayant des propriétés similaires à celles de l'égalité. Étant donné une relation d'équivalence sur un ensemble $$A$$, on peut regrouper les éléments de $$A$$ en **classes d'équivalence** qui forment les éléments d'un ensemble (dit **ensemble quotient**) où la relation se réduit à l'identité.

Lorsque on cherche à définir une relation d’équivalence, on cherche à définir un critère, qu'on peut interprétér comme être *du même type* et qui nous permet de découper un ensemble en sous-ensembles disjoints, où chacun de ces sous-ensembles est constitué des éléments d’un certain type ou ayant une certaine propriété : les classes d'équivalences. 

## Définitions et notations

Formellement, une équivalence d'un ensemble $$A$$ est une [relation](../relation#relations-sur-un-ensemble) $$\mathcal{R}\subset A\times A$$ qui vérifie les trois propriétés suivantes :

- **Réflexivité**:  Pour tout $$a \in A$$, $$a \mathcal{R} a$$
- **Symétrie**: Pour tous $$a, b \in A$$, si $$a \mathcal{R} b$$ alors $$b \mathcal{R} a$$
- **Transitivité**: Pour tous $$a, b,c \in A$$ si $$a \mathcal{R} b$$ et $$b \mathcal{R} c$$, alors $$a \mathcal{R} c$$

Pour un élément $$a\in A$$, on appelle **classe d'équivalence de $$a$$**, noté  $$\bar{a}$$, l'ensemble des éléments $$b\in A$$ tels que $$a\mathcal{R}b$$. Il s'agit d'un sous-ensemble de $$A$$ et il n'est jamais vide (car il contient au moins $$a$$). Un élément $$b\in\bar{a}$$ est appelé un **représentant** de la classe $$\bar{a}$$.

L'ensemble de toutes les classes d'équivalence de $$A$$ par la relation $$\mathcal{R}$$ est appelé **l'ensemble quotient de $$A$$ par $$\mathcal{R}$$** et est noté $$A/\mathcal{R}$$. La fonction $$f:A\to A/\mathcal{R}$$ qui à chaque $$a\in A$$ associe sa classe d'équivalence est appelé la **surjection canonique** de $$A$$ dans l'ensemble quotient.

**Excercice:** Démontrer que la surjection canonique est effectivement surjective. Démontrer qu'elle est totale. Donner un exemple d'équivalence pour laquelle elle n'est pas injective.


## Exemples

- "Être né des mêmes parents" est une relation d'équivalence.
- "Parler la même langue" n'est pas une relation d'équivalence (elle n'est pas transitive).
- "Fêter l'anniversaire le même jour" est une relation d'équivalence. Il y a 366 classes d'équivalence.
- L'égalité $$a=b$$ (pour un ensemble quelconque) est une relation d'équivalence. Chaque classe d'équivalence contient un unique élément et la surjection canonique est bijective.


## Un exemple fondamental : les congruences


**Définition** Soit $$n$$ un entier naturel non nul. On dit que deux entiers $$a$$ et $$b$$ sont *congrus modulo $$n$$* ou encore que $$a$$ est congru à $$b$$ modulo $$n$$ si $$n$$ divise $$a - b$$. On notera $$a \equiv b \mod{n}$$.

**Exemples:**

* $$14 \equiv 6 \mod{8}$$, puisque $$8$$ divise $$(14-6)$$. 
* $$11 \equiv 5 \mod{3}$$, puisque $$3$$ divise $$(11-5)$$.
* $$12 \equiv -2 \mod{14}$$, puisque $$14$$ divise $$(12 - (-2))$$.


Si $$n \in \mathbb{N}^*$$ et si $$a$$, $$b$$ et $$c$$ appartiennent à $$\mathbb{Z}$$ alors :

1.  Pour tout $$a \in \mathbb{Z}$$, $$a \equiv a\mod{n}$$ , puisque $$n$$ divise $$a-a = 0$$.
2. Pour tout $$a, b \in \mathbb{Z}$$, si $$a \equiv b\mod{n}$$, alors $$b \equiv a\mod{n}$$. En effet, $$b-a = -(a - b)$$, donc si $$n$$ divise $$a-b$$, il divise forcement $$b-a$$.
3. On va montrer que si pour $$a, b, c \in \mathbb{Z}$$, $$a \equiv b\mod{n}$$ et $$b \equiv c\mod{n}$$, alors $$a \equiv c \mod{n}$$. Si, $$a \equiv b\mod{n}$$ et $$b \equiv c\mod{n}$$ alors ils existent $$k,\ell \in \mathbb{Z}$$ tels que $$a-b = kn$$ et $$b - c = \ell n$$. On a donc $$a - c = (a - b) + (b - c) = kn + \ell n = (k + \ell)n$$ et on conclut que $$a \equiv c \mod{n}$$.  


Autrement dit la relation de congruence est une *relation d’équivalence* sur l’ensemble des
entiers. La classe d'équivalence d’un entier $$k$$ est l’ensemble 

$$k + n\mathbb{Z} := \{k + nq, q \in \mathbb{Z}\}.$$

 Le reste de la division Euclidienne par $$n$$ est compris entre $$0$$ et $$n-1$$, du coup il y exactement $$n$$ classes d'équivalence:

- $$\overline{0} = \overline{n} = \overline{2n} = \cdots = \{a\in A \;\vert\; a = qn\}$$,
- $$\overline{1} = \overline{n+1} = \cdots = \{a\in A \;\vert\; a = qn+1\}$$,
- ...
- $$\overline{n-1} = \overline{-1} = \cdots = \{a\in A \;\vert\; a = qn + n - 1 \}$$.

L'ensemble quotient est habituellement noté $$\mathbb{Z}/n\mathbb{Z}$$, il est égal à

$$\mathbb{Z}/n\mathbb{Z} = \{\overline{0}, \overline{1}, \ldots, \overline{n-1}\}.$$

Souvent, lorsque il est clair du contexte qu'on parle des éléments de $$\mathbb{Z}/n\mathbb{Z}$$, on abuse de la notation et on écrit $$a$$ à la place de $$\overline{a}$$.

La structure de l'ensemble $$\mathbb{Z}/n\mathbb{Z}$$ est discutée [ici](../algebre-abstraite). 
