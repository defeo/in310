---
title: Introduction aux matrices
---

## Définitions

Soit $$\mathbf{K}$$ un corps. Par exemple $$\mathbf{K}$$ peut désigner $$\mathbb{R}, \mathbb{Q}, \mathbb{C}$$, ou encore $$\mathbb{Z}/n\mathbb{Z}$$, pour $$n$$ un nombre premier.

Pour tout entiers positifs, $$n$$, $$p$$, une *matrice* $$n\times p$$ à coefficients dans $$\mathbf{K}$$ est un tableau d'éléments de $$\mathbf{K}$$ à $$n$$ lignes et à $$p$$ colonnes, que l'on note

$$\begin{pmatrix}
a_{11} & \cdots & a_{1p} \\
\vdots &  & \vdots \\
a_{n1} & \cdots & a_{np}
\end{pmatrix}.$$


Les $$a_{ij}$$ s'appellent les *coefficients* de la matrice ; le premier indice est celui de la ligne et le second est celui de la colonne. Quand une matrice admet autant de lignes que de colonnes $$(n = p)$$ on parle de *matrice carrée*.

**Notation**. L'ensemble des matrices $$n\times p$$ à coefficients dans $$\mathbf{K}$$ se note $$M_{n,p}(\mathbf{K})$$ et plus simplement $$M_n(\mathbf{K})$$ si $$n=p$$.  

**Remarque**. L'ensemble $$M_n(\mathbf{K})$$ muni des opérations usuelles d'addition et de multiplication des matrices est un anneau unitaire non commutatif. Les éléments inversibles de cet anneau sont exactement les matrices inversibles.

## Multiplication de matrices

### Produit matrice-vecteur
Soient $$A$$ une matrice de $$M_{n,p}(\mathbf{K})$$ et $$B$$ une matrice de $$M_{p,1}(\mathbf{K})$$. Le *produit* de $$A$$ par $$B$$ noté $$AB$$ ou $$A\times B$$, est la matrice $$n \times 1$$ dont la $$i$$-ième ligne est le produit de la $$i$$-ième ligne de $$A$$ par la matrice-colonne $$B$$.

**Exemple**: Soit $$A = \begin{pmatrix}
3 & 0 & 1 \\
1 & -1 & 5 \\
0 & 0 & 1 \\
-1 & 2 & 0 \end{pmatrix}  \quad \mathrm{et} \quad   B = \begin{pmatrix}
1  \\
 2  \\
3  \end{pmatrix}.$$

On a 

$$AB = \begin{pmatrix}
3\cdot 1 + 0 \cdot 2 + 1\cdot 3 \\
1\cdot 1  -1 \cdot 2 + 5\cdot 3  \\
0\cdot 1 + 0 \cdot 2 + 1\cdot 3  \\
-1\cdot 1 + 2 \cdot 2 + 0\cdot 3  \end{pmatrix}   = \begin{pmatrix} 
6  \\
 14  \\
3  \\
3 \end{pmatrix}.$$


Soit $$A$$ une matrice de $$M_{n,p}(\mathbf{K})$$ et $$B$$ une matrice de $$M_{p,q}(\mathbf{K})$$. Le *produit* de $$A$$ par $$B$$, noté $$AB$$, est la matrice $$n \times q$$ dont la $$j$$-ième colonne est le produit de $$A$$ par la $$j$$-ième colonne de $$B$$.

**Exemple**: Soit $$A = \begin{pmatrix}
3 & 0 & 1 \\
1 & -1 & 5 \\
0 & 0 & 1 \\
-1 & 2 & 0 \end{pmatrix}  \quad \mathrm{et} \quad  B = \begin{pmatrix}
1  & 2\\
 2  & 0\\
3  & 3\end{pmatrix}$$

On a  

$$AB = \begin{pmatrix} 
6 &3\cdot 2+ 0 \cdot 0 + 1\cdot 3 \\
14 &1\cdot 2  -1 \cdot 0 + 5\cdot 3  \\
3 & 0\cdot 2 + 0 \cdot 0 + 1\cdot 3  \\
3 &-1\cdot 2 + 2 \cdot 0 + 0\cdot 3  \end{pmatrix}   = \begin{pmatrix}
6  & 9 \\
14  & 17 \\
3  & 3 \\
3 & -2 \end{pmatrix}$$

## Systèmes d'équations linéaires
Une *équation linéaire* en les variables $$x_1, \dots, x_n$$ est une équation qui peut s'écrire sous la forme 

$$a_1x_1 + a_2x_2 + \dots + a_nx_n = b,$$

où $$b$$ et les coefficients $$a_1, \dots, a_n$$ sont dans $$\mathbf{K}$$.

Un *système d'équations linéaires* (ou *système linéaire*) est une collection d'une ou plusieurs équations linéaires relatives au même ensemble de variables, à savoir $$x_1, \dots, x_n$$.

