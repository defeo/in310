---
title: Correction TD 5 à 8
---

# Important

Cette correction est là pour vous aider à vous entraîner.
Les réponses ne sont pas détaillées, mais **vos réponses en examen doivent être détaillées, vous devez expliquer la façon dont vous êtes arrivés au résultat**


# TD 5

## Ensembles

1. $$\overline{A} = \{5,6,7\}, 
 A \cup C = \{1,2,3,4,5,7\}, 
 \overline{A \cup C} = \{6\},
  A \cap C = \{1,3\}, 
 \overline{A \cap C} = \{2,4,5,6,7\}$$,
2. $$(A \cap B) \cup (C \cap D) = \{3,4,5\}, 
(A \cup C) \cap (B \cup D) = \{2,3,4,5,7\}$$,
3. $$A \backslash D = \{1\}, 
D \backslash A = \{5,6\}$$.


## Fonctions

Soit $$f : E\to F$$ une fonction totale (une application). Soient $$A$$ et
$$B$$ des sous-ensembles de $$E$$ et soient $$C$$ et $$D$$ des sous-ensembles
de $$F$$. A-t-on nécessairement:
*En cours de correction*

1. $$f(A \cap B) = f(A) \cap f(B)$$ : NON. 
$$E=\{a,b\}, F=\{c\}, A=\{a\}, B=\{b\}$$, avec $$f(a)=f(b)=c$$.
$$f(A\cap B) = ∅. f(A) \cap f(B) = \{c\}$$.

2. $$f(A \cup B) = f(A) \cup f(B)$$ : OUI

Soit $$y \in f(A \cup B), y = f(x)$$ avec $$x \in (A \cup B)$$. Donc $$x \in A$$ ou $$x \in B$$, donc $$y=f(x) \in f(A)$$ ou $$y \in f(B)$$. On a alors $$y \in f(A) \cup f(B)$$. Donc $$f(A \cup B) \subset f(A) \cup f(B)$$.

