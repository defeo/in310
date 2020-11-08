---
title: Relations et classes d'équivalence
---

{% include defs.svg %}

## Relations et ensembles

On considère des relations entre l'ensemble $$A=\{1,3,5,7\}$$ et l'ensemble $$B=\{3,4,5,6\}$$. Écrire les relations suivantes comme des sous ensembles de $$A\times B$$.

1. « est inférieur strictement à »,
1. « est inférieur ou égal à »,
1. « divise ».

Écrire les relations réciproques de chacune des relations précédentes.

------

Dessiner les graphes des fonctions suivantes et de leurs inverses.

1. La fonction $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(x) = x$$.
1. La fonction $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(n) = 2n$$ ;
1. La fonction $$f : \mathbb{R^*} \to \mathbb{R^*}$$ définie par $$f(x) = 1/x$$ ;

On rappelle qu'un graphe est une relation. Dans les cas ci-dessus, s'agit-il de relations réflexives, symétriques, transitives ?


## Diagrammes de Hasse

Considérons le graphe de compatibilité des groupes sanguins: $$x \to y$$ signifie que une personne
du groupe sanguin $$x$$ peut donner son sang à une personne du groupe sanguin $$y$$.

<svg width="200" height="200" viewbox="-100 -170 200 200"
	 style="display:block;margin:auto">
  <g stroke="black" fill="none" marker-end="url(#arrow)"
	 transform="rotate(-135)">
	<path d="M 20,0 80,0"/>
	<path d="M 0,20 0,80"/>
	<path d="M 100,20 100,80"/>
	<path d="M 20,100 80,100"/>
	<circle cx="0" cy="0" r="20"/>
	<circle cx="0" cy="100" r="20"/>
	<circle cx="100" cy="0" r="20"/>
	<circle cx="100" cy="100" r="20"/>
  </g>
  <g transform="matrix(0.7071 0 0 0.7071 0 -135)" style="font-size:150%"
	 text-anchor="middle">
    <text x="0" y="0">AB</text>
	<text x="-100" y="100">A</text>
	<text x="100" y="100">B</text>
	<text x="0" y="200">0</text>
  </g>
</svg>

Définir la relation « compatibilité ». Est-elle réflexive, transitive, symétrique, antisymétrique?

----

**Rappel :** l'*ensemble des parties* d'un ensemble $$A$$ est l'ensemble de tous les sous-ensembles de $$A$$ (y compris l'ensemble vide et $$A$$ lui-même).

On considère l'ensemble des parties de $$A=\{1,2,3\}$$ muni de la relation $$x \subset y$$ ($$x$$ est contenu dans $$y$$). La relation $$\subset$$ est-elle un ordre ? En dessiner le diagramme de Hasse.


## Propriétés des relations

Donner des exemples de relations qui sont

1. réflexives et symétriques mais pas transitives,
2. réflexives et transitives mais pas symétriques,
3. symétriques et transitives mais pas réflexives.

-----------

La relation sur les entiers suivante est-elle une relation d’équivalence ?

$$\mathcal{T} = \{(a, b) \;\vert\; a + b \text{ est pair}\}$$.

Donner la classe d’équivalence de 3, 4, 5, 6.

---------

Les relations suivantes sont-elles des relations d’ordre sur les
entiers? 

1. $$x\mathcal{P}y$$ si et seulement si $$x \le y$$.
2. $$x\mathcal{Q}y$$ si et seulement si $$x < y$$.
3. $$x\mathcal{R}y$$ si et seulement si $$x$$ est multiple de $$y$$.
4. $$x\mathcal{S}y$$ si et seulement si l'écriture de $$x$$ en base dix est contenue dans l'écriture de $$y$$ en base dix (ex. : $$101\;\mathcal{S}\;31012$$).

--------

Soit $$E = \{1, 2, 3, 4, 5, 6, 7, 8\}$$. On définit sur l’ensemble $$E \times E$$ la relation $$\mathcal{R}$$:
$$(p, q)\mathcal{R}(p', q')$$ si et seulement si $$p - p'$$ est pair et $$q - q'$$ est divisible par 3.

1. Donner le cardinal de $$E \times E$$.
2. Vérifier que $$\mathcal{R}$$ est une relation d’équivalence.

On désigne par $$\overline{(p, q)}$$ la classe d’équivalence de $$(p, q)$$.

3. Calculer le nombre d’éléments des classes $$\overline{(1, 1)}, \overline{(1, 2)}, \overline{(1, 3)}$$.
3. Soit $$q \in E$$. Montrer que si $$(x, y) \in \overline{(1, q)}$$, alors $$(x + 1, y) \in \overline{(2, q)}$$.
3. Combien y a-t-il de classes d’équivalence différentes ? Donner leur liste.
3. Déterminer le cardinal de chaque classe d’équivalence. Le résultat est-il compatible avec la cardinalité de $$E\times E$$?
