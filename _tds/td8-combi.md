---
layout: post
title: Combinatoire élémentaire des mots
---

## Anagrammes

On note $$A(n)$$ le nombre d'[anagrammes](../../poly/anagramme) d'un mot de $$n$$
lettres distinctes.

1. Combien vaut $$A(n)$$ ?

On considère maintenant des mots de $$n$$ lettres où la lettre « a »
peut être répétée plusieurs fois, tandis que les autres lettres sont
distinctes. Par exemple, le mot « abca ». On note $$A(n; n_a)$$ le
nombre d'anagrammes d'un tel mot, où $$n$$ est le nombre de lettres et
$$n_a$$ est le nombre de fois que la lettre « a » est répétée.

2. Combien d'angrammes ont les mots « aa », « aba », « abca », « abcda » ?
3. Combien d'angrammes ont les mots « abc », « abca », « abaca » ?
4. Combien vaut $$A(n; n_a)$$ pour des entiers quelconques ?

On considère finalement des mots de $$n$$ lettres où toute lettre peut
être répétée. On note $$A(n; n_a, n_b, \ldots, n_z)$$ le nombre
d'anagrammes d'un mot de $$n$$ lettres, où la lettre « a » est répétée
$$n_a$$ fois, la lettre « b » $$n_b$$ fois, etc. (le cas échéant, $$n_x$$
peut valoir $$1$$)

5. Combien vaut $$A(n; n_a, n_b, \ldots, n_z)$$ ?


## Combinaisons

**Rappel :** on note $$\binom{n}{k}$$, et on lit « $$n$$ parmi $$k$$ », le
nombre de $$k$$-combinaisons de $$n$$ éléments, c'est à dire le nombre de
façons de choisir $$k$$ éléments parmi $$n$$. La récurrence fondamentale
des combinaisons dit que

$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}.$$

Prouver par induction (en utilisant l'égalité ci dessus) les égalités
suivantes.

1. $$\binom{n}{k} = \binom{n}{n-k}$$.

1. $$\binom{n}{k} = \frac{n}{k}\binom{n-1}{k-1}$$ pour tout $$0 < k \le n$$.

**Suggestion :** ces inductions sont plus facilement réalisées sur la
variable $$n$$. Ceci correspond à prouver les égalités en remontant le
triangle de Pascal ligne par ligne.


---------

**Rappel :** Le triangle de Pascal est obtenu en arrangeant les
coefficients binomiaux $$\binom{n}{k}$$ par lignes de longueur
croissante, avec la variable $$n$$ qui parcourt les lignes et la
variable $$k$$ qui parcourt les colonnes.

$$
\begin{array}{c@{}c@{}c@{}c@{}c}
 && \binom{0}{0}\\
 & \binom{1}{0} && \binom{1}{1}\\
\binom{2}{0} && \binom{2}{1} && \binom{2}{2}
\end{array}
$$

En utilisant le signe de sommation $$\Sigma$$, écrire les sommes
suivantes :

1. La somme des coefficients de la $$n$$-ème ligne.
2. La somme des coefficients de la $$k$$-ème colonne.

On définit les sommes *diagonales* et *anti-diagonales* du triangle de
Pascal comme suit :

- La $$n$$-ème somme diagonale est $$\sum_{k\ge 0}\binom{n+k}{k}$$.

- La $$n$$-ème somme anti-diagonale est $$\sum_{k=0}^{\lfloor n/2 \rfloor}\binom{n-k}{k}$$.

3. Dessiner le triangle de Pascal et, pour chaque entier $$n$$, tracer
des droites passant par les coefficients qui forment les sommes
diagonales. Même chose pour les sommes anti-diagonales.

**Rappel :** On utilisera à nouveau la récurrence fondamentale des
coefficients binomiaux, qui dit en pratique que chaque coefficient du
triangle de Pascal est obtenu en faisant la somme des deux
coefficients immédiatement au dessus :

$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}.$$

4. Prouver par induction que la somme des coefficients de la $$n$$-ième
ligne vaut $$2^n$$.

**Rappel :** Les nombres de Fibonacci $$F(n)$$ sont définis par la
récurrence $$F(0)=0$$, $$F(1)=1$$, $$F(n)=F(n-1)+F(n-2)$$.
  
5. Prouver par induction que la $$n$$-ème somme anti-diagonale vaut
$$F(n+1)$$.


## Nombres de Catalan

Un **mot de Dyck** de longueur $$2n$$ est un mot formé $$n$$ lettres *A*
et $$n$$ lettres *B* tel que aucun segment initial du mot contient plus
de *B* que de *A*. Par exemple, les mots *ABAABB* et *AAABBB* sont des
mots de Dyck, alors que *BA* ou *AABBBA* ne le sont pas.

1. Combien de mots de Dyck de longueur 0, 2, 4, 6 y a-t-il ?
2. Donner un moyen de former un mot de Dyck de longueur $$n+2$$ à partir
d'un mot de Dyck de longueur $$n$$.
3. Donner un moyen de former un mot de Dyck de longueur $$n+m+2$$ à partir de deux mots de Dyck de longueur $$n$$ et $$m$$. Montrer que le cas précédent était un cas spécial de celui-ci.
4. Montrer que tout mot de Dyck s'écrit de manière unique de cette façon.
5. Donner une définition récursive de mot de Dyck.

On va noter $$C(n)$$ le nombre de mots de Dyck de longueur $$2n$$.

6. Combien valent $$C(0)$$, $$C(1)$$, $$C(2)$$ ?
7. Donner une définition récursive de $$C(n)$$.

