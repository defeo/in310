---
title: Révision sur les matrices
---

## Produits matrice-vecteur

Calculer les produits matrice-vecteur suivants.

1. $$\begin{pmatrix}
	1 & 2 & 3\\
	4 & 5 & 6\\
	7 & 8 & 9\\
	10 & 11 & 12
	\end{pmatrix}
	\begin{pmatrix}
	1\\0\\-1
	\end{pmatrix}$$,

2. $$\begin{pmatrix}
   1 & 0 & 0\\
   0 & 2 & 0\\
   0 & 0 & 3\\
   0 & 0 & 0
   \end{pmatrix}
   \begin{pmatrix}
   10\\-7\\4
   \end{pmatrix}$$,

3. $$\begin{pmatrix}
   1 & 0 & 0\\
   1 & 2 & 0\\
   1 & 2 & 3
   \end{pmatrix}
   \begin{pmatrix}
   3\\-1\\4
   \end{pmatrix}$$.


## Produits matrice-matrice

Calculer les produits matrice-matrice suivants

1. $$\begin{pmatrix}
   1 & 2 & 3\\
   4 & 5 & 6\\
   7 & 8 & 9
   \end{pmatrix}
   \begin{pmatrix}
   1 &  0 & -1\\
   0 & -1 &  0\\
   -1 &  0 &  1
   \end{pmatrix}$$,

2. $$\begin{pmatrix}
   1 & 0 & 0\\
   0 & 2 & 0\\
   0 & 0 & 3\\
   1 & 1 & 1
   \end{pmatrix}
   \begin{pmatrix}
   1 & 2 & 3 & 4\\
   3 & 1 & 2 & 3\\
   2 & 3 & 1 & 2
   \end{pmatrix}$$.

## Forme échelonnée

Mettre les matrices suivantes sous forme échelonnée

1. $$\begin{pmatrix}
   3 & 1 & -4 & 0 & 5\\
   2 & 0 & 0 & -1 & 9\\
   0 & -5 & 3 & 2 & 0
   \end{pmatrix}$$,

2. $$\begin{pmatrix}
   1 & 0 & 0 & 0\\
   2 & 1 & 0 & 0\\
   4 & 2 & 1 & 0\\
   8 & 4 & 2 & 1
   \end{pmatrix}$$.

## Systèmes linéaires

Résoudre les systèmes linéaires suivants.

1. $$\left\{\begin{array}{rrrl}
   3x &+ y &- 4z &= 12\\
   & 2y &-  z&= -1\\
   &&3z &= 6
   \end{array}\right.$$,

2. $$\left\{\begin{array}{rrrl}
   x &+ y &+ z &= 3\\
   2x &+ 7y &- 2z &= -1\\
   -x &- y &+ z &= 3
   \end{array}\right.$$,

3. $$\left\{\begin{array}{rrrrl}
   t &+ x &+ y &+ z &= 1 \\ 2t &+ x &+ 3y &+ z &=7 \\ 2t &+ 2x &+ y &+ 2z &=7
   \end{array}\right.$$,

4. $$\left\{\begin{array}{rrrl}
   x &+ y &+ 2z &= 4\\
   &y &-z &= -2\\
   -2x &-2y &-4z &= -1
   \end{array}\right.$$.

## Matrices à coefficients modulaires

1. Calculer le produit matrice-vecteur suivant à coefficients dans
   $$ℤ/3ℤ$$ (c'est à dire que tous les calculs s'effectuent modulo 3).
   
   $$\begin{pmatrix}
   1 & 0 & -1 & 1\\
   1 & 1 & -1 & -1\\
   0 & -1 & 0 & 1
   \end{pmatrix}
   \begin{pmatrix}
   1\\0\\-1\\-1
   \end{pmatrix}$$.

2. Calculer le produit matrice-matrice suivant à coefficients dans
   $$ℤ/2ℤ$$.
   
   $$\begin{pmatrix}
   1 & 0 & 0 & 1 & 0 & 1 & 1\\
   1 & 0 & 1 & 1 & 0 & 0 & 0\\
   0 & 1 & 0 & 1 & 1 & 1 & 0\\
   1 & 1 & 0 & 1 & 1 & 0 & 1
   \end{pmatrix}
   \begin{pmatrix}
   0 & 0 & 1\\
   0 & 1 & 0\\
   0 & 1 & 1\\
   1 & 0 & 0\\
   1 & 0 & 1\\
   1 & 1 & 0\\
   1 & 1 & 1\\
   \end{pmatrix}$$.

<!-- ## Espaces vectoriels

1. Quelle est la dimension de l'espace engendré par les vecteurs
   
   $$\begin{pmatrix}
   3\\1\\0\\2
   \end{pmatrix}
   \begin{pmatrix}
   1\\3\\2\\0
   \end{pmatrix}
   \begin{pmatrix}
   -4\\-4\\-2\\-2
   \end{pmatrix}
   \begin{pmatrix}
   1\\1\\0\\-1
   \end{pmatrix}$$

2. Donner une base de l'espace engendré au point précédent.

## Espace vectoriel des polynômes

Les *polynômes de Tchebychev* sont la famille de polynômes $$T_i$$
définie par la récurrence
   
$$\begin{aligned}
T_0(x) &= 1,\\
T_1(x) &= x,\\
T_{n+1}(x) &= 2xT_n(x) - T_{n-1}(x).
\end{aligned}$$

1. Calculer les polynômes de Tchbychev jusqu'à $$T_4$$.

2. Quelle est la dimension de l'espace vectoriel engendré par
$$(T_0,\dots,T_4)$$ ?

3. Calculer la matrice de passage de la base $$(T_0,\dots,T_4)$$ à la
base $$(1, x, x^2, x^3, x^4)$$.

4. Calculer l'écriture de $$x^4 + x^3 + 1$$ dans la base
$$(T_0,\dots,T_4)$$.

5. Calculer la matrice de passage de la base $$(1, x, x^2, x^3, x^4)$$
à la base $$(T_0,\dots,T_4)$$.

6. Prouver que les polynômes de Tchebychev forment une base de
l'espace des polynômes. -->
