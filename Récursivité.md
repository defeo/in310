---
layout: post
title: Récursivité
---

Cet article traite de la récursion en tant qu'outil pour la définition d'objets mathématiques (en particulier de [fonctions](Fonction)). Pour la technique de preuve dite *par récurrence*, voir [Induction](Induction et récursion).

La récursivité est une technique qui consiste à définir un objet mathématique en fonction d'objets analogues *plus petits*. La récursivité et l'[Induction](Induction et récursion) sont intimement liées et souvent on peut utiliser l'un ou l'autre mot de façon interchangeable (voir [Induction ou Récursivité](Induction et récursion)).

## Exemples

Les constructions récursives que l'on rencontre le plus souvent définissent des fonctions sur les entiers ou sur d'autres structures dotées d'un [ordre bien fondé](Ordre#ordres-bien-fondés).

### Fonctions récursives sur les entiers

Une fonction de $$\mathbb{N}$$ dans $$\mathbb{N}$$ est définie récursivement de la façon suivante:

- par un *cas de base* (ou *cas particulier*) qui donne une valeur pour la fonction à un entier fixé (en général $$0$$ ou $$1$$): par exemple $$f(0) = 1$$;
- par un *cas inductif* (ou *cas général*) qui définit la valeur à un entier $$n$$ en fonction de sa valeur à un ou plusieurs entiers plus petit: par exemple $$f(n) = f(n-1) + n$$.

#### Factorielle

La fonction factorielle $$n!$$ peut être définie récursivement de la façon suivante:

- $$0! = 1$$,
- $$n! = (n-1)! \cdot n$$ pour $$n>0$$.

#### Suite de Fibonacci

La suite de Fibonacci est un exemple de définition récursive basée non seulement sur la valeur de la fonction à $$n-1$$, mais aussi sur sa valeur à $$n-2$$. Par conséquent, deux cas de base sont nécessaires afin d'éviter une définition mal formée.

- $$F(0) = 0$$,
- $$F(1) = 1$$,
- $$F(n) = F(n-1) + F(n-2)$$ pour $$n>1$$.

