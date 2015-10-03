---
layout: post
title: Groupe
---

Les groupes sont à la fois une généralisation du concept de nombre et du concept de symétrie.

Leur invention remonte à la première moitié du XIX siècle, dans les travaux d'[Évariste Galois](http://fr.wikipedia.org/wiki/%C3%89variste_Galois) sur la résolution des équations polynômiales. Sous l'impulsion de la recherche en géométrie, en particulier du [programme d'Erlangen](http://fr.wikipedia.org/wiki/Programme_d%27Erlangen) de [Felix Klein](http://fr.wikipedia.org/wiki/Felix_Klein), les groupes sont devenus omniprésents en mathématiques et dans d'autres disciplines scientifiques telles la physique et la chimie.

## Définition

Une **loi** (ou **opération**) $$\square$$ sur un ensemble $$A$$ est une fonction qui à deux éléments quelconques $$a,b\in A$$ associe un troisième élément $$a\square b$$ (autrement dit $$\square$$ est une [fonction totale](../fonction) $$A\times A\to A$$). 

Un groupe est la donnée $$(A,\square)$$ d'un ensemble $$A$$ et d'une loi $$\square$$ sur $$A$$ ayant les propriétés suivantes:

- **Clotûre:** pour tout $$a,b\in A$$ on a $$a\square b$$ appartient à $$A$$;
- **Associativité:** pour tout $$a,b,c\in A$$ on a $$(a\square b)\square c = a\square(b\square c)$$;
- **Existence de l'élément neutre:** il existe $$e\in A$$ tel que pour tout $$a\in A$$ on a $$e\square a=a\square e = a$$;
- **Existence de l'inverse:** pour tout $$a\in A$$ il existe $$b\in A$$ tel que $$a\square b=b\square a=e$$.

Si de plus la loi possède la propriété suivante:

- **Commutativité**: pour tout $$a,b\in A$$ on a $$a\square b=b\square a$$;

le groupe est dit **commutatif** ou **abélien**. Un groupe est dit **fini** ou **infini** si son ensemble est, respectivement, fini ou infini.


## Propriétés élémentaires

Il est facile de voir que l'élément neutre est unique. En effet, supposons qu'il existe un autre élément $$e'\in A$$ tel que $$e'\square a = a\square e' = a$$ pour tout $$a$$, alors on a nécessairement

$$e' = e\square e' = e'\square e = e,$$

où la première égalité vient de l'axiome d'existence de l'élément neutre et la dernière de l'hypothèse que nous venons de faire.

**Exercice:** montrer que tout $$a\in A$$ a un unique élément inverse.


## Exemples

Voici quelques exemples de groupes:

- $$(\mathbb{Z}, +)$$, les entiers relatifs munis de l'addition.
- $$(\mathbb{Q}, +)$$, les rationnels munis de l'addition.
- $$(\mathbb{Q}^*, \times)$$, les *rationnels inversibles* (i.e., les rationnels privés du $$0$$) munis de la multiplication.
- Pour tout entier $$n>0$$, $$(\mathbb{Z}/n\mathbb{Z}, +)$$, les entiers modulaires munis de l'addition.
- $$(\mathcal{S}_n, \circ)$$, les [groupes de permutations](../permutation) munis de la composition. Ceci est un exemple de groupe non-abélien.

Et voici quelques non-exemples:

- Les entiers naturels $$\mathbb{N}$$ munis de l'addition ne forment pas un groupe, car l'existence de l'inverse n'est pas vérifiée.
- Pour la même raison, les entiers relatifs $$\mathbb{Z}$$ munis de la multiplication ne forment pas un groupe.
- Les rationnels $$\mathbb{Q}$$ (ou les réels $$\mathbb{R}$$) munis de la multiplication ne forment pas un groupe car $$0$$ n'a pas d'inverse.
- $$(\mathbb{Z}, -)$$, les entiers relatifs munis de la soustraction ne forment pas un groupe car la loi n'est pas associative.


## Notation

### Associativité 
Grâce à l'associativité, le résultat d'une expression contenant plusieurs utilisation de la loi de groupe ne dépend pas du parenthèsage (de l'ordre dans lequel la loi est appliquée). On préfère donc ne pas écrire du tout les parenthèses, en adoptant la convention

$$a\square b\square c \equiv (a\square b)\square c = a\square(b\square c).$$


### Notation additive et multiplicative

Le symbole $$\square$$ et d'autres symboles exotiques sont pratiques pour éviter toute sorte d'ambiguïté. Lorsque il n'y a pas de risques de confusion, on préfère plutôt utiliser les mêmes symboles qu'on emploie déjà pour les nombres. Ceci laisse le choix entre deux notations alternatives pour la loi de groupe:

- En **notation additive** on emploie le symbole $$+$$ pour la loi de groupe et on écrit $$a+b$$. On note alors $$-a$$ l'unique élément inverse de $$a$$ (dans ce cas on parle aussi d'**opposé**), et parfois on écrit même $$0$$ à la place de $$e$$ pour l'élément neutre.
- En **notation multiplicative** on emploie le symbole $$\cdot$$ (ou $$\circ$$, ou très rarement $$\times$$) pour la loi de groupe et on écrit $$a\cdot b$$ ou simplement $$ab$$. On note alors $$a^{-1}$$ l'unique élément inverse de $$a$$ (dans ce cas on parle aussi d'**opposé**), et parfois on écrit même $$1$$ à la place de $$e$$ pour l'élément neutre.

Sauf exception, c'est la notation multiplicative qui est utilisée en général pour les groupes abstraits. Dans la suite nous allons utiliser exclusivement cette notation.


### Itération de la loi de groupe

Une opération commune sur les éléments d'un groupe consiste à appliquer de façon répétée la loi de groupe à un élément donné $$a$$:

$$a \cdot a \cdots a$$
 
Formellement, pour tout $$a\in A$$ et pour tout entier $$n$$, on note $$a^n$$ le **$$n$$-ième itéré** de la loi de groupe, défini comme suit:

$$a^n = \begin{cases}
e &\mathrm{si } n=0,\\
a\cdot a^{(n-1)} &\mathrm{si } n>0,\\
\bigl(a^{-n}\bigr)^{-1} &\mathrm{si } n<0.
\end{cases}$$

En notation additive, le $$n$$-ième itéré est noté $$n\cdot a$$, ou $$na$$, ou $$(n)a$$, ou encore $$[n]a$$.

**Exercice:** montrez que l'itéré est compatible avec les opérations sur les entiers et avec la loi de groupe, i.e. montrez les égalités suivantes:

- $$(a^m)^n = a^{mn}$$ pour tout $$a\in A$$ et tous entiers $$m,n\in\mathbb{Z}$$,
- $$(ab)^n = a^n b^n$$ pour tous $$a,b\in A$$ et tout entier $$n\in\mathbb{Z}$$.
