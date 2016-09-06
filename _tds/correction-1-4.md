---
title: Correction TD 1 à 4
---

# Important

Cette correction est là pour vous aider à vous entraîner.
Les réponses ne sont pas détaillées, mais **vos réponses en examen doivent être détaillées, vous devez expliquer la façon dont vous êtes arrivés au résultat**

# TD 1

## Rappels sur l’exponentielle et le logarithme

1. $$a^7$$,
2. $$a^{12}$$,
3. $$\frac{1}{a} = a^{-1}$$,
4. $$2^{6} = 64$$,
5. $$10$$,
6. $$6$$,
7. $$3  log_4(a)$$,
8. $$11$$.

## Conversions de base

1. $$(42)_{10}$$,
2. $$(34)_{10}$$,
3. $$(111100011)_{2} = (122220)_{3}$$,
4. $$(1E3)_{16}$$,
5. $$(1010 0011 0001 1011)_{2}$$,
6. $$(125)_{9}$$.
^

1. $$(102020)_{4}$$,
2. $$(1020130)_{4}$$,
3. $$(10201)_{4}$$,
4. $$(55)_{16} = (1010101)_{2}$$,
5. $$(11101)_{2}$$,
6. $$(1101110)_{2}$$,
7. $$(100000000)_{2}$$.

## Propriétés des représentations en base b

1. Avec 2 chiffres : 3 (11). Avec 3 chiffres : 7 (111). Avec 4 chiffres : 15 (1111). Avec n chiffres :  $$2^n -1$$.
2. Il faut $$\log_2(m)+1$$ chiffres.
3. Pour une base b : $$b^n-1$$ et $$\log_b(m)+1$$.
4. Il faut 6 chiffres binaires.
5. Il faut 2 chiffres hexadécimaux.

# TD 2

## Équivalences du calcul des propositions

**À l’aide des tables de vérité, trouver les propositions
équivalentes.**

$$
\begin{array}{c c | c| c| c| c| c| c| c| c}
p&q&1&2&3&4&5&6&7&8\\
\hline
0&0&1&1&1&1&1&1&0&0\\
0&1&1&0&0&1&1&1&0&0\\
1&0&1&0&0&1&1&1&0&0\\
1&1&0&0&0&0&0&0&1&1
\end{array}
$$

**Sans utiliser les tables de vérité, montrer les équivalences
suivantes.**

1.  $$(\neg p\to q) \to s = (\neg p \wedge \neg q) \vee s
\\(\neg p\to q) \to s = 
\\\neg(\neg p\to q) \vee s =
\\\neg(\neg \neg p  \vee q) \vee s = 
\\\neg(p  \vee q) \vee s = (\neg p \wedge \neg q) \vee s$$

2.  $$p = p \wedge (q \vee (q \to p))
\\p \wedge (q \vee (q \to p)) = 
\\(p \wedge q) \vee (p \wedge (q \to p)) = 
\\(p \wedge q) \vee (p \wedge ( \neg q \vee p)) = 
\\(p \wedge q) \vee ((p \wedge \neg q) \vee( p \wedge p)) = 
\\(p \wedge q) \vee ((p \wedge \neg q) \vee p) = 
\\(p \wedge q) \vee (p \wedge \neg q)) \vee p = 
\\(p \vee (q \wedge \neg q)) \vee p = 
\\(p \vee (q \wedge \neg q)) \vee p = 
\\p \vee p = p $$ 

# TD 3

## Vérité et implication sémantique
**Soient $$p$$ et $$q$$ deux formules. Parmi les affirmations suivantes,
lesquelles sont vraies (au niveau metalogique)?**

Si l'affirmation est vraie, montrer un exemple à l'aide des tables de
vérité et justifier pourquoi c'est vrai dans le cas général. Si
l'affirmation est fausse, donner un contre-exemple à l'aide des tables
de vérité.

1. $$p$$ est une *tautologie* si et seulement si sa négation est une
*antilogie*. VRAI
1. Si $$p$$ et $$q$$ sont *satisfaisables*, alors $$p\wedge q$$ est *satisfaisable*. FAUX
1. Si $$p$$ et $$q$$ sont des *tautologies*, alors $$p\wedge q$$ est une tautologie. VRAI
1. Si $$p\vee q$$ est une tautologie, alors au moins l'une de $$p$$ ou $$q$$ est une tautologie. FAUX
1. Si $$p\leftrightarrow q$$ est une tautologie, alors $$p$$ et $$q$$ sont des tautologies. FAUX


**Soient $$p$$ et $$q$$ deux formules. Parmi les affirmations suivantes,
lesquelles sont vraies (au niveau metalogique, bien sûr)?**

1. $$p \models p$$, VRAI
1. $$p\wedge q \models p$$, VRAI
1. $$p,q\models p$$, VRAI
1. $$p\vee q \models p$$, FAUX
1. $$p\to q \models p$$, FAUX
1. $$(p \vee \neg p) \to q \models q$$, VRAI
1. $$\neg p \wedge p\models q$$. VRAI


