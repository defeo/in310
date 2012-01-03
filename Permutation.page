Les permutations sont une formalisation du concept de symétrie. Elles fournissent l'un des premiers exemples de [Groupe]() autre que les groupes de nombres.

# Définition

Soit $A$ un ensemble de cardinalité $n$, le **groupe des permutations** de $A$, noté $\mathcal{S}_A$ est l'ensemble de toutes les bijections de $A$ dans $A$. Il est immédiat de vérifier que les éléments de $\mathcal{S}_A$ avec la [composition](Fonction#composition) forment un [Groupe]():

- La composition est associative par définition;
- L'élément neutre est l'identité de $A$;
- Tout élément a un opposé, c'est son inverse.

Il est aussi immédiat de voir que ce groupe est non-commutatif.

La structure de groupe ne dépend que de la cardinalité de $A$, par conséquent on définit le $n$-ième **groupe symétrique**, noté $\mathcal{S}_n$ comme étant le groupe des permutations d'un ensemble quelconque de cardinalité $n$.

# Notation

À partir de maintenant on s'intéresse exclusivement aux permutations de l'ensemble $\{1,2,\ldots,n\}$, les permutations d'un ensemble quelconque de cardinalité $n$ étant équivalentes à celles-ci.

Une façon naturelle de représenter une permutation consiste à donner pour chaque élément de l'ensemble de départ son [image](Fonction#definition-et-notation) par la permutation. Il existe deux façons de noter ceci:

- La notation *à deux lignes* écrit les éléments de l'ensemble sur un ligne et leurs images au dessous, comme ceci
  $$\begin{pmatrix}1&2&3&4&5\\2&3&1&5&4\end{pmatrix};$$
  par convention la première ligne est toujours écrite en ordre croissant.
