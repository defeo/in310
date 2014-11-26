---
layout: post
title: Propriétés du déterminant
---

## Matrices de permutation

1. Parmi les matrices suivantes, lesquelles sont des matrices de
   permutation ?
   
   $$\begin{pmatrix}
   1&0\\
   0&1
   \end{pmatrix},\quad
   \begin{pmatrix}
   0&1\\
   1&0
   \end{pmatrix},\quad
   \begin{pmatrix}
   1&0\\
   1&0
   \end{pmatrix},\quad
   \begin{pmatrix}
   1&0&0\\
   0&0&1\\
   0&-1&0
   \end{pmatrix},\quad
   \begin{pmatrix}
   1&1\\
   0&1
   \end{pmatrix},$$
   
   $$\begin{pmatrix}
   1&0&0&0&0\\
   0&1&0&0&0\\
   0&0&0&0&0\\
   0&0&0&0&1\\
   0&0&0&1&0\\
   0&0&1&0&0
   \end{pmatrix},\quad
   \begin{pmatrix}
   0&1&0&0&0\\
   1&0&0&0&0\\
   0&0&0&0&1\\
   0&0&0&1&0\\
   0&0&1&0&0
   \end{pmatrix},\quad
   \begin{pmatrix}
   1&0&0&0&0\\
   0&0&0&0&1\\
   0&1&0&0&0\\
   0&0&0&1&0\\
   0&0&1&0&0
   \end{pmatrix}$$
   
2. Calculer les déterminants des matrices ci-dessus.

3. Uniquement pour les matrices de permutation, calculer la
   permutation $$σ∈\mathcal{S}_n$$ qui correspond à la multiplication
   (à gauche) par ces matrices, et sa décomposition en cycles.

4. En vous aidant avec ce que vous savez sur les permutations,
   calculez les inverses des matrices de permutation.

5. Récrivez les matrices de permutation comme un produit de matrices
   correspondant à leur décomposition en cycles.


## Déterminants

1. Calculer les déterminants des matrices suivantes.
   
   $$\begin{pmatrix}
    1&0& 0&0& 3&0\\
    0&0&-1&0& 0&2\\
    1&1& 0&0& 0&0\\
    0&0& 2&0& 0&0\\
    1&0& 0&0&-3&0\\
   -1&0& 0&1& 0&0
   \end{pmatrix},\quad
   \begin{pmatrix}
   1&2&3&4&5&1\\
   2&3&4&5&6&2\\
   3&4&5&6&1&3\\
   4&5&6&1&2&4\\
   5&6&1&2&3&5\\
   6&1&2&3&4&6
   \end{pmatrix}.$$

2. Soit $$A$$ une matrice de permutation et soit $$A^t$$ sa
   transposée, quel est le déterminant de $$AA^t$$ ?

## Algorithme de Gauss

**À l'aide de l'algorithme de Gauss**, calculer les déterminants des
matrices suivantes.
   
$$\begin{pmatrix}
1&5\\-3&1
\end{pmatrix},\quad
\begin{pmatrix}
a&b\\c&d
\end{pmatrix},\quad
\begin{pmatrix}
1 & 0 & 2 &-1\\
1 &-1 &-1 & 0\\
1 & 0 & 4 &-1\\
0 & 1 & 3 & 2
\end{pmatrix},\quad
\begin{pmatrix}
1&2&3&4\\
-1&-2&0&5\\
0&2&-1&3\\
3&-3&0&1
\end{pmatrix},
$$

$$
\begin{pmatrix}
-a&b&a\\
b&a&a\\
a&a&b
\end{pmatrix},\quad
\begin{pmatrix}
 0 & 0 & 1 &  1 & 0\\
-1 &-2 & 0 &  1 &-1\\
 0 & 0 &-3 &  0 &-1\\
 4 &-2 & 0 &-38 & 0\\
-1 &-2 & 0 &  0 &-1
\end{pmatrix}.
$$