La suite de Fibonacci apparaît régulièrement en mathématiques, allez voir sa [page Wikipedia](http://fr.wikipedia.org/wiki/Suite_de_Fibonacci) est un bon point de départ pour se faire une culture là dessus. Régulièrement, on trouve même des biologistes, des historiens et toute autre sorte de savants qui prétendent, à raison ou à tort, avoir rencontré la suite de Fibonacci dans leurs études. Cette [page Wikipedia](http://en.wikipedia.org/wiki/Fibonacci_number#In_nature) vous donnera quelques idées.

#### Nombres de Catalan

Les nombres de Catalan sont un autre exemple de définition récursive basée non seulement sur la valeur de la fonction à $$n-1$$. Ils sont définis ainsi:

- $$C(0) = 1$$,
- $$C(n+1) = \sum_{i=0}^n C(i) \cdot C(n-i)$$ pour $$n>0$$.

Les nombres de Catalan apparaissent aussi très fréquemment, dès que l'on travaille avec des [arbres binaires](http://fr.wikipedia.org/wiki/Arbre_binaire). On peut montrer l'égalité suivante

$$C(n+1) = \frac{2(2n+1)}{n+2}C(n)\qquad\mathrm{pour tout } n>0.$$

#### Exponentielle

La fonction exponentielle est définie de la façon suivante:

- $$\exp(0) = 1$$,
- $$\exp(n) = e\cdot\exp(n-1)$$ pour $$n>0$$.

Cependant, une autre définition tout à fait légitime est:

- $$\exp(0) = 1$$,
- $$\exp(n) = \exp(n/2)^2$$ si $$n>0$$ est pair,
- $$\exp(n) = e\cdot\exp(\lfloor n/2\rfloor)^2$$ si $$n$$ est impair.

Cette deuxième définition a un intérêt algorithmique, puisque elle est à la base de l'algorithme d'[exponentiation binaire](#exponentiation-binaire).

### Autres fonctions récursives

On peut définir des fonctions ou des propriétés récursives sur autre chose que les entiers. Les chaînes de caractères, par exemple, s'y prêtent très bien.

#### Palindrômes

Une chaine de caractères est palindrome si elle se lit de la même façon de gauche à droite et de droite à gauche. Par exemple, *abba* et *radar* sont palindromes. On peut définir la palindromie de la façon suivante:

- La chaîne vide est palindrome,
- toute chaîne d'un seul caractère est palindrome,
- si $$S$$ est un palindrome, alors $$xSx$$ est palindrome pour tout caractère $$x$$.

#### Expressions bien parenthésées

On s'intéresse aux chaînes de caractères dans lesquelles les parenthèses ouvrantes et fermantes sont bien distribuées. Par exemple, $$(ab(cd))$$ est bien parenthésée, mais $$(ab))(cd$$ ne l'est pas. En ignorant les caractères qui ne sont pas de parenthèses (et qui ne jouent aucun rôle), on se ramène à étudier les chaînes constituées exclusivement de parenthèses. Une expression bien parenthésée est définie alors de la manière suivante:

- La chaîne vide est bien parenthésée,
- si $$A$$ et $$B$$ sont bien parenthésées, alors $$AB$$ est bien parenthésée,
- si $$A$$ est bien parenthésée, alors $$(A)$$ est bien parenthésée.

**Exercice:** On peut démontrer que le nombre d'expressions bien parenthésées contenant exactement $$n$$ parenthèses ouvrantes est égal au [nombre de Catalan](#nombres-de-catalan) $$C(n)$$. Prouvez cette propriété par récurrence. (**Suggestion:** Commencez par trouver une autre définition récursive des expressions bien parenthésées qui n'utilise qu'un cas de base et un cas inductif).


## Définition générale

De manière intuitive, une fonction (ou une propriété) récursive est une fonction qui est définie en termes d'elle même. Ceci ne suffit pas à définir correctement une fonction, car par exemple l'égalité $$f(x) = f(x)$$ ne définit aucune fonction en particulier (toute fonction a cette propriété).

Soit $$A$$ un [ensemble](Ensemble) muni d'une relation d'[ordre](Ordre) [bien fondée](Ordre#ordres-bien-fondés) $$\prec$$, et soit $$B$$ un autre ensemble quelconque. Une fonction (récursive) $$f:A\to B$$ est *bien définie* (ou *cohérente* ou *bien fondée*) si pour tout $$a\in A$$ la définition de $$f$$ ne fait intervenir que des valeurs $$f(a')$$ pour $$a'<a$$.

**Nota bene:** Cette définition définition n'impose pas que $$f$$ soit *nécessairement* définie en termes d'elle même pour tout $$a$$; ceci arrive notamment pour les cas de base (par exemple la valeur de [Fibonacci](#suite-de-fibonacci) en $$0$$ et $$1$$).

D'un autre côté la définition **impose** que la fonction **ne soit pas définie en termes d'elle même aux [éléments minimaux](Ordre#ordres-bien-fondés)** de $$A$$. En effet, si $$a$$ est un élément minimal (par exemple $$0\in\mathbb{N}$$), il n'y a aucun élément plus petit que $$a$$, donc la définition de $$f$$ ne peut faire recours à aucune autre valeur de $$f$$.

**Exercice:** Pour chacune des fonction récursives définies précédemment, trouvez l'ordre bien fondé qui garantit la cohérence de la définition.

**Exercice:** Démontrez par [Induction](Induction et récursion) que toute fonction bien définie à une valeur unique à chaque élément de $$A$$.

## Récursion en informatique

La récursivité est tellement omniprésente en mathématiques, que tous les langages de programmation modernes permettent d'écrire des programmes récursifs, c'est à dire des programmes qui s'appellent eux mêmes.

### Factorielle

L'exemple suivant, écrit en [Python](Python) définit une fonction qui calcule la factorielle $$n!$$ pour tout $$n$$ positif.

~~~
def fact(n):
    if n < 0:
        raise Error
    elif n == 0:
        return 1
    else:
        return n * fact(n-1)
~~~

### Exponentiation

En imitant la [définition récursive de l'exponentielle](#exponentielle), on peut écrire une fonction qui calcule $$c^n$$ pour tout $$c$$ et pour tout entier $$n$$.

~~~
def exp(c, n):
    if n < 0:
        return 1 / exp(c, -n)
    elif n == 0:
        return 1
    else:
        return c * exp(c, n-1)
~~~

### Diviser pour régner

Le principe *diviser pour régner* est l'un des outils fondamentaux en algorithmique. L'idée consiste à résoudre un problème
en le coupant en deux sous-problèmes de taille à peu près égale, qu'on résout de façon récursive. Ce principe permet souvent d'obtenir des gains d'efficacité considérables.

#### Exponentiation binaire

En utilisant la [seconde définition récursive pour l'exponentielle](#exponentielle), on peut ré-écrire la fonction précédente de la manière suivante

~~~
def bin_exp(c, n):
    if n < 0:
        return 1 / bin_exp(c, -n)
    elif n == 0:
        return 1
    else:
        tmp = bin_exp(c, n // 2)
        tmp *= tmp
        if n % 2 == 1:
            tmp *= c
        return tmp
~~~

Un appel d'une fonction à elle même est dit un *appel récursif*. Si on compte combien d'appels récursifs ont lieu lors d'un appel à `exp(2,10)` on vérifie que celui-ci appelle `exp(2,9)`, qui appelle `exp(2,8)` et ainsi de suite, pour un total de 10 appels. D'un autre côté un appel à `bin_exp(2,10)` engendre un appel à `bin_exp(2,5)`, puis à `binexp(2,2)`, puis à `bin_exp(2,1)` et enfin à `bin_exp(2,0)`, pour un total de 4 appels. En général, `exp` fera $$n$$ appels récursifs, alors que `bin_exp` en fera seulement $$\lceil\log_2n\rceil$$.

L'algorithme `bin_exp` est appelé *exponentiation binaire*, à cause du lien avec l'écriture de $$n$$ en base $$2$$.

**Exercice:** Étudiez le rapport entre l'exponentiation binaire et l'écriture de $$n$$ en base $$2$$ et donnez-en une version itérative (c'est à dire avec des boucles `for` ou `while` et pas d'appels récursifs).


## Pour approfondir

### La Tour de Hanoï

Allez voir cet [exercice](Exercices#tour-de-hanoï)