Si $$y \in f(A) \cup  f(B) $$ alors $$y = f(x')$$ avec $$x' \in A $$ ou $$y = f(x'')$$ avec $$x'' \in B$$ donc $$\exists x \in (A \cup B)$$ tel que $$y \in f(A \cup B)$$. Donc  $$f(A) \cup f(B) \subset f(A \cup B)$$.

On a l'égalité.

3. $$f^{-1}(C \cap D) = f^{-1}(C) \cap f^{-1}(D)$$ : OUI
4. $$f^{-1}(C \cup D) = f^{-1}(C) \cup f^{-1}(D)$$ : OUI
5. $$f^{-1}(f(A)) = A$$ : NON
6. $$f(f^{-1}(C)) = C$$ : NON

## Injectivité/Surjectivité

1. $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(n) = \lfloor\frac{n}{2}\rfloor$$ : Surjective

1. $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(n) = 2n$$ : Injective

1. $$f : \mathbb{N} \to \mathbb{Z}$$ définie par $$f(n) = (-1)^n\lceil\frac{n}{2}\rceil$$ : Injective + Surjective.

1. $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(x) = x + 1$$ : Injective 

1. $$f : \mathbb{Z} \to \mathbb{Z}$$ définie par $$f(x) = x + 1$$ : Injective + Surjective

## Composition 

Soient $$f : A \to B$$ et $$g : B \to C$$ deux fonctions et $$h = g \circ f$$. Montrer les propositions suivantes.

1. Si $$h$$ est surjective alors $$g$$ est surjective.

Soit $$c \in C$$. $$\forall c \exists a \in A$$ tel que $$c =h(a)= g(f(a))$$.
Pour $$b = f(a) \in B$$, on a $$g(b) = c$$. Comme h est surjective, g est surjective.

2. Si $$h$$ est injective alors $$f$$ est injective.

Soit $$a,a' \in A$$. Si $$f(a) = f(a')$$ alors $$g(f(a)) = g(f(a'))$$ car h injective.

Vu que h est injective, on a a=a' donc f injective.


3. Si $$h$$ est injective et $$f$$ est surjective alors $$g$$ est injective.

On a f injective car h est injective. Donc f est bijective. On considère $$f^{-1}$$.

$$g = (g \circ f )\circ f^{-1} = h \circ f^{-1}$$ est injective par composition d'implication injectives.

4. Si $$h$$ est surjective et $$g$$ est injective alors $$f$$ est surjective.

On a g surjective car h est surjective . Donc g est bijective. On considère $$g^{-1}$$.

$$f = g^{-1} \circ (g \circ f )= g^{-1} \circ h$$ est surjective par composition d'implication surjectives.



# TD 6

## Relations et ensembles

On considère des relations entre l'ensemble $$A=\{1,3,5,7\}$$ et l'ensemble $$B=\{3,4,5,6\}$$. Écrire les relations suivantes comme des sous ensembles de $$A\times B$$.

1. « est inférieur strictement à » : R = {(1,3),(1,4),(1,5),(1,6),(3,4),(3,5),(3,6),(5,6)}
1. « est inférieur ou égal à » : R = {(1,3),(1,4),(1,5),(1,6),(3,3),(3,4),(3,5),(3,6),(5,5),(5,6)}
1. « divise » : R = {(1,3),(1,4),(1,5),(1,6),(3,6),(3,3),(5,5)}

## Fonctions

*En cours de correction*

1. La fonction $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(x) = x$$ : Réflexive, Symétrique, Transitive.

1. La fonction $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(n) = 2n$$ : Non réflexive, ;

1. La fonction $$f : \mathbb{R} \to \mathbb{R}$$ définie par $$f(x) = 1/x$$ : Non réflexive ;

---------

Les relations suivantes sont-elles des relations d’ordre sur les
entiers? Et sur les rationnels?

1. $$x\mathcal{P}y$$ si et seulement si $$x \le y$$ : Ordre sur les entiers et les rationnels.
2. $$x\mathcal{Q}y$$ si et seulement si $$x < y$$ : Pas une relation d'ordre (pas réflexive).
3. $$x\mathcal{R}y$$ si et seulement si $$x$$ est multiple de $$y$$ Ordre sur les entiers mais pas sur les rationnels.
4. $$x\mathcal{S}y$$ si et seulement si l'écriture de $$x$$ en base dix est contenue dans l'écriture de $$y$$ en base dix (ex. : $$101\;\mathcal{S}\;31012$$) : Ordre.

-----

Montrer que pour tout entier $$n$$, la relation « équivalent modulo $$n$$ »
est une relation d’équivalence sur les entiers. *Caractériser* les classes d'équivalence.
*En cours de correction*

--------

Soit $$E = \{1, 2, 3, 4, 5, 6, 7, 8\}$$. On définit sur l’ensemble $$E \times E$$ la relation $$\mathcal{R}$$:
$$(p, q)\mathcal{R}(p', q')$$ si et seulement si $$p - p'$$ est pair et $$q - q'$$ est divisible par 3.

1. Donner le cardinal de $$E \times E$$ : taille de l'ensemble : 8*8 = 64.
2. Vérifier que $$\mathcal{R}$$ est une relation d’équivalence.

$$(x_1,y_1),(x_2,y_2),(x_3,y_3) \in E × E$$.

Réflexivité : $$x_1 - x_1 = 0$$ pair. $$y_1 - y_1 = 0$$ divisible par 3. Donc la relation est réflexive.

Transitivité : $$x_1 - x_2$$ pair et $$x_2 - x_3$$ pair. La somme de nombres pairs est toujours pair donc $$x_1 - x_2 + x_2 - x_3 = x_1 - x_3$$ est aussi pair.

$$y_1 - y_2$$ divisible par 3 et $$y_2 - y_3$$ divisible par 3. La somme de deux nombres divisibles par 3 est divisible par 3 donc $$y_1 - y_2 + y_2 - y_3 = y_1 - y_3$$ est aussi divisible par 3. Donc la relation est transitive.

Symétrie : $$x_1 - x_2$$ pair donc $$-(x_1 - x_2) = x_2 - x_1$$ est pair aussi. $$y_1 - y_2$$ divisible par 3 donc $$-(y_1 - y_2) = y_2 - y_1$$ est aussi divisible par 3. Donc la relation est symétrique.

La relation est réflexive, transitive et symétrique, donc c'est une relation d'équivalence.

3. Calculer le nombre d’éléments des classes $$\overline{(1, 1)}, \overline{(1, 2)}, \overline{(1, 3)}$$. 

Pour $$ \overline{(1, 1)}$$ = {(1,1),(3,1),(5,1),(7,1),(1,4),(3,4),(5,4),(7,4),(1,7),(3,7),(5,7),(7,7)} = 12 éléments.

Pour $$ \overline{(1, 2)}$$ = {(1,2),(3,2),(5,2),(7,2),(1,5),(3,5),(5,5),(7,5),(1,8),(3,8),(5,8),(7,8)} = 12 éléments.

Pour $$ \overline{(1, 3)}$$ = {(1,3),(3,3),(5,3),(7,3),(1,6),(3,6),(5,6),(7,6)} = 8 éléments.


3. Soit $$q \in E$$. Montrer que si $$(x, y) \in \overline{(1, q)}$$, alors $$(x + 1, y) \in \overline{(2, q)}$$.

Si $$(x,y) \in \overline{(1, q)}$$, on a x-1 qui est pair. x-1 pair donc x-1 +2 reste pair donc x+1 est aussi pair.
 
3. Combien y a-t-il de classes d’équivalence différentes ? Donner leur liste.

3. Déterminer le cardinal de chaque classe d’équivalence. Le résultat est-il compatible avec la cardinalité de $$E\times E$$?


# TD 7


## Preuves sur les entiers

Démontrer par induction les propriétés suivantes.

1. Pour tout entier $$n$$, $$\sum_{i=0}^n i = n(n + 1)/2$$ ;
1. Pour tout entier $$n$$, $$7^n - 1$$ est divisible par 6 ;
1. Pour tout entier $$n$$, $$(n^3 - n)$$ est divisible par 3 ;
1. Pour tout entier $$n$$, $$1+3+5+\cdots+(2n-1) = n^2$$ ;
1. Pour tout entier $$n$$, $$\sum_{i=0}^n i^2 = \frac{n(n+1)(2n+1)}{6}$$ ;
1. Pour tout entier $$n$$, $$\sum_{i=0}^n i^3 = \frac{n^2(n+1)^2}{4}$$.

---------

Prouver les inégalités suivantes.

1. $$2^n < n!$$ pour tout $$n\ge 4$$.
1. $$n! < n^n$$ pour tout $$n > 1$$.


## Entiers déguisés

Soient $$A$$ et $$B$$ des ensembles finis, et soit $$f : A \to B$$ une fonction. Prouver que

1. Si $$f$$ est injective, alors $$|A| \le |B|$$;
    
1. Si $$f$$ est surjective, alors $$|A| \ge |B|$$.
    

-------

Soit $$f : E \to E$$ une fonction. On définit par récurrence les
applications $$f^n$$ par $$f^1 = f$$ et $$f^n = f \circ f^{n-1}$$.

1. On suppose que $$f$$ est injective. Montrer que pour tout entier $$n$$, $$f^n$$ est injective.
1. On suppose que $$f$$ est surjective. Montrer que pour tout entier $$n$$, $$f^n$$ est surjective.

# TD 8

