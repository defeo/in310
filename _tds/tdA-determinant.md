---
title: Déterminants
---

## Matrices inversibles

1. Relier entre elles chaque matrice avec son inverse.
   
   $$\begin{pmatrix}
   1&2\\6&4
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   1&0\\0&1
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   0&1\\1&0
   \end{pmatrix},\quad
   
   \frac{1}{14}\begin{pmatrix}
   4&-6\\1&2
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   1&0&2\\1&1&-1\\1&2&-3
   \end{pmatrix},
   $$
   
   $$
   \begin{pmatrix}
   2&6\\-1&4
   \end{pmatrix},\quad
   
   -\frac{1}{8}\begin{pmatrix}
   4&-2\\-6&1
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   0&0&1\\1&0&0\\0&1&0
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   -1&4&-2\\2&-5&3\\1&-2&1
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   0&1&0\\0&0&1\\1&0&0
   \end{pmatrix}.
   $$

2. En vous servant de l'exercice précédent, résolvez le système linéaire
   
   $$\left\{\begin{array}{rrrl}
   x & &+ 2z &= 3\\
   x &+ y &- z &= -1\\
   x &+ 2y &+ 3z &= 0
   \end{array}\right.$$

2. Parmi les matrices suivantes, lesquelles sont inversibles ?
   
   $$\begin{pmatrix}
   1&0&0\\0&1&0\\0&0&1
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   1&0&0&0\\0&1&0&0\\0&0&0&1\\0&1&0&1
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   1&2&3\\0&-1&1\\2&4&6
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   1&0&4\\2&-1&8\\-3&0&-12
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   1&0&10\\0&3&-4\\1&3&6
   \end{pmatrix}.$$


## Calcul de déterminants


1. Calculer les déterminants des matrices suivantes.
   
   $$\begin{pmatrix}
   10 & 3\\
   -4 & 1
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   3 & -2\\
   4 & 5
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   0 & -2\\
   -1 & 3
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   4 & 4 & -1\\
   -4 & 1 & 0\\
   3 & 7 & -2
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   1 & 3 & -3 & 1\\
   10 & -2 & 1 & 0\\
   1 & -1 & 0 & 1\\
   2 & 3 & -4 & 1
   \end{pmatrix},
   $$
   
   $$
   \begin{pmatrix}
   0 & 3 & 0 & 1 & -1\\
   -4 & 0 & 1 & 0 & 1\\
   0 & 0 & 1 & -1 & 0\\
   2 & 0 & -2 & 3 & 0\\
   0 & -1 & 1 & 0 & 0
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   10 & 3 & 2 & 1\\
   0 & 1 & -7 & 11\\
   0 & 0 & 3 & 11/7\\
   0 & 0 & 0 & -2
   \end{pmatrix}.
   $$

2. Calculer les déterminants des matrices *élémentaires suivantes*, où
   $$λ$$ est un paramètre
   
   $$\begin{pmatrix}
   1\\
   &1\\
   &&\ddots\\
   &&&\ddots\\
   &&λ&&\ddots\\
   &&&&&1
   \end{pmatrix},\quad
   
   \begin{pmatrix}
   1\\
   &\ddots\\
   &&1\\
   &&&λ\\
   &&&&1\\
   &&&&&\ddots\\
   &&&&&&1
   \end{pmatrix},
   $$
   
   $$
   \begin{pmatrix}
   1\\
   &\ddots\\
   &&1\\
   &&&0&1\\
   &&&1&0\\
   &&&&&1\\
   &&&&&&\ddots\\
   &&&&&&&1
   \end{pmatrix}.
   $$


## Décomposition LU

Soit $$A$$ la matrice

$$\begin{pmatrix}
1 & 0 & 2 &-1\\
1 &-1 &-1 & 0\\
1 & 0 & 4 &-1\\
0 & 1 & 3 & 2
\end{pmatrix}.$$

1. Par la méthode du pivot de Gauß, mettre $$A$$ sous la forme
   $$L_0\dots L_iU=A$$, où $$U$$ est une matrice triangulaire
   supérieure et $$L_0,\dots,L_i$$ sont des *matrices élémentaires*.

2. Par une suite de multiplications, donner une écriture $$LU=A$$, où
   $$L$$ est une matrice triangulaire inférieure et $$U$$ est une
   matrice triangulaire supérieure.

3. Calculer les déterminants de $$L$$, $$U$$ et $$A$$ et comparer les
   résultats.
   
