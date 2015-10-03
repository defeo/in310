---
layout: post
title: Preuves par induction
---

#### Sommes

Dans les sommes suivantes, remplacer l'indice de sommation par $$k=i-1$$.

1. $$\sum_{i=1}^n i(i-1) = \frac{n(n^2 - 1)}{3}$$.

1. $$\sum_{i=1}^n\sum_{j=1}^n 1^i 1^j = n^2$$.


Étendez les sommes de l'exercice précédent en remplaçant $$n$$ par $$n+1$$.


#### Preuves sur les entiers

Démontrer par induction les propriétés suivantes.

1. Pour tout entier $$n$$, $$\sum_{i=0}^n i = n(n + 1)/2$$ ;
1. Pour tout entier $$n$$, $$7^n - 1$$ est divisible par 6 ;
1. Pour tout entier $$n$$, $$(n^3 - n)$$ est divisible par 3 ;
1. Pour tout entier $$n$$, $$1+3+5+\cdots+(2n-1) = n^2$$ ;
1. Pour tout entier $$n$$, $$\sum_{i=0}^n i^2 = \frac{n(n+1)(2n+1)}{6}$$ ;
1. Pour tout entier $$n$$, $$\sum_{i=0}^n i^3 = \frac{n^2(n+1)^2}{4}$$.

---------

**Rappel :** On note $$n!$$ est on lit « $$n$$ factoriel » le produit $$1\cdot 2\cdot 3\cdots n$$.

Prouver les inégalités suivantes.

1. $$2^n < n!$$ pour tout $$n\ge 4$$.
1. $$n! < n^n$$ pour tout $$n > 1$$.
1. L'*inégalité de Bernouilli*: $$1 + nh \le (1+n)^h$$ pour tout $$n>0$$ et tout $$h \ge 0$$.


#### Induction forte

**Rappel :** On dit qu'une preuve utilise l'**induction forte** lorsque le pas inductif a la forme $$(\forall i < n. P(i))\Rightarrow P(n)$$, plutôt que $$P(n-1)\Rightarrow P(n)$$. Autrement dit, on utilise comme hypothèse de récurrence le fait que la propriété est vraie pour tous les entiers plus petits que $$n$$, plutôt que seulement pour $$n-1$$.

Prouver par induction forte que tout entier $$n \ge 12$$ peut être exprimé sous la forme $$4a+5b$$ avec $$a$$ et $$b$$ des entiers positifs.

#### Arguments fallacieux

Dire où se trouvent les erreurs dans les preuves suivantes.

**Théorème :** $$\sum_{i=0}^n 1^i = n + 2$$

On suppose la propriété vraie pour $$n$$, c'est à dire $$\sum_{i=0}^n 1^i = n + 2$$. On veut montrer la propriété pour $$n+1$$ : on a $$\sum_{i=0}^{n+1} 1^i = 1^{n+1} + \sum_{i=0}^n 1^i$$, ce qui par hypothèse de récurrence est égal à  $$1^{n+1} + n + 2= (n+1) + 2$$. CQFD.

----

**Théorème (Pólya):** Tous les chevaux sont blancs.

Ce célèbre faux théorème est dû à Pólya. On va montrer par induction que, s'il y a un groupe de $$n$$ chevaux, alors tous les chevaux du groupe ont la même couleur. Comme on sait qu'il existe un cheval blanc, tous les chevaux sont nécessairement blancs.

On considère tout d'abord un groupe formé d'un seul cheval. Dans ce cas il est évident que tous les chevaux du groupe ont la même couleur.

On suppose maintenant que la propriété est vraie pour un groupe de $$n$$ chevaux. On considère alors
un groupe de $$n + 1$$ chevaux, qu'on ordonne arbitrairement. Si on enlève le premier cheval, il reste un groupe de $$n$$ chevaux, qui ont donc tous la même couleur par hypothèse de récurrence. Si on enlève le dernier cheval, il reste à nouveau un groupe de $$n$$ chevaux tous de la même couleur. Puisque ces deux groupes ont au moins un cheval en commun, tous les chevaux des deux groupes ont la même couleur, et donc tous les $$n+1$$ chevaux ont la même couleur.


## Suites récurrentes

**Rappel :** On définit les [nombres de Fibonacci](../../poly/induction#suite-de-fibonacci) par la récurrence suivante :

- $$F(0) = 0$$,
- $$F(1) = 1$$,
- $$F(n) = F(n-1) + F(n-2)$$.

Prouver les identités suivantes:

1. $$\sum_{i=0}^n F(i) = F(n+2) - 1$$ pour tout $$n\ge0$$.

1. $$\sum_{i=0}^n F(i)^2 = F(n)F(n+1)$$ pour tout $$n\ge0$$.

1. $$F(n)^2 = F(n-1)F(n+1) + (-1)^{n+1}$$ pour tout $$n>0$$.

1. $$1 < \frac{F(n+1)}{F(n)} < 2$$ pour tout $$n>2$$.


## Définitions récursives

Donner une définition récursive des fonctions $$f:\mathbb{N}\to\mathbb{N}$$ suivantes :

1. $$f(n) = 2^n$$,
1. $$f(n) = n!$$.

-----

Donner une définition récursive des propriétés suivantes :

1. $$n$$ est une puissance de $$10$$.
1. $$n$$ est pair.
1. L'écriture décimale de $$n$$ ne contient que des $$1$$.

