Une équivalence est une [relation](Relation) ayant des propriétés similaires à celles de l'égalité. Étant donné une relation d'équivalence sur un ensemble $A$, on peut regrouper les éléments de $A$ en **classes d'équivalence** qui forment les éléments d'un ensemble (dit **ensemble quotient**) où la relation se réduit à l'identité.

# Définitions et notations

Formellement, une équivalence d'un ensemble $A$ est une [relation](Relation#relations-sur-un-ensemble) $\mathcal{R}\subset A\times A$ réflexive, symétrique et transitive.

Pour un élément $a\in A$, on appelle **classe d'équivalence de $a$**, noté $\mathcal{R}(a)$ ou $\bar{a}$, l'ensemble des éléments $b\in A$ tels que $a\mathcal{R}b$. Il s'agit d'un sous-ensemble de $A$ et il n'est jamais vide (car il contient au moins $a$). Un élément $b\in\bar{a}$ est appelé un **représentant** de la classe $\bar{a}$.

L'ensemble de toutes les classes d'équivalence de $A$ par la relation $\mathcal{R}$ est appelé **l'ensemble quotient de $A$ par $\mathcal{R}$** et est noté $A/\mathcal{R}$. La fonction $f:A\to A/\mathcal{R}$ qui à chaque $a\in A$ associe sa classe d'équivalence est appelé la **surjection canonique** de $A$ dans l'ensemble quotient.

**Excercice:** Démontrer que la surjection canonique est effectivement surjective. Démontrer qu'elle est totale. Donner un exemple d'équivalence pour laquelle elle n'est pas injective.


# Exemples

- "Être né des mêmes parents" est une relation d'équivalence.
- "Parler la même langue" n'est pas une relation d'équivalence (elle n'est pas transitive).
- "Fêter l'anniversaire le même jour" est une relation d'équivalence. Il y a 366 classes d'équivalence.
- L'égalité $a=b$ (pour un ensemble quelconque) est une relation d'équivalence. Chaque classe d'équivalence contient un unique élément et la surjection canonique est bijective.


## Réduction modulo un entier

Pour un $n\in\mathbb{Z}$ fixé, la relation $a=b \,\mathrm{mod}\, n$ est une relation d'équivalence. Le reste de la division Euclidienne par $n$ est compris entre $0$ et $n-1$, du coup il y a exactement $n$ classes d'équivalence:

- $\overline{0} = \overline{n} = \overline{2n} = \cdots = \{a\in A | a = qn\}$,
- $\overline{1} = \overline{n+1} = \cdots = \{a\in A | a = qn+1\}$,
- ...
- $\overline{n-1} = \overline{-1} = \cdots = \{a\in A | a = qn + n - 1 \}$.

L'ensemble quotient est habituellement noté $\mathbb{Z}/n\mathbb{Z}$, il est égal à

$$\mathbb{Z}/n\mathbb{Z} = \{\overline{0}, \overline{1}, \ldots, \overline{n-1}\}.$$

Souvent, lorsque il est clair du contexte qu'on parle des éléments de $\mathbb{Z}/n\mathbb{Z}$, on abuse de la notation et on écrit $a$ à la place de $\overline{a}$.