Même exercice qu'avant, mais esquissez seulement les preuves.

1. $$p,q\models r$$ si et seulement si $$(p\wedge q)\models r$$, VRAI
1. $$p\models q$$ si et seulement si $$p\to q$$ est une tautologie, VRAI
1. Si $$p\models r$$, alors $$p\wedge q \models r$$, VRAI
1. Si $$p\models r$$, alors $$p\vee q \models r$$, FAUX 
1. Si $$p\models r$$ et $$q\models r$$, alors $$p\vee q\models r$$, VRAI
1. $$p\models q$$ et $$p\models r$$ si et seulement si $$p\models q\wedge r$$, VRAI
1. $$p\models q$$ si et seulement si $$p\models q\vee r$$, FAUX
1. Si $$p\models r$$ et $$\neg p\models r$$, alors $$r$$ est une tautologie, VRAI
1. Si $$p\models q$$ et $$p\models \neg q$$, alors $$\models\neg p$$, VRAI
1. Si $$p\models q$$ et $$q\models r$$, alors $$p\models r$$, VRAI


## Déduction naturelle

Les règles utilisées sont : 

1. "Élimination du et (gauche)"
2. "Introduction du ou (gauche)"
3. Deduction + "Élimination du et (gauche)"
4. Modus ponens + Affaiblissement
5. Deduction + Affaiblissement
6. Absurde + "Introduction du et" + Affaiblissement
7. Deduction + Deduction + Affaiblissement
8. Absurde + "Introduction du et" + Affaiblissement
9. Modus ponens + ( Absurde + "Introduction du et" + Affaiblissement) (Deduction + Affaiblissement)
10. $$\vdash (p\to q) \to (\neg q \to \neg p)$$ : Deduction + Deduction + Absurde + (Affaiblissement)(Modus ponens + Affaiblissement)

# TD 4

##Sémantique du calcul des prédicats

1. Equivalentes
1. Equivalentes
1. Non équivalentes
1. Equivalentes
1. Non équivalentes
1. Non équivalentes

## Forme prénexe

**Mettre les prédicats suivants en forme normale prénexe.**

1. $$\exists x \forall y.(\neg(x + y = 1))$$,

2. $$\exists x \exists y(\neg(R(x) \wedge Q(y))$$,

3. $$\exists x \exists y (\neg(R(x) \vee S(y)) \vee R(z) )$$,

4. $$\exists x \exists z \forall w (\neg (x \ge y \wedge z \le y)) \vee w=y)$$.


## Prédicats en arithmétique

**Modéliser le langage des mathématiques.**

1. $$\forall x.x*x\ge0$$,
2. $$\exists x. n*x = m$$,
3. $$\forall n. (n=8*a)\to (n=2*b)$$,
4. $$\exists x. (2*a=x \wedge 3*b=x)$$.

# Important

Cette correction est là pour vous aider à vous entraîner.
Les réponses ne sont pas détaillées, mais **vos réponses en examen doivent être détaillées, vous devez expliquer la façon dont vous êtes arrivés au résultat**.


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
$$f(A\cap B) = ∅. f(A) \cap f(B) = \{c\}$$

2. $$f(A \cup B) = f(A) \cup f(B)$$ : OUI

Soit $$y \in f(A \cup B), y = f(x)$$ avec $$x \in (A \cup B)$$. Donc $$x \in A$$ ou $$x \in B$$, donc $$y=f(x) \in f(A)$$ ou $$y \in f(B)$$. On a alors $$y \in f(A) \cup f(B)$$. Donc $$f(A \cup B) \subset f(A) \cup f(B)$$.

