---
title: Arithmétique modulaire
---

## Définition

**Rappel :** On dit définit la relation *d'équivalence modulo $$n$$*
par

$$a ≡ b \mod n \quad⇔\quad n \mid (a-b).$$

On note $$\bar{a}$$ la *classe d'équivalence* de $$a$$ modulo $$n$$,
ou simplement $$a$$ lorsque cela est clair du contexte.

1. Montrer qu'il s'agit bien d'une relation d'équivalence.

1. Donner la classe d'équivalence de $$-3\mod 7$$.

1. Lesquelles des égalités suivantes sont vraies ? Lesquelles sont fausses ?

    $$6 = 4 \mod 2,\quad
     5 = -5 \mod 12,\quad
     11 = -2 \mod 13,\quad
     24 = 0 \mod 12.$$

1. Montrer que la définition est équivalente à
   
   $$a ≡ b \mod n \quad⇔\quad ∃c.\; a = b + cn.$$

1. Montrer que pour $$n=2$$, la définition est équivalente à
   
   $$a ≡ b \mod 2 \quad⇔\quad 2 \mid (a + b).$$

1. Soit $$n$$ un entier quelconque, montrer les deux propriétés
   suivantes:
   
   - Si $$a ≡ b \mod n$$ alors pour tout entier $$c$$ on a $$a+c ≡ b+c \mod n$$,
   - Si $$a ≡ b \mod n$$ alors pour tout entier $$c$$ on a $$ac ≡ bc \mod n$$.


## Structure additive

1. Calculer un représentant pour les sommes suivantes
   
   $$5 + 5 \mod 10,\quad
   -1 + 4 \mod 6,\quad
   9 - 15 \mod 4.$$

1. Calculer un représentant pour les produits suivants

    $$3·3 \mod 7,\quad
    -1·9 \mod 5,\quad
    14·12 \mod 15.$$

1. Calculer les tables d'addition et de multiplication de $$ℤ/2ℤ$$. A
   quels opérateurs du calcul des propositions correspondent-elles ?

1. Calculer les tables d'addition et de multiplication de $$ℤ/6ℤ$$.
	
1. Calculer le résultat des expressions suivantes
   
   $$3 · (4 + 7) \mod 11,\quad
   4 - 4 · 12 \mod 11,\quad
   (1234 + 789) · 12 \mod 10.$$


## Structure multiplicative

Voici la table de multiplication de $$ℤ/15ℤ$$. À
partir de maintenant on va arrêter d'écrire $$\mod n$$ partout:
lorsque le module est clair du contexte, on se contentera d'écrire
$$6+8=-1$$, plutôt que $$6 + 8 = -1 \mod 15$$.

|  |  0|  1|  2|  3|  4|  5|  6|  7|  8|  9| 10| 11| 12| 13| 14
|--|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---
| 0|  0|  0|  0|  0|  0|  0|  0|  0|  0|  0|  0|  0|  0|  0|  0
| 1|  0|  1|  2|  3|  4|  5|  6|  7|  8|  9| 10| 11| 12| 13| 14
| 2|  0|  2|  4|  6|  8| 10| 12| 14|  1|  3|  5|  7|  9| 11| 13
| 3|  0|  3|  6|  9| 12|  0|  3|  6|  9| 12|  0|  3|  6|  9| 12
| 4|  0|  4|  8| 12|  1|  5|  9| 13|  2|  6| 10| 14|  3|  7| 11
| 5|  0|  5| 10|  0|  5| 10|  0|  5| 10|  0|  5| 10|  0|  5| 10
| 6|  0|  6| 12|  3|  9|  0|  6| 12|  3|  9|  0|  6| 12|  3|  9
| 7|  0|  7| 14|  6| 13|  5| 12|  4| 11|  3| 10|  2|  9|  1|  8
| 8|  0|  8|  1|  9|  2| 10|  3| 11|  4| 12|  5| 13|  6| 14|  7
| 9|  0|  9|  3| 12|  6|  0|  9|  3| 12|  6|  0|  9|  3| 12|  6
|10|  0| 10|  5|  0| 10|  5|  0| 10|  5|  0| 10|  5|  0| 10|  5
|11|  0| 11|  7|  3| 14| 10|  6|  2| 13|  9|  5|  1| 12|  8|  4
|12|  0| 12|  9|  6|  3|  0| 12|  9|  6|  3|  0| 12|  9|  6|  3
|13|  0| 13| 11|  9|  7|  5|  3|  1| 14| 12| 10|  8|  6|  4|  2
|14|  0| 14| 13| 12| 11| 10|  9|  8|  7|  6|  5|  4|  3|  2|  1
{: .mul-table .centered}
<style>
.mul-table {text-align: right}
.mul-table th {border-bottom: solid thin black; font-weight: bold}
.mul-table td:first-child, .mul-table th:first-child {border-right: solid thin black; font-weight: bold}
.mul-table td, .mul-table th {padding: 0.1ex 1ex}
</style>


1. Quel est l'inverse (multiplicatif) de 2, 4, 7 ?

1. Trouver un élément qui n'a pas d'inverse multiplicatif. $$ℤ/15ℤ$$
   est-il un corps ?

1. Combien d'éléments contient $$(ℤ/15ℤ)^*$$ (le
   *groupe des éléments inversibles* de $$ℤ/15ℤ$$) ?

1. Calculer $$3^3$$, $$5^4$$ et $$2^7$$.


## Corps finis

1. Calculer la table de multiplication de $$ℤ/7ℤ$$. Quels sont les
   éléments inversibles ? $$ℤ/7ℤ$$ est-il un corps ?

1. Calculer toutes les puissances de $$3\mod 7$$.

1. Montrer que si $$n=ab$$, alors $$a \mod n$$ est un diviseur de
   zéro.

1. Montrer que un élément est inversible si et seulement s'il n'est
   pas un diviseur de zéro.

1. Montrer que $$ℤ/nℤ$$ est un corps si et seulement si $$n$$ est
   premier.
