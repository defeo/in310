---
layout: post
title: Exercices
---

## Logique

### Théorie de la preuve (du calcul des propositions)

**Rappel:** Un système de preuve pour le calcul propositionnel
est constitué par un ensemble (éventuellement infini) de formules
dites *axiomes* et par un ensemble fini de *règles
  d'inférence* qui établissent le façons admissibles de dériver des
formules vraies à partir d'autres formules vraie.

Pour toutes formules $$\phi,\psi,\chi$$ on note $$\vdash \phi$$ si $$\phi$$
est démontrable uniquement à partir des axiomes en utilisant les
règles d'inférence. On note $$\phi,\chi\vdash\psi$$ si $$\psi$$ est
démontrable en ajoutant $$\phi$$ et $$\chi$$ aux axiomes et en utilisant
les règles d'inférence.

Dans la suite nous allons prendre la liste (infinie) d'axiomes
suivante:
 
1. $$\phi\to(\psi\to\phi)$$,
2. $$(\neg\phi\to\neg\psi)\to(\psi\to\phi)$$,
3. $$(\phi \to (\psi\to\chi)) \to ((\phi\to\psi) \to (\phi\to\chi))$$,
4. $$\neg\neg\phi \to \phi$$,
5. $$\phi\to\phi$$.
6. $$(\psi\to\phi)\to(\neg\phi\to\neg\psi)$$,

où $$\phi,\psi,\chi$$ sont des formules quelconques (par exemple $$A$$, ou
$$\neg A\to B$$, etc.). La seule règle d'inférence de notre système est
le *modus ponens*:

$$\frac{\phi\to\psi \qquad \phi}{\psi},$$

qui veut dire qu'à chaque fois qu'on a les formules $$\phi\to\psi$$ et
$$\phi$$, on peut déduire $$\psi$$.