Si $$y \in f(A) \cup  f(B) $$ alors $$y = f(x')$$ avec $$x' \in A $$ ou $$y = f(x'')$$ avec $$x'' \in B$$ donc $$\exists x \in (A \cup B)$$ tel que $$y \in f(A \cup B)$$. Donc  $$f(A) \cup f(B) \subset f(A \cup B)$$.

On a l'égalité.

3. $$f^{-1}(C \cap D) = f^{-1}(C) \cap f^{-1}(D)$$ : OUI

Soit $$x \in f^{-1}(C \cap D)$$ donc $$f(x) \in C \cap D$$ et $$f(x) \in C \cap f(x) \in D$$. Donc $$x \in A \cap B$$ donc $$x \in f^{-1}(C) \cap f^{-1}(D)$$. On a alors $$x \in f^{-1}(C)$$ et $$x \in f^{-1}(D)$$. Donc $$f(x) \in C \cap D$$ et $$x \in f^{-1}(C \cap D)$$.

4. $$f^{-1}(C \cup D) = f^{-1}(C) \cup f^{-1}(D)$$ : OUI (Vérifier les deux sens)
5. $$f^{-1}(f(A)) = A$$ : NON

$$A = {a}, B = {b}, C ={c}$$ et $$f(a) = f(b) = c$$. Donc $$f(A) = {c}$$, et $$f({c}) = A \cup B $$

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

1. La fonction $$f : \mathbb{N} \to \mathbb{N}$$ définie par $$f(n) = 2n$$ : Non réflexive, Non symétrique, Non transitive ;

1. La fonction $$f : \mathbb{R} \to \mathbb{R}$$ définie par $$f(x) = 1/x$$ : Non réflexive, Symétrique, Non transitive ;

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

Relation d'équivalence :

Réflexivité : bRb : b a le même reste de la division par n que b, donc la relation est réflexive

Symétrique : aRb -> bRa : On a aRb donc a-b = qn, donc b-a=-qn =(-q)n donc b est équivalent modulo $$n$$ à a, donc la relation est symétrique

Transitive : aRb et bRc : On a a-b = qn et b-c=rn. Donc b = rn' +c. On a a - (rn+c) = qn -> a-c = qn + rn -> a-c = (q+r)n, donc la relation est transitive.

Les classes d'équivalences : $$R(a) = \{ b\in \mathbb{N} \;\vert\; n \text{ divise } b-a\}$$


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

Pour $$\overline{(1, 1)}$$ = {(1,1),(3,1),(5,1),(7,1),(1,4),(3,4),(5,4),(7,4),(1,7),(3,7),(5,7),(7,7)} = 12 éléments.

Pour $$\overline{(1, 2)}$$ = {(1,2),(3,2),(5,2),(7,2),(1,5),(3,5),(5,5),(7,5),(1,8),(3,8),(5,8),(7,8)} = 12 éléments.

Pour $$\overline{(1, 3)}$$ = {(1,3),(3,3),(5,3),(7,3),(1,6),(3,6),(5,6),(7,6)} = 8 éléments.


3. Soit $$q \in E$$. Montrer que si $$(x, y) \in \overline{(1, q)}$$, alors $$(x + 1, y) \in \overline{(2, q)}$$.

Si $$(x,y) \in \overline{(1, q)}$$, on a x-1 qui est pair. x-1 pair donc x-1 +2 reste pair donc x+1 est aussi pair.
 
3. Combien y a-t-il de classes d’équivalence différentes ? Donner leur liste.

p-p' pair donc (p,p') pair ou (p,p') impaire. On a 2 possibilités. 

q-q' divisible par 3 si q et q' sont congrus modulo 3. On a 2 possibilités.

On a alors 2*3= 6 classes d'équivalences : (1,1),(1,2),(1,3),(2,1),(2,2),(2,3).

3. Déterminer le cardinal de chaque classe d’équivalence. Le résultat est-il compatible avec la cardinalité de $$E\times E$$?

card(2,1) = card(1,1) = 12.
card(1,2) = card(2,2) = 12.
card(1,3) = card (2,3) = 8.

On a 4 * 12 + 2*8 = 64 (card(ExE)).

# TD 7


## Preuves sur les entiers

Démontrer par induction les propriétés suivantes.

1. Pour tout entier $$n$$, $$\sum_{i=0}^n i = n(n + 1)/2$$ ;

Pour n = 0 : $$\sum_{i=0}^n i = 0$$.

On suppose la propriété vraie pour n. 

Prouvons-la pour n+1 : 
$$\sum_{i=0}^{n+1} i = \sum_{i=0}^n i + (n+1) =  \frac{n(n + 1)}{2} + (n+1) =   \frac{n(n + 1) + 2*(n+1)}{2} =  
\frac{(n + 1)(n+2)}{2}.$$
CQFD

1. Pour tout entier $$n$$, $$7^n - 1$$ est divisible par 6 ;

Pour n = 0 : $$7^n - 1 = 1-1 = 0$$ divisible par 6.

On suppose la propriété vraie pour n. 

Prouvons-la pour n+1 : 
$$7^{n+1} - 1 = 7*7^n - 1 = 7*(7^n -1 +1) -1 = 7*(7^n -1) +7 -1 = 7*(7^n -1) +6.$$ On a $$(7^n -1)$$ divisible par 6, donc $$7*(7^n -1)$$ est divisible par 6, et  $$7*(7^n -1) +6$$ est donc divisible par 6 (par addition de nombre divisible par 6).
CQFD

1. Pour tout entier $$n$$, $$(n^3 - n)$$ est divisible par 3 ;

Pour n = 0 : $$(n^3 - n) = 0 $$est divisible par 6.

On suppose la propriété vraie pour n. 

Prouvons-la pour n+1 : 

$$(n+1)^3 - (n+1) = (n+1)(n+1)^2 - (n+1) = (n+1)(n^2 +2n + 1)^2 - (n+1) $$

$$= n^3+2n^2+n+n^2+2n+1-n-1 $$

$$= n^3+3n^3+3n-n =  n^3-n+3(n^3+ n)$$.

Par hypothèse $$n^3-n$$ est divisible par 3. On a $$3(n^3+ n)$$ divisible par 3, donc par addition de nombres divisibles par 3, $$(n+1)^3 - (n+1)$$ est divisible par 3.

CQFD

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