**Exemple:** Système de trois équations linéaires en les variables $$x_1, x_2, x_3$$.

$$\begin{aligned}
x_1 + 3x_2+ 4x_3 &= 25\\
4x_2 + 4x_3 &= 8\\
-3x_1 - 7x_2 - 9x_3 &= -67 \\
\end{aligned}$$

Nous pouvons résumer l'essentiel  de l'information présente dans un système linéaire à l'aide des matrices. La *matrice des coefficients* du système précédent est  la matrice

$$\begin{pmatrix}
1 & 3 & 4\\
0 & 4 & 4\\
-3 &-7 & -9 \end{pmatrix}$$

tandis que la matrice

$$\begin{pmatrix}
1 & 3 & 4 & 25\\
0 & 4 & 4  & 8\\
-3 &-7 & -9 & -67 \end{pmatrix}$$

est appelée *matrice augmentée du système*.

On note $$X$$ le vecteur $$(x_1, x_2, x_3)$$. Le système précédent s'écrit sous forme matricielle comme suit:

$$\begin{pmatrix}
1 & 3 & 4\\
0 & 4 & 4\\
-3 &-7 & -9 \end{pmatrix}  \begin{pmatrix}
x_1 \\
x_2   \\
x_3 \end{pmatrix} = \begin{pmatrix}
25 \\
8   \\
-67 \end{pmatrix}$$

#### Résolution d'un système linéaire
Le principe de base de la résolution d'un système linéaire consiste à remplacer un système par un système équivalent (c'est-à-dire qui a le même ensemble de solutions) qui soit plus facile à résoudre. Pour y parvenir nous faisons des opérations sur certaines lignes de la matrice augmentée. Ces opérations sont appelées *opérations élémentaires sur les lignes* et sont décrites ci-dessous:

1. Remplacer une ligne par sa somme avec un multiple d'une autre ligne ($$L_i \leftarrow L_i + \lambda L_j$$, avec $$j \neq i$$).
2. Échanger deux lignes entre elles ($$L_i \leftrightarrow L_j$$, $$i \neq j$$).
3. Multiplier tous les éléments d'une ligne par une constante non nulle ($$L_i \leftarrow \lambda L_i$$, $$\lambda \neq 0$$).

On dit que deux matrices sont *équivalentes selon les lignes* si on peut obtenir l'une en appliquant des opérations élémentaires sur les lignes de l'autre.

Le but de ses opérations est de ramener la matrice augmentée à une forme qu'on appelle **forme échelonnée**. La forme échelonnée permet de résoudre un système linéaire plus facilement.

On appelle *élément de tête* d’une ligne, l'élément non nul qui se trouve le plus à gauche d’une ligne non nulle.

$$\begin{pmatrix}
{\bf 2} & 0 & 1 & 0 & 4 & 7  \\
0 & 0 & {\bf 3} & 2 & 5 & -1  \\
0 & 0 & 0 & {\bf 1} & 0 & 3 \\
0 &0 &0 &0 &0 &0  \end{pmatrix}$$

On dit qu'une matrice rectangulaire est *sous forme échelonnée* si elle remplit les trois
conditions suivantes :

1. Toutes ses lignes non nulles sont situées au-dessus de ses lignes nulles.
2. Chaque élément de tête d’une ligne se trouve dans une colonne à droite de l'élément de tête de la ligne précédente.
3. Tous les éléments de la colonne sous un élément de tête sont nuls.


##### Exemples

Les deux matrices ci-dessous sont sous-forme échelonnée.

$$\begin{pmatrix}
{\bf 2} & 4 & 5  \\
0 &  {\bf 1} & 1   \\
0 & 0 & 0   \end{pmatrix}\qquad \begin{pmatrix}
{\bf 2} & 0 & 1 & 0 & 4 & 7  \\
0 & 0 & {\bf 3} & 2 & 5 & -1  \\
0 & 0 & 0 & {\bf 1} & 0 & 3  \end{pmatrix}$$


On dit qu'une matrice est sous **forme échelonnée réduite**  si la matrice est sous forme échelonnée et qu'elle vérifie en plus les deux conditions supplémentaires ci-dessous :

1. L'élément de tête de chaque ligne non nulle vaut 1.
2. Chaque 1 de tête d’une ligne est le seul élément non nul de sa colonne.

##### Exemples

Les deux matrices ci-dessous sont sous-forme échelonnée réduite.

$$\begin{pmatrix}
{\bf 1} & 0 & 0 & 2  \\
0 &  {\bf 1} & 0 & 3   \\
0 & 0 & {\bf 1} & 4   \end{pmatrix} \qquad \begin{pmatrix}
{\bf 1} & 0 & 0 & 0   \\
0 & 0 & {\bf 1} & 0  \\
0 & 0 & 0 & {\bf 1} \\
0 & 0 & 0 &0 \end{pmatrix}$$


