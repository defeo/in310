---
title: Algèbre abstraite
---

## Loi binaire

Soit $$A$$ un [ensemble](../ensemble), une **loi binaire sur $$A$$** est
une fonction $$A×A→A$$. Les lois binaires sont souvent écrites avec
une *notation infixe* : si $$*$$ est le symbole de la loi, on écrira
$$a*b$$ plutôt que $$*(a,b)$$.

On dit qu'une loi $$*:Α×A→A$$ est

- **Associative**: si pour tout $$a,b,c∈A$$ on a $$(a*b)*c = a*(b*c)$$ ;
- **Commutative**: si pour tout $$a,b∈A$$ on a $$a*b=b*a$$.

### Exemples

- L'addition et la multiplication (d'entiers, de réels, ...) sont des
  lois binaires.


## Groupes

Un **groupe** est un ensemble $$G$$ muni d'une loi binaire $$*$$ tels
que :

- $$*$$ est **associative** ;
- il existe un élément $$e∈G$$, dit **élément neutre**, tel que pour
  tout $$a∈G$$ on a $$e*a=a*e=a$$ ;
- pour tout $$a∈G$$ il existe un $$b∈G$$, dit l'**inverse de $$a$$**,
  tel que $$a*b=b*a=e$$.

Si en plus $$*$$ est commutative, le groupe $$G$$ est dit commutatif,
ou **abélien**.

### Notation

Souvent on se dispense de noter le symbole de la loi, on écrit alors
$$ab$$ pour $$a*b$$. Dans ce cas on dit que la loi de groupe est
*notée multiplicativement*. On peut parfois noter $$a·b$$ lorsque la
lecture serait ambiguë.

Pour une loi multiplicative, on note $$a^{-1}$$, ou parfois $$1/a$$,
l'inverse de $$a$$ ; on note $$a^n$$ l'élément

$$a^n = \underbrace{aa\cdots a}_{n\text{ fois}}.$$

Lorsque la loi de groupe est notée $$+$$, on dit qu'elle *notée
additivement*. L'usage veut qu'on utilise la notation additive
*uniquement pour les lois coummutatives*. On note alors $$-a$$
l'inverse de $$a$$ (et on l'appelle parfois *opposé*) ; on note
$$na$$, ou $$n·a$$, ou encore $$[n]a$$ l'élément

$$na = \underbrace{a+a+\cdots +a}_{n\text{ fois}}.$$

### Exemples

- $$(ℤ,+)$$, $$(ℚ,+)$$, $$(ℝ,+)$$ et $$(ℂ,+)$$ sont tous des groupes
  abéliens.
- $$(ℕ,+)$$ n'est pas un groupe : tous les éléments n'ont pas
  d'opposé.
- $$(ℤ,×)$$ n'est pas un groupe : tous les éléments n'ont pas
  d'inverse.
- $$(ℚ,+)$$, $$(ℝ,+)$$ et $$(ℂ,+)$$ ne sont pas des groupes, mais si
  on leur enlève le 0 ils deviennent des groupes abéliens.
- $$(\mathcal{S}_n,\circ)$$, l'ensemble des
  [permutations](../permutation) sur $$n$$ éléments muni de l'opération
  de composition, est un groupe **non-abélien**.


## Anneaux, corps

Un **anneau** est un ensemble $$A$$ muni de deux lois binaires, notées
$$+$$ et $$·$$, telles que :

- $$(A,+)$$ est un **groupe abélien**, dont on notera 0 l'élément neutre ;
- $$·$$ est **associative** ;
- il existe un élément de $$A$$, noté 1, tel que pour tout $$a∈A$$
  on a $$1·a=a·1=a$$ ;
- $$·$$ distribue sur $$+$$, c'est à dire que pour tout $$a,b,c∈A$$ on
  a $$a·(b+c)=(a·b)+(a·c)$$.

Un anneau tel que $$·$$ est commutative est dit un **anneau
commutatif**.

Un **corps** est un anneau commutatif dont tous les éléments, à
l'exception de 0, ont un inverse multiplicatif.

### Exemples

- $$ℤ$$, $$ℚ$$, $$ℝ$$ et $$ℂ$$ sont des anneaux commutatifs. Parmi
  eux, $$ℤ$$ est le seul qui ne soit pas aussi un corps.
- L'ensemble $$\mathcal{M}_n(ℤ)$$ des [matrices](../algebre-lineaire)
  carrées $$n×n$$ à coefficients dans $$ℤ$$ est un anneau
  **non-commutatif**. Les matrices carrées à coefficients dans $$ℚ$$,
  $$ℝ$$, ou $$ℂ$$ forment aussi des anneaux non-commutatifs.


## Anneaux d'entiers modulaires

Soit $$n>0$$, l'anneau des **entiers modulo $$n$$** est la
[classe d'équivalence](../equivalence) de $$ℤ$$ par la relation

$$a≡b \bmod n \quad⇔\quad n \text{ divise } (a-b).$$

Les lois $$+$$ et $$·$$ sont héritées des lois de $$ℤ$$ après
réduction par $$n$$ (voir [exercice en TD](../../tds/td7-arith-mod)).

On note $$ℤ/nℤ$$ cet anneau (commutatif). Il est un corps si et
seulement si $$n$$ est premier.
