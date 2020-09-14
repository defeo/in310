---
title: Méthode de Cramer pour la résolution d'un système linéaire
---

 
 La *méthode de Cramer* permet de calculer explicitement les solutions d'un système linéaire à $n$ variables et $n$ inconnues ayant une solution unique (c.-à-d.  le déterminant de la matrice de coefficients est non nul). Un tel système est souvent appelé *système de Cramer*. Pour un système linéaire avec $$n$$ variables et $$n$$ inconnues, cette méthode permet de relier la solution $$(x_1, \dots, x_n)$$ du système aux coefficients.
 
 En calcul, la méthode est moins efficace que la méthode de résolution de Gauss pour des grands systèmes (à partir de quatre équations) dont les coefficients dans le premier membre sont explicitement donnés. Cependant, elle est d'importance théorique pour la raison qu'elle donne une expression explicite pour la solution du système, et elle s'applique dans des systèmes où par exemple les coefficients du premier membre dépendent de paramètres, ce qui peut rendre la méthode de Gauss inapplicable.
 
 Commençons par le cas $$n=2$$. Soit le système 
 
 $$\begin{aligned}
 a_{11}x_1 + a_{12}x_2 &= b_1 \\
 a_{21}x_1 + a_{22}x_2 &= b_2 \\
 \end{aligned}$$
 
 Ce système a une solution unique si et seulement si son déterminant $$\Delta$$ est non nul.
 
 $$\Delta = \det \left( \begin{array}{cc}
 a_{11} & a_{12} \\
a_{21} & a_{22}       \end{array} \right) = a_{11}a_{22} - a_{12}a_{21} \neq 0.$$

Essayons de résoudre ce système. On remplace la deuxième ligne $$L_2$ par $$a_{11}L_2 -a_{21}L_1 $, ce qui donne

$$\begin{aligned}
 a_{11}x_1 + a_{12}x_2 &= b_1 \\
 (a_{11}a_{22}- a_{21}a_{12}) x_2 &= a_{11}b_2 - a_{21}b_1. \\
 \end{aligned}$$
 
 On obtient donc directement la solution du système 
 
 $$\begin{aligned}
 x_1 &=& \frac{ a_{22}b_1 - a_{12}b_2}{a_{11}a_{22}- a_{21}a_{12}} = \frac{ a_{22}b_1 - a_{12}b_2}{\Delta} = \frac{\det \left(\begin{array}{cc}
 b_{1} & a_{12} \\
b_{2} & a_{22}       \end{array} \right)}{\Delta} \\
 x_2 &=& \frac{ a_{11}b_2 - a_{21}b_1}{a_{11}a_{22}- a_{21}a_{12}} = \frac{ a_{11}b_2 - a_{21}b_1}{\Delta} = \frac{\det \left(\begin{array}{cc}
 a_{11} &b_{1}   \\
 a_{21}  &b_{2}      \end{array} \right)}{\Delta}
 \end{aligned}$$
 
 Nous pouvons maintenant généraliser la méthode ci-dessus à un système de Cramer de taille $$n\ge 3$$.
 
Soit $$A\in M_n{\mathbf{K}}$$ et $$B, X \in M_{n,1}(\mathbf{K})$$
Soit le système d'équations à $$n$$ équations et $$n$$ variables 

$$\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \dots a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots a_{2n}x_n &= b_2 \\
 &= \vdots \\
a_{n1}x_1 + a_{n2}x_2 + \dots a_{nn}x_n &= b_n \\
\end{aligned}$$

représenté sous forme d'un produit matriciel:

$$\begin{pmatrix}
 a_{11} & a_{12} & \dots & a_{1n}  \\
 a_{21}& a_{22} & \dots & a_{2n} \\
 \vdots & \vdots & \ddots & \vdots \\
 a_{n1} & a_{n2} &  \dots & a_{nn} 
 \end{pmatrix} \begin{pmatrix}
 x_{1}  \\
 x_2 \\
 \vdots  \\
 x_n \end{pmatrix}  = \begin{pmatrix}
 b_{1}  \\
 b_2 \\
 \vdots  \\
 b_n \end{pmatrix} \Leftrightarrow AX = B.$$

Si la matrice $$A$$ est inversible (c'est-à-dire $$\det(A) \neq 0$$), alors le système admet une unique solution $$(x_1, x_2, \dots, x_n)$$ donnée par

$$x_i = \frac{\det(A_i)}{\det(A)}, \quad i = 1, \dots, n,$$

où $$A_i$$ est la matrice carrée formée en remplaçant la $$i$$-ème colonne de $$A$$ par le vecteur $B$.

*Exemple.* Résoudre le système suivant à l'aide des formules de Cramer.

$$\begin{aligned}
 4x_1  - 3x_2 &= 11 \\
  2x_1  + x_2 &= 3\\
 \end{aligned}$$
 
 On a $$A = \begin{pmatrix}
 4 &  -3  \\
 2 & 1      \end{pmatrix} \text{ et } B = \begin{pmatrix}
 11  \\
 3  \end{pmatrix}.$$

On calcule $$\det(A) = 4\cdot 1 + 3\cdot 2 = 10 \neq 0$$ donc la matrice $A$ est inversible est le système a une solution unique. 

Cette solution est donnée par 

$$\begin{aligned}
 x_1 &=  \frac{\det \begin{pmatrix}
 b_{1} & a_{12} \\
b_{2} & a_{22} \end{pmatrix}}{\Delta} =  \frac{\det \begin{pmatrix}
 11 & -3 \\
3 & 1 \end{pmatrix}}{10}  = \frac{11\cdot 1 + 3\cdot 3}{10} = 2\\
 x_2 &=  \frac{\det \begin{pmatrix}
 a_{11} &b_{1}   \\
 a_{21}  &b_{2}  \end{pmatrix}}{\Delta} = \frac{\det \begin{pmatrix}
 4 & 11 \\
2 & 3  \end{pmatrix}}{10}  = \frac{4\cdot 3 - 11\cdot 2}{10} = -1.
 \end{aligned}$$
 



