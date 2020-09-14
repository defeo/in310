---
title: Calcul de l'inverse d'une matrice
---

## Inversibilité d'une matrice

**Théorème.** Une matrice $$A\in M_n(\mathbf{K})$$ est inversible si et seulement si son déterminant est non nul. De plus, si $$A$$ est inversible, alors $$\det(A^{-1}) = 1/\det(A)$$.

On peut facilement montrer un sens du théorème. On suppose que $$A$$ est inversible. Alors on a: 

$$1 = \det(I_n) = \det(A A^{-1}) = \det(A) \det(A^{-1}),$$

donc $$\det(A) \neq 0$$ et en plus on voit directement que  $$\det(A^{-1}) = 1/\det(A)$$.

## Calcul de la matrice inverse

Nous allons présenter deux méthodes différentes pour calculer l'inverse d'une matrice carrée : la *méthode de Cramer* et la méthode de *Gauss-Jordan*.

#### Méthode de Cramer pour l'inversion
Soit $$A = [a_{ij}]$$ une matrice de $$M_n(\mathbf{K})$$. On note $$A_{ij}$$ la matrice obtenue en effaçant la ligne $$i$$ et la colonne $$j$$ de $$A$$. 

 La *comatrice* de $$A$$ est la matrice de  $$M_n(\mathbf{K})$$, notée $$\text{Com } A$$, dont le coefficient à l'intersection de la ligne $$i$$ et la colonne $$j$$ est $$(-1)^{i+j} \det(A_{ij})$$.

**Exemple.** Soit  $$A = \begin{pmatrix} 
 1 & 2 & 0 \\
 0 & 3 &  1  \\
 1 & 1 & 1    \end{pmatrix}$$ alors
 
 $$\text{Com } A = \begin{pmatrix} 
 \det(A_{11}) & -\det(A_{12})  & \det(A_{13})  \\
  -\det(A_{21}) & \det(A_{22})  & -\det(A_{23})  \\
 \det(A_{31}) & -\det(A_{32})  & \det(A_{33}) \end{pmatrix} = \begin{pmatrix} 
 2 & 1 & -3 \\
 -2 & 1 &  1  \\
 2 & -1 & 3
 \end{pmatrix}.$$
 
 **Proposition.** Si $$A\in M_n(\mathbf{K})$$ alors on a 
 
 $$(\text{Com }A)^t A = A^t(\text{Com }A) = (\det A) I_n.$$
 
**Corollaire.** Si $$A$$ est une matrice inversible de $$M_n(\mathbf{K})$$, alors on a 
 
 $$A^{-1} = \frac{1}{\det(A)} (\text{Com }A)^t.$$
 
 *Démonstration*. D'après la proposition précédente, nous avons
 
 $$(\text{Com }A)^t A = (\det A) (A^{-1}A) \Leftrightarrow (\text{Com }A)^t = (\det A)(A^{-1}),$$

 donc 
 
 $$A^{-1} = \frac{1}{\det(A)} (\text{Com }A)^t.$$
 
**Exemple (suite).** Calculons l'inverse de la matrice précédente. On calcule d'abord le déterminant de $$A$$.
$$\det(A) = \det \begin{pmatrix} 
 3 &  1  \\
 1 & 1  \end{pmatrix} + \det \begin{pmatrix} 
 2 &  0  \\
 3 & 1 \end{pmatrix} = 2 + 2 = 4.$$
 
 Donc $$A^{-1} = \frac{1}{4} \begin{pmatrix} 
 2 & -2 & 2 \\
 1 & 1 &  -1  \\
 -3 & 1 & 3 \end{pmatrix}$$
 
#### Calcul de l'inverse par la méthode de Gauss-Jordan

Soit une matrice $$A \in M_n(\mathbf{K})$$ inversible. Pour amener $$A$$ à une forme échelonnée réduite nous appliquons à la matrice $$A$$ des opérations élémentaires sur les lignes. Cependant, une opération élémentaire sur les lignes de $$A$$ correspond à multiplier à gauche la matrice $$A$$ par une matrice élémentaire. On suppose que nous avons besoin de $$k$$ opérations élémentaires afin d'amener $$A$$ à sa forme échelonnée réduite, qui dans le cas d'une matrice carrée correspond simplement à la matrice identité. Dans ce cas nous multiplions $$A$$ par $$k$$ matrices élémentaires:

$$E_1E_2\dots E_k A = I_n.$$

Puisque la matrice est inversible nous pouvons multiplier les deux côtés par $$A^{-1}$$.

