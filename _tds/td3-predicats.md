---
title: Calcul des prédicats et preuves en arithmétique
---

## Modélisation du langage

1. Écrire sous forme de formules du premier ordre :

	- Il existe des livres savants et ennuyeux ;
	- Il existe des livres savants et il existe des livres ennuyeux ;
	- Il existe un entier naturel inférieur ou égal à tous les autres ;
	- Si quelqu'un fume, je suis gêné ;
	- Si tout le monde fume, je suis gêné ;
	- Un enseignant est heureux si tous ses étudiants aiment la logique ;
	- Chaque ville a un employé de la fourrière qui a été mordu par chaque chien de la ville ;
	- Il existe un seul Dieu.

2. En utilisant la *signature* $$+,-,\times,=,\ge$$ et les constantes
   numérales, traduire en langage logique les phrases suivantes.

	* Le carré de tout nombre est positif ;
	* $$n$$ divise $$m$$ ;
	* Un nombre divisible par 8 est divisible par 2 ;
	* Il existe un nombre pair divisible par 3 ;
	* Le produit de deux nombres réels est positif si et seulement si ces deux nombres réels sont positifs ;
	* Les deux seules solutions de l'équation $$x^2 - 5x + 6 = 0$$ sont 2 et 3 ;
	* $$a$$ est l'inverse multiplicatif de $$b$$ ;
	* L'inverse (multiplicatif) de tout nombre est unique.

## Variables libres, variables liées

Pour chacun des prédicats suivants, dessiner l'arbre de formation,
indiquer les variables libres et les variables liées, puis remplacer
chaque variable liée par une nouvelle variable (choisir une lettre pas
encore employée).

* $$P(x) \vee Q(y)$$ ;
* $$(\forall x. P(x)) \vee \neg Q(y)$$ ;
* $$\forall x. (P(x) \vee Q(y))$$ ;
* $$(\forall x. P(x)) \vee (\exists x. Q(x))$$ ;
* $$\forall x. (P(x) \vee Q(x))$$.

## Équivalences remarquables

1. Les propositions suivantes sont-elles équivalentes ? Si non, est-ce
   que l'une implique l'autre ?

	* $$\neg(\exists x. P(x))$$ et $$(\forall x. \neg P(x))$$ ;
	* $$(\forall x. P(x) \wedge Q(x))$$ et $$((\forall x. P(x)) \wedge (\forall x. Q(x)))$$ ;
	* $$((\forall x. P(x)) \vee (\forall x. Q(x))$$ et $$(\forall x. P(x) \vee Q(x))$$ ;
	* $$(\exists x. P(x) \vee Q(x))$$ et $$((\exists x. P(x)) \vee (\exists x. Q(x))$$ ;
	* $$(\exists x. P(x) \wedge Q(x))$$ et $$((\exists x. P(x)) \wedge (\exists x. Q(x)))$$ ;
	* $$(\exists x. \forall y. P(x,y))$$ et $$(\forall y. \exists x. P(x,y))$$.

2. Écrire la négation des formules suivantes :

	* $$∀x. p(x) ⇒ q(x)$$ ;
	* $$∃x. p(x) ∧ q(x)$$ ;
	* $$∀x. ∀y. ( p(x,y) ∧ q(x,y) ) ⇒ r(x, y)$$ ;
	* $$∃x. ∀y. q(x, y) ⇒ ( p(x, y) ∨ r(x, y) )$$.


## Un peu de semantique

Quelle est la valeur de vérité des prédicats suivants ?

* Il n'existe pas de contre-exemple $$a$$ à l'affirmation « si pour
  tout $$b$$ le produit $$ab$$ équivaut à 0, alors $$a$$ vaut 0 » ;
* Pour tout couple $$n,m$$ d'entiers, si $$n$$ est pair et $$m$$ est
  impair, alors $$1+1=2$$ ;
* $$\forall a\in\mathbb{Z}. (\exists b.(a = 2b) \wedge \exists c.(a = 2c+1)) \Rightarrow 1+1=0$$ ;
* Si le reste de la division de $$a$$ par 3 est 1, et si le reste de
  la division de $$b$$ par 3 est 2, alors $$a+b$$ est divisible par
  3 ;
* L'opposé de tout nombre est unique (**suggestion :** utilisez
  l'absurde).

## Modèles du calcul des prédicats

1. On note **A1**, **A2** et **A3** les trois formules suivantes : 

	> **A1** : $$∀x. ∃y. y = x + 1$$ ;
	>
	> **A2** : $$∃x. ∀y. x ≤ y$$ ;
	>
	> **A3** : $$∀x. ∀y. \bigl( (x + 1 = y + 1 ) ⇒ x = y \bigr)$$.

	* Montrer que ces trois formules sont indépendantes.
	* Donner trois modèles très différents vérifiant ces trois formules.

2. Donner des contre-exemples pour montrer que les formules suivantes
   ne sont pas toujours vraies :

	* $$\bigl(∀x. ∃y. A(x, y)\bigr) ⇒ ∃y. A(y, y)$$ ;
	* $$\bigl(∃x. ∃y. A(x, y)\bigr) ⇒ ∃y. A(y, y)$$ ;
	* $$\bigl((∃x. A(x)) ⇔ (∃x. B(x))\bigr) ⇒ ∀x. (A(x) ⇔ B(x))$$ ;
	* $$\bigl(∃x. A(x) ⇒ B(x)\bigr) ⇒ \bigl((∃x. A(x)) ⇒ (∃x. B(x))\bigr)$$.

3. Déterminer si les formules suivantes sont toujours vraies :

	* $$\bigl((∃x. A(x)) ⇒ (∃x. B(x))\bigr) ⇒ \bigl(∃x. A(x) ⇒ B(x)\bigr)$$ ;
	* $$¬\bigl(∃y. ∀x. A(x, y) ⇔ ¬ A(x, x) \bigr)$$ ;
	* $$\bigl(∀x. ∃y. A(x, y) ⇒ B(x, y) \bigr) ⇔ \bigl(∀x. ∃y. ¬A(x, y) ∨ B(x, y) \bigr)$$.