**Remarque :** Les nombres $$C(n)$$ sont appelés **nombres de Catalan**
en l'honneur du mathématicien belge Eugène Charles Catalan. On peut
prouver (mais c'est loin d'être simple) les égalités suivantes :

$$C(n) = \binom{2n}{n} - \binom{2n}{n+1} = \frac{1}{n+1}\binom{2n}{n}.$$

On s'intéresse maintenant au nombre de façons différentes dont on peut
calculer une somme de $$n$$ nombres, par exemple

$$a + b + c + d.$$

9. Montrer qu'il y a $$C(n-1)$$ façon différentes de mettre des
parenthèses autour d'une somme de $$n$$ nombres.
9. Pour les cas $$n=3,4$$, dessiner un arbre binaire montrant l'ordre dans lequel les sommes sont calculées.
10. En déduire une relation entre le nombre d'arbres binaires et la suite de Catalan.


## Calculer avec les permutations

**Rappel :** une permutation de $$S_n$$ est une bijection de
l'ensemble $$\{1,2,\ldots,n\}$$ vers lui même. La notation la plus
simple pour les permutations est la notation *à deux lignes*: par
exemple la permutation

$$
\sigma = 
\begin{pmatrix}
  1 & 2 & 3 & 4 & 5\\
  2 & 3 & 1 & 5 & 4
\end{pmatrix}
$$

correspond à la fonction $$\sigma(1) = 2$$, $$\sigma(2) = 3$$, $$\sigma(3)
= 1$$, etc.

Soient

$$\sigma_1 =
\begin{pmatrix}
  1 & 2 & 3 & 4\\
  2 & 4 & 3 & 1
\end{pmatrix}
, \quad
\sigma_2 =
\begin{pmatrix}
  1 & 2 & 3 & 4\\
  2 & 1 & 4 & 3
\end{pmatrix}
, \quad
\sigma_3 =
\begin{pmatrix}
  1 & 2 & 3 & 4\\
  3 & 1 & 4 & 2
\end{pmatrix}
$$

1. Calculer $$\sigma_1\circ\sigma_2$$ et $$\sigma_2\circ\sigma_1$$.
2. Cacluler $$(\sigma_1\circ\sigma_2)\circ\sigma_3$$ et $$\sigma_1\circ(\sigma_2\circ\sigma_3)$$.
3. Calculer $$\sigma_1^{-1}$$, $$\sigma_2^{-1}$$ et $$\sigma_3^{-1}$$.


## Décomposition en cycles

**Rappel :** Toute permutation peut être écrite comme une composition
de *cycles* disjoints, de façon unique (à l'ordre des cycles
près). Souvent dans ce contexte on omet le symbole $$\circ$$ pour la
composition et on écrit directement $$(a\;b\;c)(d\;f)$$ à la place de
$$(a\;b\;c)\circ(d\;f)$$. Pour confondre encore plus les idées, on dit
parfois *produit* de cycles à la place de *composition* de cycles,
mais il s'agit bien de la même chose.

1. Décomposer $$\sigma_1$$, $$\sigma_2$$ et $$\sigma_3$$ de l'exercice
précédent en produit de cycles.

2. Exercice inverse : écrire les décompositions en cycles suivantes en
notation à deux lignes:

	- $$(1\;3\;6\;2)$$,
    - $$(1\;2\;6)(4\;5)(3)(6\;7)$$,
    - $$(1\;6)(2)(3\;4\;7\;5)$$,
    - $$(1)(2\;6)(3\;4)(7\;5)$$.

    L'ordre des cycles est-il important ? 

3. Même exercice pour les produits de cycles suivants (non-disjoints,
cette fois-ci) :

	- $$(1\;3)(3\;2)$$,
	- $$(1\;2\;5)(4\;5)(3)(4\;6)$$,
	- $$(1\;2)(2\;3)(3\;4)(3\;4)$$.

	L'ordre des cycles est-il important, maintenant ?

4. Écrire la décomposition en cycles de $$\sigma^{-1}$$ pour chacune des
permutations suivantes :
	
	- $$\sigma = (1\;3\;6\;2)$$,
    - $$\sigma = (1\;2\;6)(4\;5)$$,
    - $$\sigma = (1\;4)(2)(3\;6\;5\;7)$$,
    - $$\sigma = (1)(2\;4)(7\;5)(3\;106)$$.


## Transposition

**Rappel:** Un cycle de longueur deux est aussi appelé une
*transposition*. Il n'est pas difficile de montrer que toute
permutation peut être décomposée (de façon non unique) en produit de
transpositions.

1. Calculer les produits de transpositions suivantes, en
représentation à deux lignes et en décomposition en cycles.

	- $$(1\;2)(4\;3)(2\;5)(3\;6)$$,
	- $$(2\;5)(4\;3)(1\;2)(3\;6)$$,
	- $$(1\;6)(6\;1)(2\;4)(4\;5)$$.

2. Décomposer les cycles suivants en produits de transpositions

	- $$(1\;3\;6\;2)$$,
    - $$(1\;2\;6)(4\;5)(3)(6\;7)$$,
    - $$(1\;6\;2)(3\;4\;7\;5)$$.
	
3. Décomposer $$\sigma_1$$ et $$\sigma_2$$ du premier exercice en produits
de transpositions.

4. Décomposer $$\sigma^{-1}$$ en produits de transpositions pour les
permutations suivantes:

	- $$\sigma = (1\;2)$$,
	- $$\sigma = (1\;2)(3\;4)$$,
	- $$\sigma = (1\;2)(2\;3)$$,
	- $$\sigma = (1\;6)(6\;1)(2\;4)(4\;501)$$.

