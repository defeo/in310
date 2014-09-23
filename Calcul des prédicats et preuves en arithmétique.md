---
layout: post
title: Calcul des prédicats et preuves en arithmétique
---

## Modélisation du langage

1. Écrire sous forme de formules du premier ordre :

	- Il existe des livres savants et ennuyeux ;
	- Il existe des livres savants et il existe des livres ennuyeux ;
	- Il existe un entier naturel inférieur ou égal à tous les autres ;
	- Si quelqu’un fume, je suis gêné ;
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

## Forme normale prénexe

**Rappel :** Un prédicat est dit en *forme normale prénexe* (en
  anglais, PNF) s'il est de la forme

$$\Theta a. \Theta b. \dots \Theta z. P(a,b,\dots,z)$$

où les $$\Theta$$ sont des quantificateurs $$\forall$$ ou $$\exists$$, et
$$P(a,b,\dots,z)$$ est un prédicat sans quantificateurs. Pour tout
prédicat il existe un prédicat sémantiquement équivalent (en logique
classique) en PNF ; ce prédicat peut être obtenu à l'aide de quelques
transformations élémentaires, que nous listons ci-dessous.

Les équivalences remarquables du calcul des propositions :

- Lois de De Morgan : $$\neg (A \vee B) \equiv \neg A \wedge \neg B, \quad \neg (A \wedge B) \equiv \neg A \vee \neg B$$ ;
- Distributivité : $$A \wedge (B \vee C) \equiv (A \wedge B) \vee (A \wedge C), \quad A \vee (B \wedge C) \equiv (A \vee B) \wedge (A \vee C)$$ ;
- Implication : $$A \to B \equiv \neg A \vee B$$ ;
- Double négation : $$\neg\neg A \equiv A$$.

Les équivalences du calcul des prédicats vues plus haut, en particulier :

- $$\neg\forall x.P \equiv \exists x.\neg P$$ ;
- $$\neg\exists x.P \equiv \forall x.\neg P$$.

Les équivalences concernant la conjonction et disjonction des prédicats :

- $$(\forall x. P) \wedge Q \equiv \forall x. (P \wedge Q)$$ seulement
  si $$x$$ n'est pas libre dans $$Q$$ ;
- $$(\forall x. P) \vee Q \equiv \forall x. (P \vee Q)$$ seulement si
  $$x$$ n'est pas libre dans $$Q$$.

Moyennant un rennomage de la variable $$x$$ dans $$P$$, ces deux
dernières règles peuvent être appliquées en toute circonstance.

D'autres règles de transformation peuvent être déduites à partir de
celles que nous venons de donner.

1. À l'aide des règles ci-dessus, mettre les prédicats suivants en forme normale prénexe :

	* $$\neg (\forall x. \exists y. (x + y = 1))$$ ;
	* $$\neg((\forall x. R(x)) \wedge (\forall x. S(x)))$$ ;
	* $$(\forall x. (R(x) \vee S(y))) \to (\exists x. R(x))$$ ;
	* $$((\forall x. x \ge y) \wedge (\forall x. x \le y)) \to (\forall x. x = y)$$.

3. Prouver les équivalences suivantes :

	* $$(\exists x. P) \wedge Q \equiv \exists x. (P \wedge Q)$$ seulement si $$x$$ n'est pas libre dans $$Q$$ ;
	* $$(\exists x. P) \vee Q \equiv \exists x. (P \vee Q)$$ seulement si $$x$$ n'est pas libre dans $$Q$$ ;
	* $$(\forall x. P) \to Q \equiv \exists x. (P \to Q)$$ seulement si $$x$$ n'est pas libre dans $$Q$$ ;
	* $$P \to (\forall x. Q) \equiv \forall x. (P \to Q)$$ seulement si $$x$$ n'est pas libre dans $$P$$.


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
