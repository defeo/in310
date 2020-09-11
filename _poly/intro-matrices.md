---
title: Introduction aux matrices
---

## Définitions

Soit $\mathbf{K}$ un corps. Par exemple $\mathbf{K}$ peut désigner $\mathbb{R}, \mathbb{Q}, \mathbb{C}, \mathbb{Z}/n\mathbb{Z}$.

Pour tout entiers positifs, $n$, $p$, une \emph{matrice} $n\times p$ à coefficients dans $\mathbf{K}$ est un tableau d'éléments de $\mathbf{K}$ à $n$ lignes et à $p$ colonnes, que l'on note

\[ \left( \begin{array}{ccc}
a_{11} & \cdots & a_{1p} \\
\vdots &  & \vdots \\
a_{n1} & \cdots & a_{np} \end{array} \right).\]
Les $a_{ij}$ s'appellent les \emph{coefficients} de la matrice ; le premier indice est celui de la ligne et le second est celui de la colonne. Quand une matrice admet autant de lignes que de colonnes $(n = p)$ on parle de \emph{matrice carrée}.
\bigskip

{\bf Notation.} L'ensemble des matrices $n\times p$ à coefficients dans $\mathbf{K}$ se note $M_{n,p}(\mathbf{K})$ et plus simplement $M_n(\mathbf{K})$ si $n=p$.  
\bigskip

\subsection{Multiplication de matrices}

\paragraph{Produit matrice-vecteur}
Soient $A$ une matrice de $M_{n,p}(\mathbf{K})$ et $B$ une matrice de $M_{p,1}(\mathbf{K})$. Le \emph{produit} de $A$ par $B$ noté par $AB$, est la matrice $n \times 1$ dont la $i$-ième ligne est le produit de la $i$-ième ligne de $A$ par la matrice-colonne $B$.
\bigskip

{\bf Exemple}: Soient \[ A = \left( \begin{array}{ccc}
2 & 0 & 1 \\
3 & -1 & 4 \\
0 & 0 & 1 \\
-2 & 2 & 0 \end{array} \right) \text{ et }  B = \left( \begin{array}{c}
1  \\
 2  \\
1  \end{array}  \right)\]

On a  \[ AB = \left( \begin{array}{c}
2\cdot 1 + 0 \cdot 2 + 1\cdot 1 \\
3\cdot 1  -1 \cdot 2 + 4\cdot 1  \\
0\cdot 1 + 0 \cdot 2 + 1\cdot 1  \\
-2\cdot 1 + 2 \cdot 2 + 0\cdot 1  \end{array} \right)   = \left( \begin{array}{c}
3  \\
 5  \\
1  \\
0 \end{array}  \right)\]
Soient $A$ une matrice de $M_{n,p}(\mathbf{K})$ et $B$ une matrice de $M_{p,q}(\mathbf{K})$. Le \emph{produit} de $A$ par $B$ noté par $AB$, est la matrice $n \times q$ dont la $j$-ième colonne est le produit de $A$ par la $j$-ième colonne de $B$.
\bigskip

{\bf Exemple}: Soient \[ A = \left( \begin{array}{ccc}
2 & 0 & 1 \\
3 & -1 & 4 \\
0 & 0 & 1 \\
-2 & 2 & 0 \end{array} \right) \text{ et }  B = \left( \begin{array}{cc}
1  & 2\\
 2  & 0\\
1  & 3\end{array}  \right)\]

On a  \[ AB = \left( \begin{array}{cc}
3 &2\cdot 2+ 0 \cdot 0 + 1\cdot 3 \\
5 &3\cdot 2  -1 \cdot 0 + 4\cdot 3  \\
1 & 0\cdot 2 + 0 \cdot 0 + 1\cdot 3  \\
0 &-2\cdot 2 + 2 \cdot 0 + 0\cdot 3   \end{array} \right)   = \left( \begin{array}{cc}
3  & 7 \\
 5  & 18 \\
1  & 3 \\
0 & -4\end{array}  \right)\]