- La notation *à une ligne* consiste à écrire seulement la deuxième ligne de la notations à deux lignes. Ainsi la permutation précédente est notée $23154$ ou encore $(2,3,1,5,4)$ (en général les virgules sont utilisées seulement lorsque l'ensemble contient plus de 9 éléments).

Si $\sigma$ et $\pi$ sont deux permutations, leur composition est notée $\sigma\circ\pi$, ou simplement $\sigma\pi$. Les permutations sont toujours notées [multiplicativement](Groupe#notation), ainsi l'inverse de $\sigma$ est toujours noté $\sigma^{-1}$ et la composition de $n$ fois $\sigma$ est noté $\sigma^n$. 

# Exemples

Voici deux exemples de permutations de $\mathcal{S}_3$:

$$\sigma = \begin{pmatrix}1&2&3\\2&1&3\end{pmatrix}\qquad
\pi = \begin{pmatrix}1&2&3\\2&3&1\end{pmatrix}.$$

La composition $\sigma\circ\pi$ est obtenue en appliquant **d'abord** $\pi$ et **ensuite** $\sigma$, donc

$$\sigma\circ\pi = \begin{pmatrix}1&2&3\\1&3&2\end{pmatrix}.$$

De façon similaire on a

$$\pi\circ\sigma = \begin{pmatrix}1&2&3\\3&2&1\end{pmatrix}.$$

La notation à deux lignes permets aussi de calculer aisément l'inverse d'une permutation: il suffit pour cela de lire la permutation du bas en haut et de réordonner. Par exemple, voici les inverses de $\sigma$ et $\pi$:

$$\sigma^{-1} = \begin{pmatrix}1&2&3\\2&1&3\end{pmatrix}\qquad
\pi^{-1} = \begin{pmatrix}1&2&3\\3&1&2\end{pmatrix}.$$


# Décomposition en cycles

Soit $a\in A$ et $\sigma$ une permutation, l'**orbite de $a$ par $\sigma$** est l'ensemble des éléments de $A$ qui sont image d'une itérée de $\sigma$, autrement dit l'ensemble $\{a,\sigma(a),\sigma^2(a),\ldots\}$.

Par exemple, si on considère la permutation

$$\sigma = \begin{pmatrix}1&2&3&4\\2&4&3&1\end{pmatrix},$$

l'orbite de $1$ est $\{1,2,4\}$, alors que l'orbite de $3$ est simplement $\{3\}$. Une orbite contenant un seul élément est aussi dite **triviale**, et l'élément est appelé un **point fixe** de la permutation.

**Exercice:** Montrer que, à permutation $\sigma$ fixée, appartenir à une orbite est une [relation d'équivalence](Équivalence). Comme conséquence immédiate on a que les orbites de $\sigma$ partitionnent l'ensemble $A$.

Un **cycle** est une permutation contenant exactement une orbite non-triviale. Par exemple la permutation $\sigma$ ci-dessus est un cycle car elle contient une orbite de taille 3 et une triviale, alors que les permutations

$$\pi = \begin{pmatrix}1&2&3&4\\2&1&4&3\end{pmatrix}\qquad
\mathrm{id} = \begin{pmatrix}1&2&3&4\\1&2&3&4\end{pmatrix}$$

ne sont pas des cycles car la première contient deux orbites non-triviales et la deuxième n'en contient aucune.

Les cycles peuvent être écrits en **notation cyclique** comme suit: on choisit un élément quelconque $a$ de l'unique orbite non-triviale, et on écrit dans l'ordre

$$a\quad \sigma(a)\quad \sigma^2(a)\quad \cdots$$

jusqu'à ce qu'on trouve $\sigma^n(a) = a$, auquel point on s'arrête. Observez que cette représentation n'est pas unique car elle dépend du choix de l'élément $a$ de départ. Par exemple, la permutation $\sigma$ ci-dessus peut s'écrire des façons suivantes:

$$\sigma = (2\;4\;1) = (4\;1\;2) = (1\;2\;4).$$

Notez comment on met des espaces à la place des virgules pour éviter des confusions avec la notation à une ligne.

Écrire l'inverse d'un cycle est aussi aisé en notation cyclique: il suffit de lire le cycle de la droite vers la gauche. Ainsi, on a

$$\sigma^{-1} = (1\;4\;2) = (2\;1\;4) = (4\;2\;1).$$

La compositions de cycles est beaucoup moins aisée et il convient souvent de les réécrire en notations à deux lignes pour faire le calcul.

À partir de maintenant, par **orbite d'un cycle** on entend son orbite non-triviale.
La **longueur** d'un cycle est la taille de son orbite. Un cycle de longueur 2 est appelé une **transposition**. Deux cycles sont dits **disjoints** si leurs orbites respectives n'ont pas d'élément commun.

**Attention** à ne pas confondre un cycle avec son orbite. Une orbite est un ensemble, alors qu'un cycle est une permutation. En particulier, l'ordre des éléments d'une orbite n'a pas d'importance. Par exemple, $(1\;2\;3)$ et $(3\;2\;1)$ sont deux cycles différents, mais ils ont la même orbite, à savoir $\{1,2,3\}$.

**Exercice:** démontrer que toute transposition est une [involution](Groupe) (i.e., son propre inverse).

**Exercice:** démontrer que deux cycles disjoints commutent.

Il n'est pas difficile de voir que toute permutation peut s'écrire comme composition de cycles disjoints (par convention la permutation identité est la composition de zéro cycles). La **décomposition en cycles** d'une permutation consiste à écrire la permutation comme composition de cycles disjoints écrits en notation cyclique.

Par exemple une décomposition en cycles de

$$\sigma = \begin{pmatrix}1&2&3&4&5&6\\2&5&4&3&1&6\end{pmatrix}$$

est $(2\;5\;1)(4\;3)$. Observez que l'ordre des cycles n'est pas important car les cycles disjoints commutent.

**Exercice:** démontrer que la décomposition en cycles disjoints est unique à l'ordre près.

Lorsque on veut souligner les points fixes d'une permutation, il est parfois admis de noter $(a)$, avec un $a\in A$ quelconque, la permutation identité. Ceci permet, par exemple, de décomposer ainsi la permutation précédente: $(2\;5\;1)(4\;3)(6)$. Notez cependant que $(6)$ n'est pas un cycle d'après la définition donnée auparavant; si on élargissait la définition de cycle pour inclure la permutation identité, on n'aurait plus d'unicité de la décomposition.