Les axiomes 1-3 sont dus à Łukasiewicz, les autres sont redondants
(dans le sens qu'ils pourraient être dérivés des trois premiers), mais
nous les ajoutons pour simplifier les preuves.

**Question 1** Prouver que $$A\vdash B\to A$$.

**Question 2** Prouver que $$\neg B\vdash B\to A$$.

**Question 3** Prouver le *raisonnement par contrapposée*: $$A\to B, \neg B \vdash \neg A$$.

**Question 4** On va montrer de d'une proposition fausse on
peut déduire n'importe quoi. Nous choisissons $$A\wedge\neg A$$ comme
proposition fausse.

1. Calculez sa table de vérité et vérifiez qu'elle est bien une
  *antilogie*.
2. Dans notre logique nous avons fait le choix d'utiliser seulement
  les symboles $$\to$$ et $$\neg$$. En utilisant les équivalences bien
  connues, transformez $$A\wedge\neg A$$ en une formule équivalente qui
  n'utilise que $$\neg$$ et $$\to$$. Vérifiez que les deux formules sont
  bien équivalentes à l'aide des tables de vérité.
3. Montrez que $$\neg(A\to A)\vdash B$$.

**Solutions:** allez voir la solution de cet exercice dans les [Exercices Corrigés](../exercices-corriges).

## Relations

### Ordres bien fondés

#### Ordres finis

Prouver que tout ordre fini est bien fondé.


## Induction, Récurrence

### Preuves par induction

#### Quelques égalités

Prouver les égalités suivantes

- $$1+2+3+\cdots+n = \frac{n(n+1)}{2}$$ pour tout $$n > 0$$.
- $$1+3+5+\cdots+(2n-1) = n^2$$ pour tout $$n > 0$$.
- $$1^2+2^2+3^2+\cdots+n^2 = \frac{n(n+1)(2n+1)}{6}$$ pour tout $$n > 0$$.
- $$1^3+2^3+3^3+\cdots+n^3 = \frac{n^2(n+1)^2}{4}$$ pour tout $$n > 0$$.

#### Quelques inégalités

Prouver les inégalités suivantes

- $$2^n < n!$$ pour tout $$n\ge 4$$.
- $$n! < n^n$$ pour tout $$n > 1$$.
- L'*inégalité de Bernouilli*: $$1 + nh \le (1+n)^h$$ pour tout $$n>0$$ et tout $$h \ge 0$$.

#### Induction forte

On dit qu'une preuve utilise l'induction *forte* lorsque le pas inductif a la forme $$\forall i < n P(i)\Rightarrow P(n)$$, plutôt que $$P(n-1)\Rightarrow P(n)$$. Prouvez les propositions suivantes par l'induction forte:

- Tout entier $$n\ge12$$ peut être exprimé sous la forme $$4a+5b$$ avec $$a$$ et $$b$$ des entiers positifs.

#### Nombres de Fibonacci

Soit $$F(n)$$ le $$n$$-ième [nombre de Fibonacci](../recursivite#suite-de-fibonacci), prouver les identités suivantes:

- $$\sum_{i=0}^n F(i) = F(n+2) - 1$$ pour tout $$n\ge0$$.
- $$\sum_{i=0}^n F(i)^2 = F(n)F(n+1)$$ pour tout $$n\ge0$$.
- $$F(n)^2 = F(n-1)F(n+1) + (-1)^{n+1}$$ pour tout $$n>0$$.
- $$1 < \frac{F(n+1)}{F(n)} < 2$$ pour tout $$n>2$$.


### Récursion

#### Définitions récursives

Exprimer les propriétés suivantes par une définition récursive. Pour chacune indiquer quel est l'[ordre bien fondé](../ordre#ordres-bien-fondés) qui garantit la cohérence de la définition.

- $$n\in\mathbb{N}$$ est premier.
- $$n\in\mathbb{Z}$$ est pair.
- L'écriture décimale de $$n$$ ne contient que des $$1$$.


#### Tour de Hanoï

Le jeu de la tour de Hanoï à été inventé par le mathématicien [Édouard Lucas](http://fr.wikipedia.org/wiki/%C3%89douard_Lucas). Il le décrit ainsi dans le journal 
*Récréations mathématiques* en 1892:

>  N. Claus de Siam a vu, dans ses voyages pour la publication des écrits de l'illustre Fer-Fer-Tam-Tam, dans le grand temple de Bénarès, au-dessous du dôme qui marque le centre du monde, trois aiguilles de diamant, plantées dans une dalle d'airain, hautes d'une coudée et grosses comme le corps d'une abeille. Sur une de ces aiguilles, Dieu enfila au commencement des siècles, 64 disques d'or pur, le plus large reposant sur l'airain, et les autres, de plus en plus étroits, superposés jusqu'au sommet. C'est la tour sacrée du Brahmâ. Nuit et jour, les prêtres se succèdent sur les marches de l'autel, occupés à transporter la tour de la première aiguille sur la troisième, sans s'écarter des règles fixes que nous venons d'indiquer, et qui ont été imposées par Brahma. Quand tout sera fini, la tour et les brahmes tomberont, et ce sera la fin des mondes!

Voici l'image d'une tour de Hanoï miniature

![Une tour de Hanoï en bois](http://upload.wikimedia.org/wikipedia/commons/0/07/Tower_of_Hanoi.jpeg)
Photo prise par
[Ævar Arnfjörd Bjarmason](http://commons.wikimedia.org/wiki/User:%C3%86var_Arnfj%C3%B6r%C3%B0_Bjarmason). Téléchargée
de
[Wikimedia Commons](http://commons.wikimedia.org/wiki/File:Tower_of_Hanoi.jpeg).


**Question.** Les brahmes ont droit de déplacer un seul disque à la fois d'une aiguille à une autre, à condition de ne pas poser un disque plus gros sur un plus petit. Combien de temps nous reste-t-il avant la fin du monde?

**Suggestions.** Commencez par résoudre le problème pour une tour constituée d'un seul disque, puis 2, puis 3... Maintenant, vous vous en doutiez, utilisez l'induction!



## Éléments de combinatoire énumérative

### Combinaisons


#### Triangle de Pascal

Le triangle de Pascal est un tableau de nombres triangulaire et infini. Voici les premières 6 lignes.

![Triangle de Pascal](http://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pascal%27s_triangle_5.svg/200px-Pascal%27s_triangle_5.svg.png)
Auteur:
[Conrad.Irwin](http://commons.wikimedia.org/wiki/User:Conrad.Irwin). Source:
[Wikimedia Commons](http://commons.wikimedia.org/wiki/File:Pascal%27s_triangle_5.svg).

Par convention on énumère les lignes et les colonnes à partir de $$0$$, ainsi le triangle de Pascal définit une fonction $$C:\mathbb{N}\times\mathbb{N}\to\mathbb{N}$$ dont les premières valeurs sont:

- $$C(0,0) = 1$$,
- $$C(1,0) = 1$$,
- $$C(1,1) = 1$$,
- $$C(2,0) = 1$$,
- $$C(2,1) = 2$$,
- $$C(2,2) = 1$$.

On dit que $$C$$ est la *fonction binomiale*. Une case quelconque du triangle de Pascal est définie ainsi:

- La case en $$(0,0)$$ vaut 1;
- Toute autre case est obtenue en faisant la somme des deux cases immédiatement au dessus à gauche et droite. S'il n'y a pas de case à gauche ou à droite, sa valeur est considérée égale à 0.

L'animation suivante montre la procédure pour obtenir une case du triangle de Pascal.

![Triangle de Pascal, animation](http://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
Auteur:
[Hersfold](http://commons.wikimedia.org/wiki/User:Hersfold). Source:
[Wikimedia Commons](http://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif).

**Question 1.** Donner une définition récursive de la fonction binomiale $$C:\mathbb{N}\times\mathbb{N}\to\mathbb{N}$$.

**Question 2.** La fonction est elle totale, partielle, injective, surjective, bijective?

**Question 3.** Quel ordre bien fondé sur $$\mathbb{N}\times\mathbb{N}$$ garantit la cohérence de la définition de $$C$$?

**Question 4.** Démontrer par induction les égalités suivantes:

- $$C(n,k) = C(n,n-k)$$,
- $$C(n,k) = \frac{n}{k}C(n-1,k-1)$$,
- $$C(n,k) = \frac{n!}{k!(n-k)!}$$.

**Définition:** La valeur de la fonction binomiale $$C(n,k)$$ est aussi appelée le $$(n,k)$$-ième *coefficient binomial* et est aussi notée $$\binom{n}{k}$$ ou $$C_n^k$$. 

**Question 5.** Soit $$A$$ un ensemble de $$n$$ éléments, on considère son ensemble des parties $$\mathcal{P}(A)$$.

- Combien y a-t-il de parties contenant 0 éléments? Combien en contiennent 1? Combien 2?
- Démontrer que pour tout $$k\le n$$ il y a exactement $$\binom{n}{k}$$ parties de $$A$$ contenant $$k$$ éléments.

**Note:** Une partie de $$A$$ contenant $$k$$ éléments est appelée une *$$k$$-combinaison* de $$A$$.


#### Combinaisons, formule binomiale

Soit $$A$$ un ensemble de $$n$$ éléments.

1. Quelle est la cardinalité de son ensemble des parties $$\mathcal{P}(A)$$?
2. Soit $$0\le k \le n$$, combien y a-t-il de sous-ensembles de $$A$$ contenant exactement $$k$$ éléments?
3. Démontrer l'égalité
   $$\sum_{k=0}^n\binom{n}{k} =2^n$$
   par récurrence.
4. On rappelle la formule binomiale:
   $$(a+b)^n = \sum_{k=0}^n \binom{n}{k}a^nb^{n-k}$$
   démontrer l'égalité précédente à l'aide de la formule binomiale.


### Permutations


#### Anagrammes

**Question 1** Quel est le nombre d'anagrammes du mot "mot"? Et du mot "cour"? Quel est le nombre d'anagrammes d'un mot de $$n$$ lettres différentes?

**Question 2** Quel est le nombre d'anagrammes du mot "papa"? Trouver une règle générale pour compter le nombre d'anagrammes d'un mot avec lettres répétées.


#### Permutations, décomposition en cycles

On rappelle qu'une permutation de $$S_n$$ est une bijection de
l'ensemble $$\{1,2,\ldots,n\}$$ vers lui même. La notation la plus
simple pour les permutations est la notation *à deux lignes*: par
exemple si $$\sigma\in S_5$$ on note

$$
\sigma = 
\begin{pmatrix}
  1 & 2 & 3 & 4 & 5\\
  2 & 3 & 1 & 5 & 4
\end{pmatrix}
$$

la permutation telle que $$\sigma(1) = 2$$, $$\sigma(2) = 3$$, $$\sigma(3)
= 1$$, etc.

**Question 1** Combien y a-t-il de permutations dans $$S_n$$?

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
\end{pmatrix}.
$$


**Question 2**

1. Combien valent $$\sigma_1\circ\sigma_2$$ et $$\sigma_2\circ\sigma_1$$? La composition de permutations est-elle commutative?
2. Combien valent $$\sigma_1^{-1}$$ et $$\sigma_2^{-1}$$?
3. Décomposer $$\sigma_1$$ et $$\sigma_2$$ en cycles. Lesquels de ces cycles sont des transpositions?

**Question 3** Écrire en notation *à deux lignes* les produits de cycles suivants:

1. $$(1\;2\;6)(4\;5)(3)(6\;7)$$,
2. $$(1\;6)(2)(3\;4\;7\;5)$$,
3. $$(1)(2\;6)(3\;4)(7\;5)$$.

L'ordre des facteurs est-il important? Considérez maintenant les cycles suivants (non-disjoints):

1. $$(1\;2\;5)(4\;5)(3)(4\;6)$$,
2. $$(1\;2)(2\;3)(3\;4)(3\;4)$$.

L'ordre des facteurs est-il important?  Écrire les produits de cycles inverses.

**Question 4**
Écrire en produit de cycles **disjoints**, puis en notation
*à deux lignes*, les produits de transpositions suivants:

1. $$(1\;2)(4\;3)(2\;5)(3\;6)$$,
2. $$(2\;5)(4\;3)(1\;2)(3\;6)$$,
3. $$(1\;6)(6\;1)(2\;4)(4\;5)$$.

L'ordre des facteurs est-il important? Écrire les produits de transpositions inverses.