\subsection{Les systèmes d'équations linéaires}
Une \emph{équation linéaire} en les variables $x_1, \dots, x_n$ est une équation qui peut s'écrire sous la forme 
$$a_1x_1 + a_2x_2 + \dots + a_nx_n = b,$$
où $b$ et les coefficients $a_1, \dots a_n$ sont des nombres appartenant dans $\mathbf{K}$ connus.

Un \emph{système d'équations linéaires} (ou \emph{système linéaire}) est une collection d'une ou plusieurs équations linéaires relatives au même ensemble de variables, à savoir $x_1, \dots, x_n$.
\bigskip

{\bf Exemple:} Système d'équations linéaires en les variables $x_1, x_2, x_3$.
\begin{eqnarray*}
x_1 - 2x_2+ x_3 &=& 0\\
2x_2 - 8x_3 &=& 8 \\
-4x_1 + 5x_2 + 9x_3 &=& -9
\end{eqnarray*}

Nous pouvons résumer l'essentiel  de l'information présente dans un système linéaire à l'aide des matrices. La \emph{matrice des coefficients} du système précédent est  la matrice
\[ \left( \begin{array}{ccc}
1 & -2 & 1 \\
0 & 2 & - 8  \\
-4 & 5 & 9 \end{array} \right),\]
tandis que la matrice 
\[ \left( \begin{array}{cccc}
1 & -2 & 1 &0\\
0 & 2 & - 8  & 8\\
-4 & 5 & 9 & -9\end{array} \right)\]
est appelée  \emph{matrice augmentée du système}.

On note $X$ le vecteur $(x_1, x_2, x_3)$. Le système précédent s'écrit sous forme matricielle comme suit:
\[ \left( \begin{array}{ccc}
1 & -2 & 1 \\
0 & 2 & - 8  \\
-4 & 5 & 9 \end{array} \right) \left( \begin{array}{c}
x_1 \\
x_2   \\
x_3 \end{array} \right) = \left( \begin{array}{c}
0 \\
8   \\
-9 \end{array} \right).\]

\paragraph{Résolution du système} Le principe de base de la résolution d'un système linéaire consiste à remplacer un système par un système équivalent (c'est-à-dire qui a le même nombre de solutions) qui soit plus facile à résoudre. Pour y parvenir nous faisons des opérations sur certaines lignes de la matrice augmentée. Ces opérations sont appelées \emph{opérations élémentaires sur les lignes} et sont décrites ci-dessous:

\bigskip

\begin{enumerate}
\item Remplacer une ligne par sa somme avec un multiple d'une autre ligne ($L_i \leftarrow L_i + \lambda L_j$, avec $j \neq i$).
\item Échanger deux lignes ($L_i \leftrightarrow L_j$, $i \neq j$).
\item Multiplier tous les éléments d'une ligne par une constante non nulle ($L_i \leftarrow \lambda L_i$, $\lambda \neq 0$).
\end{enumerate}
\bigskip

Le but de ses opérations est de ramener la matrice augmenté à une forme qu'on appelle \emph{forme échelonnée}. 

\bigskip

On appelle \emph{élément de tête} d’une ligne, l'élément non nul le plus
à gauche (d’une ligne non nulle).

\[ \left( \begin{array}{cccccc}
\textcolor{red}{ 2} & 3 & 6 & 3 & 5 & 7  \\
0 & 0 & \textcolor{red}{3} & 2 & 5 & 4  \\
0 & 0 & 0 & \textcolor{red}{1} & 0 & 2 \\
0 &0 &0 &0 &0 &0  \end{array} \right). \]

\bigskip

Une matrice rectangulaire est dite \emph{sous forme échelonnée} si elle remplit les trois
conditions suivantes :
\smallskip
\begin{enumerate}
\item Toutes ses lignes non nulles sont situées au-dessus de ses
lignes nulles.
\item Chaque élément de tête d’une ligne se trouve dans une
colonne à droite de l'élément de tête de la ligne précédente.
\item Tous les éléments de la colonne sous un élément de tête sont
nuls.
\end{enumerate}

\bigskip

{\bf Exemples}
\[ \left( \begin{array}{ccc}
\textcolor{red}{ 2} & 3 & 8  \\
0 &  \textcolor{red}{1} & 1   \\
0 & 0 & 0   \end{array} \right) \qquad \left( \begin{array}{cccccc}
\textcolor{red}{ 2} & 3 & 6 & 3 & 5 & 7  \\
0 & 0 & \textcolor{red}{3} & 2 & 5 & 4  \\
0 & 0 & 0 & \textcolor{red}{1} & 0 & 2  \end{array} \right). \]

\bigskip

On parle de forme \emph{échelonnée réduite}  lorsqu’une matrice sous forme
échelonnée satisfait aux conditions supplémentaires suivantes :
\smallskip

\begin{enumerate}
\item L'élément de tête de chaque ligne non nulle vaut 1.
\item Chaque 1 de tête d’une ligne est le seul élément non nul de sa colonne.
\end{enumerate}
\bigskip

{\bf Exemples}
\[ \left( \begin{array}{cccc}
\textcolor{red}{ 1} & 0 & 0 & 2  \\
0 &  \textcolor{red}{1} & 0 & 3   \\
0 & 0 & \textcolor{red}{1} & 4   \end{array} \right) \qquad \left( \begin{array}{cccc}
\textcolor{red}{ 1} & 0 & 0 & 0   \\
0 & 0 & \textcolor{red}{1} & 0  \\
0 & 0 & 0 & \textcolor{red}{1} \\
0 & 0 & 0 &0 \end{array} \right). \]

\bigskip

Selon les diverses séquences d’opérations élémentaires effectuées
sur les lignes, une même matrice peut être réduite en plus d’une
matrice échelonnée. Mais la forme échelonnée réduite d’une
matrice, elle, est unique.
\bigskip

{\bf Théorème} Une matrice est équivalente à une et une seule matrice échelonnée réduite.

\bigskip

Une \emph{position pivot} dans une matrice A est celle qu’occupe un 1
de tête dans la forme échelonnée réduite de A. Une colonne de A
qui contient une position pivot est appelée une \emph{colonne pivot}.

Dans le cas d’une forme échelonnée non réduite, les positions pivot
sont celles des éléments de tête.
\subsection{Transformer une matrice à une matrice en forme échelonnée réduite}
Nous prenons l'exemple de la matrice 

\[ \left( \begin{array}{cccc}
1 & -2 & 1 &0\\
0 & 2 & - 8  & 8\\
-4 & 5 & 9 & -9\end{array} \right)\]
qu'on amènera en forme échelonnée réduite.
\bigskip

{\bf Étape 1}: On commence par la colonne non nulle la plus à gauche.
C’est une colonne pivot. La position pivot est en haut à gauche.  On choisit comme pivot un élément non nul de la
colonne pivot. Il est parfois nécessaire d’intervertir des lignes afin
que cet élément occupe une position pivot.
\smallskip

{\bf Étape 2} : On applique les opérations élémentaires sur les lignes
pour que tous les éléments sous le pivot deviennent des zéros.

\bigskip

On simplifie la matrice en remplaçant la ligne $L_2$ par $\frac{1}{2}L_2$.

\[ \left( \begin{array}{cccc}
1 & -2 & 1 &0\\
0 & 1 & - 4  & 4\\
-4 & 5 & 9 & -9\end{array} \right)\]
\bigskip


On remplace ensuite la ligne $L_3$ par $L_3 + 4L_1$:

\[ \left( \begin{array}{cccc}
1 & -2 & 1 &0\\
0 & 1 & - 4  & 4\\
0 & -3 & 13 & -9\end{array} \right)\]
\bigskip

{\bf Étape 3} : On cache (ou on ignore) la ligne qui contient la position
pivot ainsi que toutes les lignes au-dessus d’elle, s’il y en a. On
applique les étapes 1 à 2 à la sous-matrice qui reste. On répète
cette séquence jusqu'à ce qu’il n’y ait plus de lignes non nulles à
changer.

On obtient ainsi une forme échelonnée équivalente à la matrice de
départ.
\bigskip

On remplace donc la ligne $L_3$ par $L_3 + 3L_2$.

\[ \left( \begin{array}{cccc}
1 & -2 & 1 &0\\
0 & 1 & - 4  & 4\\
0 & 0 & 1 & 3\end{array} \right)\]

\bigskip

La matrice obtenue est en forme échelonnée. Pour obtenir la forme échelonnée réduite, on doit ajouter une
dernière étape.

\bigskip

{\bf Étape 4} : Au départ du pivot le plus à droite et en travaillant de
bas en haut vers la gauche, on crée des zéros au-dessus de chaque
pivot. Si un pivot n’est pas égal à 1, on le fait devenir 1 par un
cadrage.
\bigskip


On remplace la ligne $L_1$ par $L_1 - L_3$.
\bigskip

\[ \left( \begin{array}{cccc}
1 & -2 & 0 &-3\\
0 & 1 & - 4  & 4\\
0 & 0 & 1 & 3\end{array} \right)\]

\bigskip

On remplace la ligne $L_2$ par $L_2 + 4L_3$.
\bigskip

\[ \left( \begin{array}{cccc}
1 & -2 & 0 &-3\\
0 & 1 & 0  & 16\\
0 & 0 & 1 & 3\end{array} \right)\]

\bigskip

Finalement, on remplace la ligne $L_1$ par $L_1 + 2L_2$.

\bigskip

\[ \left( \begin{array}{cccc}
1 & 0 & 0 &29\\
0 & 1 & 0  & 16\\
0 & 0 & 1 & 3\end{array} \right)\]

Cette dernière matrice est en forme échelonnée réduite. Elle est équivalent à la matrice de départ. Le système linéaire équivalent est maintenant:

\begin{eqnarray*}
x_1  &=& 29\\
x_2  &=& 16 \\
x_3 &=& 3.
\end{eqnarray*}


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
