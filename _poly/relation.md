---
title: Relation
---

Une relation entre deux [ensembles](../ensemble) $$A$$ et $$B$$ est une loi qui associe à chaque élément de $$A$$ zéro, un ou plusieurs éléments de $$B$$. Dans ce sens, c'est une généralisation du concept de [Fonction](../fonction).

## Définition et notation

Formellement, une relation $$\mathcal{R}$$ entre deux ensembles $$A$$ et $$B$$ est un [sous-ensemble](../ensemble#sous-ensembles) du [produit cartésien](../ensemble#produit-cartésien) $$A\times B$$. Pour des ensembles finis, une relation peut être représentée à l'aide de [diagrammes de Venn](../ensemble#diagrammes-de-Venn) en reliant les éléments en relation, comme dans la figure.

![](http://upload.wikimedia.org/wikipedia/commons/8/83/Relation_binaire.png)

Si $$\mathcal{R}\subset A\times B$$ est une relation et si $$a\in A$$ et $$b\in B$$ sont deux éléments, on écrit $$a\mathcal{R}b$$ si $$a$$ et $$b$$ sont en relation, c'est à dire si $$(a,b)\in\mathcal{R}$$.

Lorsque pour tout $$a\in A$$ il existe *au plus* un $$b\in B$$ tel que $$a\mathcal{R}b$$, la relation correspond au [graphe](../fonction#graphe) d'une [fonction partielle](../fonction#fonctions-partielles); lorsque pour tout $$a\in A$$ il existe *exactement* un $$b\in B$$ tel que $$a\mathcal{R}b$$, la relation correspond au [graphe](../fonction#graphe) d'une [fonction](../fonction) (totale). Dans ce cas on dit que $$\mathcal{R}$$ **est fonctionnelle** ou simplement qu'elle **est une fonction**.


## Réciproque

La **réciproque** (parfois appelée **inverse**) d'une relation $$\mathcal{R}\subset A\times B$$ est la relation

$$\mathcal{R}^c = \{(b,a)\in B\times A \;\vert\; (a,b)\in \mathcal{R}\}.$$

Lorsque $$\mathcal{R}$$ est le graphe d'une fonction, sa réciproque est le graphe de la [fonction inverse](../fonction#inverse).

## Relations sur un ensemble

Une relation $$\mathcal{R}\subset A\times A$$ est aussi appelée une *relation sur $$A$$*. On classifie les relations sur un ensemble d'après leurs propriétés. Une relation $$\mathcal{R}\subset A\times A$$ est dite:

Réflexive
: si pour tout $$a\in A$$ on a $$a\mathcal{R}a$$;

Symétrique
: si pour tout $$a,b\in A$$ on a $$a\mathcal{R}b \Leftrightarrow b\mathcal{R}a$$;

Transitive
: si pour tout $$a,b,c\in A$$ on a $$(a\mathcal{R}b \,\wedge\, b\mathcal{R}c) \Rightarrow a\mathcal{R}c$$;

Totale
: si pour tout $$a,b\in A$$ on a $$a\mathcal{R}b \,\vee\, b\mathcal{R}a$$;

Asymétrique
: si pour tout $$a,b\in A$$ on a $$\neg(a\mathcal{R}b \,\wedge\, b\mathcal{R}a)$$;

Antisymétrique
: si pour tout $$a,b\in A$$ on a $$(a\mathcal{R}b \,\wedge\, b\mathcal{R}a) \Rightarrow a=b$$.

Une relation qui est à la fois réflexive, symétrique et transitive est appelée une [Équivalence](../equivalence).

Une relation qui est à la fois réflexive, antisymétrique et transitive est appelée un [Ordre](../ordre) (partiel); lorsque elle est aussi totale elle est appelée un [ordre total](../ordre#ordre-total).

Une relation qui est à la fois transitive et asymétrique est appelée un [ordre strict](../ordre#ordres-stricts).

**Excercice:** montrer qu'une relation transitive et non réflexive est nécessairement asymétrique.

## Exemples

- La relation "est ami de" de Facebook est une relation symétrique.
- La relation d'égalité $$a=b$$ (aussi dite *relation idéntité*) est refléxive, symétrique et transitive. Elle est le graphe de la [fonction identité](../fonction).
- La relation sur les naturels $$a|b$$ ($$a$$ divise $$b$$) est
  réflexive, transitive et antisymètrique, mais pas totale. Elle forme
  donc un [ordre partiel](../ordre).
- La relation sur les entiers $$a< b$$ est transitive et asymétrique, elle forme donc un ordre strict.
- La relation sur les entiers $$a\le b$$ est un ordre total.
- La relation sur les entiers $$a=b \,\mathrm{mod}\, n$$ (i.e. le reste de la division Euclidienne de $$a$$ et de $$b$$ par $$n$$ est le même) est une équivalence.
- La relation $$A\subset B$$ sur les sous-ensembles d'un univers $$U$$ est un ordre partiel.

**Exercice:** vérifier les propriétés susmentionnées.
