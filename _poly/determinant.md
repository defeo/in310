---
title: Déterminant
---
## Matrice inverse
 
 Soit une matrice carrée $$A \in M_{n}(\mathbf{K})$$. On dit que la matrice $$A$$ est **inversible** s'il existe une matrice, notée $$A^{-1}$$, telle que $$AA^{-1} = A^{-1}A = I_n$$, où $$I_n$$ est la matrice identité $$n\times n$$.

Un système linéaire d'équations peut toujours se representer sous forme matricielle $$AX = B$$. Résoudre le système $$AX = B$$, c'est trouver explicitement toutes les matrices $$X$$ telles que $$AX = B$$, s'il en existe. Quand  $$A$$ est une matrice carrée, nous avons le résultat suivant:

**Théorème.** Soient $$A\in M_n(\mathbf{K})$$ et $$B \in M_{n,1}(\mathbf{K})$$. Si la matrice $$A$$ est inversible, alors la seule solution du système $$AX = B$$ est la matrice $$A^{-1}B$$.

*Démonstration.* Nous avons $$A(A^{-1}B) = (A^{-1}A)B = I_nB = B$$, donc $$A^{-1}B$$ est bien une solution du système. Soit maintenant $$X$$ une matrice de  $$M_{n,1}(\mathbf{K})$$ qui soit une solution du système, c'est-à-dire $$AX = B$$. On a $$A^{-1}(AX) = A^{-1}B$$, donc $$(A^{-1}A)X = A^{-1}B$$ ou encore $$X = A^{-1}B$$.

Un outil de calcul important pour determiner si une matrice carrée est inversible  est ce qu'on appelle le **déterminant** d'une matrice.


## Déterminant 
 Si $$A\in M_{n}(\mathbf{K})$$, le déterminant de $$A$$, noté $$\det(A)$$ ou bien $$|a_{i,j}|$$ si $$A$$ est la matrice $$[a_{i,j}]$$, est un élément de $$\mathbf{K}$$ que l'on définit par récurrence de la manière suivante:

* Si $$n = 1$$ et $$A = [a]$$, alors $$\det(A) = a$$.
* Si $$n \ge 2$$ et $$A = [a_{i,j}]$$, on note $$A_i$$ la sous-matrice de $$A$$ obtenue en enlevant la première colonne et la $$i$$-ème ligne. On a alors:

$$\begin{aligned}
\det(A) &= \sum_{i=1}^n (-1)^{1+i} a_{i,1}\det(A_i)\\
&= a_{1,1}\det(A_1) - a_{2,1}\det(A_2) + \dots + (-1)^{n+1}\det(A_n).
\end{aligned}$$

Si $$n \ge 2$$, le déterminant d'une matrice $$n\times n$$ est donc défini au moyen de $$n$$ déterminants de matrices $$(n-1)\times (n-1)$$. 

**Exemple.** Soit $$n = 2$$ et $$A = \begin{pmatrix}
a & b \\
c & d   \end{pmatrix}.$$

On a: $$\det(A) = a\det([d]) - c\det([b]) = ad - bc$$.

**Exemple.** Soit $$A = \begin{pmatrix}
1 & 1 & -1\\
-1 & 4 & 1\\
3 & 2 & 1\end{pmatrix}$$


On a 
$$\begin{aligned}
\det(A) &= 1\cdot \det \begin{pmatrix}
4 & 1 \\
2 & 1   \end{pmatrix} -(-1) \det \begin{pmatrix}
1 & -1 \\
2 & 1   \end{pmatrix} + 3\cdot \det \begin{pmatrix}
1 & -1 \\
4 & 1   \end{pmatrix}\\
&= (4-2) + (1 + 2) + 3(1+4) \\
&= 20.
\end{aligned}$$

Calculer le déterminant d'une matrice en utilisant la définition est en général laborieux. Nous allons maintenant établir des propriétés rendant plus simple le calcul d'un déterminant.

### Propriétés du déterminant

Nous donons ici une liste des propriétés les plus importantes du déterminant. La plupart sont énoncées sans preuve.

Soient $$A, B \in M_{n}(\mathbf{K})$$.

1. Si $$A$$ est une matrice diagonale, triangulaire, supérieure ou inférieure, alors le déterminant de $$A$$ est égal au produit des coefficients diagonaux de $$A$$.

*Démonstration*. On montrera par induction le résultat pour les matrices triangulaires supérieures. 

 **Case de base**: $$n = 2$$. Soit $$A =  \begin{pmatrix}
a & b \\
0 & d\end{pmatrix}$$

Alors $$\det(A) = ad - b\cdot 0 = ad$$ donc le résultat est vérifié. 

**Hérédité**: On suppose maintenant que le résultat est vrai pour les matrices triangulaires supérieurs $$(n-1) \times (n-1)$$ et on va montrer que c'est également vrai pour des matrices triangulaires supérieurs $$n \times n$$.