**Remarque.** Selon les diverses séquences d’opérations élémentaires effectuées sur les lignes, une même matrice peut être réduite en plus d’une matrice échelonnée. Mais la forme échelonnée réduite d’une matrice, elle, est **unique**.


**Théorème**. Deux systèmes linéaires dont les matrices augmentées sont équivalentes selon les lignes, ont le même ensemble de solutions. 

Pour continuer, nous avons besoin d'une notion supplémentaire :

* On appelle *position pivot* dans une matrice $$A$$ une position qu’occupe un 1 de tête dans la forme échelonnée réduite de $$A$$. Une colonne de $$A$$ qui contient une position pivot est appelée une *colonne pivot*.

Dans le cas d’une forme échelonnée non réduite, les positions pivot sont celles des éléments de tête.

#### Transformer une matrice à une matrice en forme échelonnée réduite

Prenons l'exemple de la matrice 

$$\begin{pmatrix}
1 & 3 & 4 & 25\\
0 & 4 & 4  & 8\\
-3 &-7 & -9 & -67\end{pmatrix}$$

qu'on amènera d'abord en une forme echelonée, puis dans sa forme échelonnée réduite.

**Étape 1**: On commence toujours par la colonne non nulle la plus à gauche. Il s'agit d'une colonne pivot et la position pivot se trouve en haut à gauche.  On va prendre comme pivot un élément non nul de la colonne pivot. Il est parfois nécessaire d'échanger deux ou plusieurs lignes entre elles, afin que cet élément occupe une position pivot.

**Étape 2**: On applique des opérations élémentaires sur les lignes afin de créer des zéros sous le pivot.

En prenant notre matrice, on voit que la ligne $$L_2$$ peut se simplifier, car tous ses élémentns sont des multiples de $$4$$. On remplace alors la ligne $$L_2$$ par $$\frac{1}{4}L_2$$.

$$\begin{pmatrix}
1 & 3 & 4 & 25\\
0 & 1 & 1  & 2\\
-3 &-7 & -9 & -67\end{pmatrix}$$

Afin de créer des 0 sous le pivot de la première colonne, on remplace la ligne $$L_3$$ par $$L_3 + 3L_1$$:

$$\begin{pmatrix}
1 & 3 & 4 & 25\\
0 & 1 & 1  & 2\\
0 & 2 & 3 & 8\end{pmatrix}$$

**Étape 3**: On ignore maintenant la ligne qui contient la position pivot ainsi que toutes les lignes au-dessus d’elle, s’il y en a. On repète le même processus, en appliquant les étapes 1 à 2 à la sous-matrice qui reste. On continue ainsi jusqu'à ce qu’il n’y ait plus de lignes non nulles à changer.

À la fin de ce processus, notre matrice sera sous forme échelonnée, et sera donc équivalente selon les lignes à la matrice de départ.

On revient à notre exemple et on remplace donc la ligne $$L_3$$ par $$L_3 -2L_2$$.

$$\begin{pmatrix}
1 & 3 & 4 & 25\\
0 & 1 & 1  & 2\\
0 & 0 & 1 & 4\end{pmatrix}$$

La matrice obtenue est sous forme échelonnée. Pour obtenir la forme échelonnée réduite, une dernière étape est nécessaire.

**Étape 4**: On travaille maintenant de droite vers la gauche et de bas vers le haut. En partant du pivot le plus à droite et en travaillant de bas en haut vers la gauche, on crée des zéros au-dessus de chaque pivot. Si un pivot n’est pas égal à 1, on le transforme en un 1 en divisant par la constante qu'il faut. 

On remplace la ligne $$L_2$$ par $$L_2 - L_3$$.

$$\begin{pmatrix}
1 & 3 & 4 & 25\\
0 & 1 & 0  & -2\\
0 & 0 & 1 & 4\end{pmatrix}$$

On remplace la ligne $$L_1$$ par $$L_1 - 4L_3$$.

$$\begin{pmatrix}
1 & 3 & 0 &9\\
0 & 1 & 0  & -2\\
0 & 0 & 1 & 4\end{pmatrix}$$

Enfin, on remplace la ligne $$L_1$$ par $$L_1 - 3L_2$$.

$$\begin{pmatrix}
1 & 0 & 0 &15\\
0 & 1 & 0  & -2\\
0 & 0 & 1 & 4\end{pmatrix}$$

Cette dernière matrice est en forme échelonnée réduite. Elle est équivalente à la matrice de départ. Le système linéaire équivalent est donc:

$$\begin{aligned}
x_1  &= 15\\
x_2  &= -2 \\
x_3 &= 4.
\end{aligned}$$

## Références

F. Liret, D. Martinais. *Algèbre 1re année*.
: 2e édition. Dunod, 2003. ISBN 2-10-005548-8. Côte BU : 512 LIR.
 