$$E_1E_2\dots E_k AA^{-1} = I_nA^{-1} \Leftrightarrow E_1E_2\dots E_k I_n = A^{-1}.$$

Ceci veut dire qu'en appliquant ces mêmes opérations élémentaires à la matrice identité, nous obtenons directement la matrice inverse. L'idée est alors de commencer par une matrice de la forme $$A$$ et de la transformer à l'aide d'opérations élémentaire à une forme . Dans ce cas $$B = A^{-1}$$.

**Exemple.** Calculer l'inverse de la matrice $$A =  \begin{pmatrix}
 2 & -4 & 4 \\
 2 & 0 &  1  \\
 4 & 1 & 1 \end{pmatrix}$$
 
 On commence par créer la matrice $$A | I_3 =  \left( \begin{array}{cccccc}
 2 & -4 & 4 & 1 & 0 & 0\\
 2 & 0 &  1  &0 &1 & 0\\
 4 & 1 & 1  & 0 & 0 & 1  \end{array} \right)$$
 
 En effectuant ensuite des opérations élémentaires sur cette matrice nous essayons de la ramener sous la forme $$I_3 | B$$, où selon la théorie, la matrice $$B$$ sera la matrice $$A^{-1}$$ recherchée.
 
 On commence par l'opération $$L_2 \leftarrow L_2 - L_1$$:
 
  $$\left( \begin{array}{cccccc}
 2 & -4 & 4 & 1 & 0 & 0\\
 0 & 4 &  -3  &-1 &1 & 0\\
 4 & 1 & 1  & 0 & 0 & 1    \end{array} \right)$$
 
 On applique ensuite l'opération $$L_3 \leftarrow L_3 - 2L_1$$:
 
  $$\left( \begin{array}{cccccc}
 2 & -4 & 4 & 1 & 0 & 0\\
 0 & 4 &  -3  &-1 &1 & 0\\
 0 & 9 & -7  & -2 & 0 & 1    \end{array} \right)$$

On fait $$L_3 \leftarrow L_3 - \frac{9}{4}L_2$$:
 
  $$\left( \begin{array}{cccccc}
 2 & -4 & 4 & 1 & 0 & 0\\
 0 & 4 &  -3  &-1 &1 & 0\\
 0 & 0 & -1/4  & 1/4 & -9/4 & 1    \end{array} \right)$$
 
 $$L_3 \leftarrow  - 4L_3$$:
 
  $$\left( \begin{array}{cccccc}
 2 & -4 & 4 & 1 & 0 & 0\\
 0 & 4 &  -3  &-1 &1 & 0\\
 0 & 0 & 1  & -1 & 9 & -4    \end{array} \right)$$
 
 $$L_2 \leftarrow L_2 + 3L_3$$:
 
  $$\left( \begin{array}{cccccc}
 2 & -4 & 4 & 1 & 0 & 0\\
 0 & 4 &  0  &-4 &28 & -12\\
 0 & 0 & 1  & -1 & 9 & -4    \end{array} \right)$$

$$L_1 \leftarrow L_1 - 4L_3$$:
 
  $$\left( \begin{array}{cccccc}
 2 & -4 & 0 & 5 & -36 & 16\\
 0 & 4 &  0  &-4 &28 & -12\\
 0 & 0 & 1  & -1 & 9 & -4    \end{array} \right)$$
 
 $$L_1 \leftarrow L_1 + L_2$$:
 
  $$\left( \begin{array}{cccccc}
 2 & 0 & 0 & 1 & -8 & 4\\
 0 & 4 &  0  &-4 &28 & -12\\
 0 & 0 & 1  & -1 & 9 & -4    \end{array} \right)$$
 
 $$L_2 \leftarrow \frac{1}{4}L_2$$:
 
  $$\left( \begin{array}{cccccc}
 2 & 0 & 0 & 1 & -8 & 4\\
 0 & 1 &  0  &-1&7 & -3\\
 0 & 0 & 1  & -1 & 9 & -4    \end{array} \right)$$
 
 $$L_1 \leftarrow \frac{1}{2}L_1$$:
 
  $$\left( \begin{array}{cccccc}
 1 & 0 & 0 & 1/2 & -4 & 2\\
 0 & 1 &  0  &-1 &7 & -3\\
 0 & 0 & 1  & -1 & 9 & -4    \end{array} \right),$$
 donc on obtient finalement
 
 $$A^{-1} = \left( \begin{array}{ccc}
  1/2 & -4 & 2\\
-1 &7 & -3\\
  -1 & 9 & -4    \end{array} \right)$$
  

 