Soit $$A =  \begin{pmatrix}
a_{11} & a_{12} & a_{13} & \dots & a_{1n} \\
0 & a_{22} & a_{23} & \dots & a_{2n} \\
0 & 0 & a_{33} & \dots & a_{3n} \\
\vdots & \vdots & \vdots & & \vdots \\
0 & 0 & \dots & \dots & a_{nn} \end{pmatrix}$$

On a alors 

$$\det(A) =  a_{11} \det \begin{pmatrix}
 a_{22} & a_{23} & \dots & a_{2n} \\
 0 & a_{33} & \dots & a_{3n} \\
 \vdots & \vdots & & \vdots \\
 0 & \dots & \dots & a_{nn} \end{pmatrix}$$
 
 Par l'hypothèse d'hérédité, le déterminant de cette matrice est $$a_{22}a_{33}\dots a_{nn}$$ donc $$\det(A) = a_{11}a_{22}a_{33}\dots a_{nn}$$ et le résultat est démontré.

2. $$\det(AB) = \det(A)\det(B).$$

3. Soit $$A'$$ la matrice obtenue en multipliant une colonne de $$A$$ par un scalaire non-nul $$\lambda$$, alors $$\det(A')=\lambda \det(A)$$.

*Démonstration*. On va faire une preuve par récurrence sur la taille $$n$$ de la matrice. 

**Cas de base**: $$n = 2$$. Soit $$A =  \begin{pmatrix}
a & b \\
c & d\end{pmatrix} \quad \mathrm{et}  \quad A' =  \begin{pmatrix}
a & \lambda b \\
c & \lambda d \end{pmatrix}.$$

