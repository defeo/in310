---
title: Algèbre linéaire
---

## Matrice inverse

Soit $$A$$ une matrice carrée $$n×n$$, on dit que $$A$$ est inversible
s'il existe une matrice, notée $$A^{-1}$$, telle que
$$AA^{-1}=A^{-1}A=I$$, où $$I$$ est la *matrice identité* $$n×n$$.

L'ensemble $$\mathcal{M}_n(K)$$ des matrices carrées à coefficients
dans un [corps](../algebre-abstraite) $$K$$ forme un
[anneau](../algebre-abstraite), dont les éléments inversibles
sont exactement les matrices inversibles.

## Déterminant

Soit $$A$$ une matrice carrée $$n×n$$, de coefficients $$a_{i,j}$$, le
déterminant de $$A$$ est défini comme

$$\det(A) = \sum_{σ∈\mathcal{S}_n} \mathrm{sig}(σ) \prod_{i=1}^n
a_{i,σ(i)},$$

où

- $$\mathcal{S}_n$$ est le groupe des [permutations](../permutation) à
  $$n$$ éléments ;
- $$\mathrm{sig}(σ)$$ est la *signature* de $$σ$$, qui vaut 1 si $$σ$$
  est composé d'un nombre pair de [transpositions](../permutation), ou -1
  si $$σ$$ est composé d'un nombre impair de
  [transpositions](../permutation).
- $$σ(i)$$ est l'image de l'entier $$1≤i≤n$$ par la permutation $$σ$$.

### Formule de Lagrange

La même formule est exprimée de façon récursive par la formule
suivant, due à Lagrange.

On note $$A_i$$ la sous-matrice de $$A$$ obtenue en enlevant la
première colonne et la $$i$$-ème ligne. On a alors

$$\det(A) = \sum_{i=1}^n (-1)^i a_{i,1}\det(A_i).$$

### Propriété fondamentale du déterminant

Soit $$A$$ une matrice carrée, $$\bar{x}$$ un vecteur d'inconnues
$$(x_1,\dots,x_n)$$, $$b$$ un vecteur de scalaires
$$(b_1,\dots,b_n)$$, alors

$$\det(A) ≠ 0 \quad⇔\quad A\text{ est inversible} \quad⇔\quad
A\bar{x}=b \text{ a une unique solution}.$$

### Propriétés du déterminant

Pour toutes matrices $$A,B$$ carrées de taille $$n×n$$, les propriétés
suivantes sont vérifiés :

- $$\det(AB)=\det(A)\det(B)$$ ;
- $$\det(A^t)=\det(A)$$, où $$A^t$$ est la *transposée* de $$A$$ ;
- soit $$A_i$$ la $$i$$-ème colonne de $$A$$, soit $$A'$$ la matrice
  obtenue en remplaçant $$A_i$$ par $$A_i+λA_j$$, avec $$i≠j$$, alors
  $$\det(A)=\det(A')$$ ;
- Soit $$A'$$ la matrice obtenue en échangeant deux colonnes de $$A$$,
  alors $$\det(A')=-\det(A)$$.

Les matrices diagonales, triangulaires supérieures et triangulaires
inférieures satisfont toutes la propriété

$$\det(A) = \prod_{i=1}^n a_{i,i}.$$

### Calcul du déterminant par pivot de Gauss

Les propriétés énoncés ci-dessus impliquent que l'algorithme du pivot
de Gauss sans échanges de lignes ou de colonnes préserve la valeur du
déterminant.

Lorsqu'on autorise les échanges dans l'algorithme de Gauss, il faut
tenir compte du nombre d'échanges effectués pour décider du signe du
déterminant.

**Attention :** seuls les pivots qui remplacent une ligne $$A_i$$ par
une ligne $$A_i + λA_j$$, avec $$i≠j$$, préservent le déterminant. Les
pivots de la forme $$μA_i + λA_j$$ le multiplient par $$μ$$.


## Formules de Cramer

Soit $$A$$ une matrice carrée, et soit $$A_{i,j}$$ la matrice obtenue
en enlevant la $$i$$-ème ligne et la $$j$$-ème colonne de $$A$$. La
**comatrice** de $$A$$ est la matrice

$$\begin{pmatrix}
\det(A_{1,1})  & -\det(A_{2,1}) & \cdots & (-1)^n\det(A_{n,1})\\
-\det(A_{1,2}) & \det(A_{2,2})  & \cdots & -(-1)^n\det(A_{n,2})\\
\vdots         &      \vdots    &        & \vdots\\
(-1)^n\det(A_{1,n}) & -(-1)^n\det(A_{2,n}) & & \det(A_{n,n})
\end{pmatrix}.$$

**Proposition :** Soit $$A$$ une matrice et $$A^*$$ sa comatrice, on a
$$AA^*=A^*A=\det(A)I$$.

Une conséquence immédiate de cette proposition est la suivante, connue
sous le nom de *formule de Cramer* :

Soit $$A$$ une matrice $$n×n$$ inversible, soit $$\bar{x}$$ un vecteur
d'inconnues, soit $$b$$ un vecteur de scalaires, le système
$$A\bar{x}=b$$ a pour solution

$$x_i=\frac{\det(A_i)}{\det(A)},$$

où $$A_i$$ est la matrice obtenue en remplaçant la $$i$$-ème colonne
de $$A$$ par $$b$$.


## Calcul de l'inverse par pivot de Gauss

Soit $$A$$ une matrice inversible $$n×n$$, la solution à l'équation

$$AX=I,$$

où $$X$$ est une matrice inconnue et $$I$$ est la matrice identité
peut être trouvée par pivot de Gauss en résolvant colonne-par-colonne.

Cette méthode est appelée *méthode de Gauss-Jordan*. Il est usuel de
faire les calculs de cette méthode en écrivant la matrice $$A|I$$,
obtenue par juxtaposition de $$A$$ et de la matrice identité, et en
appliquant la méthode de Gauss jusqu'à faire apparaître la matrice
identité à gauche, sous la forme $$I|B$$. Il est alors immédiat de
vérifier que $$B$$ est l'inverse de $$A$$.


## Références

F. Liret, D. Martinais. *Algèbre 1re année*.
: 2e édition. Dunod, 2003. ISBN 2-10-005548-8. Côte BU : 512 LIR.
