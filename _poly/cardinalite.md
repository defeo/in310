---
layout: post
title: Cardinalité
---

La cardinalité d'un [ensemble](Ensemble) est une mesure de son nombre d'éléments. Pour un ensemble fini, sa cardinalité est tout simplement son nombre d'éléments; la définition de cardinalité permet de généraliser aux ensembles infinis le propriétés des ensembles finis.

## Définition et Notation

Il est aisé de montrer que deux ensembles finis ont le même nombre d'éléments si et seulement si ils sont en [bijection](Fonction#propriétés). On utilise alors cette même propriété pour définir la cardinalité en général: on dit que deux ensembles ont la même cardinalité lorsqu'il existe une [bijection](Fonction#propriétés) entre eux.

Puisque toute [bijection](Fonction#propriétés) a un
[inverse](Fonction#inverse), avoir la même cardinalité est une
[relation d'équivalence](Relation#équivalence). On définit alors la
cardinalité de $$A$$ comme étant sa
[classe d'équivalence modulo](Relation#classes-d'équivalence) cette
relation. On note $$|A|$$ ou $$\#A$$ la cardinalité d'un ensemble
$$A$$.

On définit aussi une [relation d'ordre](Relation#ordre) entre
cardinalités: on dit que $$|A|\le|B|$$ s'il y a une
[injection](Fonction#propriétés) de $$A$$ vers $$B$$.


## Cardinalité des ensembles infinis

### Ensembles dénombrables

Les ensembles ayant la même cardinalité que $$\mathbb{N}$$ sont dits **dénombrables**. De façon surprenante, beaucoup d'ensembles qu'on pourrait naïvement croire *plus grands* ou *plus petits* que $$\mathbb{N}$$ sont en fait dénombrables. Voici quelques exemples d'ensembles dénombrables:

- $$\mathbb{N}^+ = \{1,2,\ldots\}$$, l'ensemble des naturels strictement positifs;
- L'ensemble des nombres pairs;
- L'ensemble des nombres premiers;
- $$\mathbb{Z}$$, l'ensemble des entiers relatifs;
- $$\mathbb{N}^2$$, l'ensemble des couples de nombres naturels;
- $$\mathbb{Q}$$, l'ensemble des nombres rationnels;
- Le [produit Cartésien](Ensemble#produit-cartésien) de deux ensembles dénombrables;
- N'importe quelle puissance finie d'un ensemble dénombrable;
- Si $$\Sigma$$ est un alphabet fini, l'ensemble $$\Sigma^\ast$$ des chaîne de caractères à valeurs dans $$\Sigma$$;
- Si $$\Sigma$$ est un alphabet dénombrable, l'ensemble $$\Sigma^\ast$$ des chaîne de caractères à valeurs dans $$\Sigma$$;
- L'ensemble des programmes C valides de longueur arbitraire (peu importe si ça ne tient pas sur votre disque dur).

**Exercice:** pour chacun des exemples ci-dessus, donner une bijection avec $$\mathbb{N}$$.


### Ensembles plus que dénombrables

Il n'existe pas d'ensemble infini de cardinalité plus petite que $$\mathbb{N}$$, il existe cependant de nombreux ensembles de cardinalité plus grande. Par exemple,$$\mathbb{R}$$, l'ensemble des nombres réels, ne peut pas être mis en bijection avec $$\mathbb{N}$$; sa cardinalité est appelée **cardinalité du continu**. Voici quelques autres examples d'ensembles ayant la cardinalité du continu:

- $$\mathbb{R}^2$$, l'ensemble des paires de nombres réels;
- $$\mathbb{C}$$, l'ensemble des nombres complexes;
- $$\mathbb{N}^{\mathbb{N}}$$, l'ensemble des fonctions des naturels vers les naturels;
- $$\mathcal{P}(\mathbb{N})$$, l'[ensemble des parties](Ensemble#ensemble-des-parties) de $$\mathbb{N}$$.


**Exercice:** pour chacun des exemples ci-dessus, donner une bijection avec $$\mathbb{R}$$. Suggérer d'autres ensembles ayant la cardinalité du continu.

Il existe, en fait, une infinité de cardinalités possibles. Par l'[argument diagonal de Cantor](#argument-diagonal-de-cantor) on peut en effet montrer que pour tout ensemble $$A$$, son ensemble des parties $$\mathcal{P}(A)$$ a une cardinalité strictement supérieure.


## Pour approfondir

### Théorème de Cantor-Bernstein

Le **théorème de Cantor-Bernstein** montre que si $$f:A\to B$$ et
$$g:B\to A$$ sont deux injections, alors il existe une bijection de
$$A$$ vers $$B$$. Il en découle que si $$|A|\le|B|$$ et $$|B|\le|A|$$,
alors $$|A|=|B|$$.

### Argument diagonal de Cantor

À venir.

### Hypothèse du continu

On appelle **cardinal** un représentant canonique de la classe d'équivalence des ensembles ayant la même cardinalité. L'**axiome du choix** implique que les cardinaux forment un [ordre total](Relation#ordre); ses représentants sont notés

$$\aleph_0<\aleph_1<\aleph_2<\cdots$$

où $$\aleph$$ (qui se lit *aleph*) est la première lettre de l'alphabet hébreu.

Par l'argument diagonal on sait que

$$
|\mathbb{N}|<|\mathcal{P}(\mathbb{N})|<|\mathcal{P}(\mathcal{P}(\mathbb{N}))|<\cdots.
$$

On note les cardinaux correspondants:

$$\beth_0 < \beth_1 < \beth_2 < \cdots $$

où $$\beth$$ (qui se lit *beth*) est la deuxième lettre de l'alphabet hébreu.

$$\aleph_0=\beth_0$$ est donc la cardinalité dénombrable, tandis que
$$\beth_1$$ est la cardinalité du continu.

L'*hypothèse du continu* dit qu'il n'y a pas d'autre cardinal compris
entre $$\beth_0$$ et $$\beth_1$$ et que donc
$$\aleph_1=\beth_1$$. L'*hypothèse du continu généralisée* dit qu'il
n'y a pas d'autres cardinaux que les $$\beth$$, et que donc
$$\aleph_i=\beth_i$$ pour tout $$i$$.

Gödel et puis Cohen ont montré que l'hypothèse du continu ne peut être
ni prouvée ni réfutée... à vous de choisir quel parti prendre!
