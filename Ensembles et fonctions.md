---
layout: post
title: Ensembles et fonctions
---

## Ensembles

#### Opérateurs

On considère un univers $$U = \{1, 2, 3, 4, 5, 6, 7\}$$. Étant donnés les ensembles suivants

$$A = \{1, 2, 3, 4\},\; B = \{4, 5, 6, 7\},\; C = \{1, 3, 5, 7\},\; D = \{2, 3, 4, 5, 6\},$$

calculer

1. $$\overline{A}, A \cup C, \overline{A \cup C}, A \cap C, \overline{A \cap C}$$,
2. $$(A \cap B) \cup (C \cap D), (A \cup C) \cap (B \cup D)$$,
3. $$A \backslash D, D \backslash A$$.

#### Diagrammes de Venn

On suppose que $$A \cup B = B \cap C$$ et que $$C\subset E$$. Dessiner les
diagrammes de Venn de $$A$$, $$B$$, $$C$$ et $$E$$.

----

Comparer les diagrammes de Venn

1. de $$\overline{A\cup B}$$ et $$\overline{A}\cap\overline{B}$$;
1. de $$\overline{A\cap B}$$ et $$\overline{A}\cup\overline{B}$$.


#### Ensembles et calcul des propositions

Soient $$A$$, $$B$$, $$C$$ trois ensembles dans un univers $$U$$. Démontrer les propriétés suivantes.

1. La distributivité: $$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$.

1. Les lois de de Morgan: $$\overline{A\cup B} = \overline{A} \cap \overline{B}$$ et $$\overline{A\cap B} = \overline{A} \cup \overline{B}$$.

1. $$A \backslash B = A \cap \overline{B}$$.

1. $$A \cup B = (A \cap B) \cup (A \cap \overline{B}) \cup (\overline{A} \cap B)$$.

1. $$A \cap B = A \cap C$$ si et seulement si $$A \cap \overline{B} = A \cap \overline{C}$$.


## Fonctions

**Rappel:** Si $$f:A\to B$$ est une fonction, et si $$C\subset B$$ est un
sous-ensemble de $$B$$, on note $$f^{-1}(C)$$ l'**image inverse de $$C$$ par
$$f$$**, c'est à dire l'ensemble des $$x\in A$$ tels que $$f(x)\in C$$.

Soit $$f : E\to F$$ une fonction totale (une application). Soient $$A$$ et
$$B$$ des sous-ensembles de $$E$$ et soient $$C$$ et $$D$$ des sous-ensembles
de $$F$$. A-t-on nécessairement:

1. $$f(A \cap B) = f(A) \cap f(B)$$,
2. $$f(A \cup B) = f(A) \cup f(B)$$,
3. $$f^{-1}(C \cap D) = f^{-1}(C) \cap f^{-1}(D)$$,
4. $$f^{-1}(C \cup D) = f^{-1}(C) \cup f^{-1}(D)$$,
5. $$f^{-1}(f(A)) = A$$,
6. $$f(f^{-1}(C)) = C$$.

Justifier chaque cas par une preuve ou par un contre-exemple.

#### Injectivité et surjectivité

**Rappel:** si $$n$$ est un nombre réel, la notation $$\lfloor n\rfloor$$
désigne la *partie entière inférieure* de $$n$$, c'est à dire le plus
grand entier plus petit ou égal à $$n$$. La notation $$\lceil n\rceil$$
désigne la *partie entière supérieure* de $$n$$, c'est à dire le plus
petit entier plus grand ou égal à $$n$$.

Déterminer si les fonctions suivantes sont injectives, surjectives ou aucune des deux.

1. $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(n) = \lfloor\frac{n}{2}\rfloor$$.

1. $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(n) = 2n$$.

1. $$f : \mathbb{N} \to \mathbb{Z}$$ définie par $$f(n) = (-1)^n\lceil\frac{n}{2}\rceil$$.

1. $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(x) = x + 1$$.

1. $$f : \mathbb{Z} \to \mathbb{Z}$$ définie par $$f(x) = x + 1$$.


---------

Interpréter les phrases suivantes en terme d’injectivité et de surjectivité.

1. Il existe des nombres entiers relatifs (i.e., dans $$\mathbb{Z}$$)
différents qui ont le même carré.
1. Tout nombre réel positif a une racine carrée.
1. Le nombre 3 n’est le sinus d’aucun nombre.
1. Un nombre complexe est caractérisé par ses parties réelle et imaginaire.

--------

**Rappel:** Si $$f:A\to B$$ et $$g:B\to C$$ sont deux fonctions, on note
$$g\circ f$$ la **composée de $$g$$ et de $$f$$**, i.e. la fonction $$g\circ
f:A\to C$$ définie par $$g\circ f(x) = g(f(x))$$.

Soient $$f : A \to B$$ et $$g : B \to C$$ deux fonctions et $$h = g \circ f$$. Montrer les propositions suivantes.

1. Si $$h$$ est surjective alors $$g$$ est surjective.
2. Si $$h$$ est injective alors $$f$$ est injective.
3. Si $$h$$ est injective et $$f$$ est surjective alors $$g$$ est injective.
4. Si $$h$$ est surjective et $$g$$ est injective alors $$f$$ est surjective.

Les implications réciproques sont-elles vraies ?


## Ensembles et induction

Soient $$A$$ et $$B$$ des ensembles finis, et soit $$f : A \to B$$ une fonction. Prouver que

1. Si $$f$$ est injective, alors $$|A| \le |B|$$;
    
1. Si $$f$$ est surjective, alors $$|A| \ge |B|$$.
    

-------

Soit $$f : E \to E$$ une fonction. On définit par récurrence les
applications $$f^n$$ par $$f^1 = f$$ et $$f^n = f \circ f^{n-1}$$.

1. On suppose que $$f$$ est injective. Montrer que pour tout entier $$n$$, $$f^n$$ est injective.
1. On suppose que $$f$$ est surjective. Montrer que pour tout entier $$n$$, $$f^n$$ est surjective.