On a alors $$\det(A') = \lambda a d - \lambda bc = \lambda(ad - bc) = \lambda \det(A).$$

De la même façon, si $$A' =  \begin{pmatrix}
\lambda a & b \\
\lambda c & d \end{pmatrix}$$

on a $$\det(A') = \lambda a d - \lambda bc = \lambda(ad - bc) = \lambda \det(A).$$

On suppose maintenant que le résultat est vrai pour toute matrice de taille $$(n-1) \times (n-1)$$ et on va montrer que le résultat est vrai pour une matrice de taille $$n\times n$$.

Soit $$A' =  \begin{pmatrix}
a_{11} & a_{12} & \dots & \lambda a_{1i} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots &  \lambda a_{2i} & \dots & a_{2n} \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots \\
a_{n1} & a_{n2} & \dots &  \lambda a_{ni} & \dots & a_{nn} 
 \end{pmatrix}$$

On a 

$$\begin{aligned}
\det(A') &= a_{11} \det \begin{pmatrix}
 a_{22} & \dots &  \lambda a_{2i} & \dots & a_{2n} \\
 \vdots & \vdots & \vdots & \vdots & \vdots \\
 a_{n2} & \dots &  \lambda a_{ni} & \dots & a_{nn} 
 \end{pmatrix} + \dots + a_{n1}(-1)^{n+1} \det \begin{pmatrix}
 a_{12} & \dots &  \lambda a_{1i} & \dots & a_{1n} \\
 \vdots & \vdots & \vdots & \vdots & \vdots \\
 a_{(n-1)2} & \dots &  \lambda a_{(n-1)i} & \dots & a_{(n-1)n} 
 \end{pmatrix} \\
 &= a_{11} \lambda \det \begin{pmatrix}
 a_{22} & \dots &  a_{2i} & \dots & a_{2n} \\
 \vdots & \vdots & \vdots & \vdots & \vdots \\
 a_{n2} & \dots &   a_{ni} & \dots & a_{nn} 
 \end{pmatrix} + \dots + a_{n1}(-1)^{n+1} \lambda \det \begin{pmatrix}
 a_{12} & \dots &   a_{1i} & \dots & a_{1n} \\
 \vdots & \vdots & \vdots & \vdots & \vdots \\
 a_{(n-1)2} & \dots &  a_{(n-1)i} & \dots & a_{(n-1)n} 
 \end{pmatrix} \\
 &= \lambda \left(a_{11}\det \begin{pmatrix}
 a_{22} & \dots &  a_{2i} & \dots & a_{2n} \\
 \vdots & \vdots & \vdots & \vdots & \vdots \\
 a_{n2} & \dots &   a_{ni} & \dots & a_{nn} 
 \end{pmatrix} + \dots + a_{n1}(-1)^{n+1} \det \begin{pmatrix}
 a_{12} & \dots &   a_{1i} & \dots & a_{1n} \\
 \vdots & \vdots & \vdots & \vdots & \vdots \\
 a_{(n-1)2} & \dots &  a_{(n-1)i} & \dots & a_{(n-1)n} 
 \end{pmatrix} \right)\\
 &= \lambda \det(A).
\end{aligned}$$
 
4. Soit $$A'$$ la matrice obtenue en échangeant deux colonnes de $$A$$, alors $$\det(A')=-\det(A)$$.

5. Soit $$A_i$$ la $$i$$-ème colonne de $$A$$, soit $$A'$$ la matrice obtenue en remplaçant $$A_i$$ par $$A_i +\lambda A_j,$$ avec $$i\neq j$$, alors $$\det(A)= \det(A')$$.

6. $$\det(A^t) = \det(A)$$, où $$A^t$$ est la matrice transposée de $$A$$.

**Remarque.** Une conséquence du dernier résultat sur la trannsposition, est que tout ce que l’on a dit des déterminants à propos des colonnes est vrai également pour les lignes:

1. $$L_i \leftarrow \lambda L_i$$ avec $$\lambda \neq 0$$ : le déterminant est multiplié par $$\lambda$$.
2. $$L_i \leftarrow L_i + \lambda L_j$$ avec $$j\neq i$$ : le déterminant ne change pas.
2. $$L_i \leftrightarrow L_j$$: le déterminant change de signe.

En particulier, grâce aux propriétés ci-dessus, nous pouvons voir qu'il est possible de calculer le déterminant en développant par rapport à n'importe laquelle ligne ou colonne de la matrice.

On note $$A_{ij}$$ la matrice extraite, obtenue en effaçant la ligne $$i$$ et la colonne $$j$$ de $$A$$.

**Formule de développement par rapport à la ligne $$i$$.**

$$\det(A) = \sum_{j=1}^n (-1)^{i+j}a_{ij}\det(A_{ij})$$
 
**Formule de développement par rapport à la colonne $$j$$.**

$$\det(A) = \sum_{i=1}^n (-1)^{i+j}a_{ij}\det(A_{ij})$$

Pour calculer un déterminant on doit:

* Choisir une ligne (ou une colonne) qui a le plus de 0.
* Si cela est possible, augmenter le nombre de ces 0 par opérations élémentaires sur les colonnes (ou sur les lignes)
* Développer le déterminant selon cette ligne (ou colonne), sans oublier l'alternance des signes.

**Remarque.** Pour savoir par quel signe il faut commencer quand on développe un déterminant selon une ligne ou une colonne, on peut remplir un tableau à $$n$$ lignes et $$n$$ colonnes avec les signes: les signes sont alternés et on commence en haut à gauche par le signe $$+$$.

$$\begin{pmatrix} + & - &  + & - & \dots \\ - & + & - & + &\dots \\ + & - &  + & - & \dots \\
\vdots &\vdots &\vdots &\vdots & 
\end{pmatrix}$$

**Exemple.** Soit $$A = \begin{pmatrix}
 2 & 4 &  0 \\
 3 & 0 &  2  \\
 -2 & 2 & 0 
 \end{pmatrix}$$
 
 On dresse d'abord le tableau de signes:
 
 $$\begin{pmatrix} + & - &  +   \\ - & + &  -   \\ + & - &  +     \end{pmatrix}$$

On développe par rapport à la troisième colonne. On a donc

$$\det(A) = -2 \det \begin{pmatrix} 
 2 & 4    \\
 -2 & 2  \end{pmatrix} = -2(2\times 2 - (-2)\times 4) = -2(4 + 8) = 24.$$
 
### Calcul du déterminant par pivot de Gauss
 
 Les propriétés énoncés ci-dessus impliquent que l’algorithme du pivot de Gauss sans échanges de lignes ou de colonnes préserve la valeur du déterminant.

Lorsqu’on autorise les échanges dans l’algorithme de Gauss, il faut tenir compte du nombre d’échanges effectués pour décider du signe du déterminant.

**Attention** : Seuls les pivots qui remplacent une ligne $$A_i$$ par une ligne $$A_i+ \lambda A_j$$, avec $$i \neq j$$, préservent le déterminant. Les pivots de la forme $$\mu A_i+\lambda A_j$$ le multiplient par $$\mu$$.

**Example.** Soit $$A = \begin{pmatrix} 
 -2 & 2 & -3 \\
 -1 & 1 &  3  \\
 2 & 0 & -1   \end{pmatrix}$$
 
 On a 
 
 $$\begin{aligned}
 \det(A) &= \det \begin{pmatrix} 
 -2 & 2 & -3 \\
 -1 & 1 &  3  \\
 0 & 2 & -4   \end{pmatrix} =  \det \begin{pmatrix} 
 -2 & 2 & -3 \\
 0 & 0 &  9/2  \\
 0 & 2 & -4 \end{pmatrix} = -\det \begin{pmatrix} 
 -2 & 2 & -3 \\
 0 & 2 & -4 \\
  0 & 0 &  9/2  \\ \end{pmatrix} \\
  &= (-2)\times 2 \times 9/2 = 2\times 9 = 18.
 \end{aligned}$$

