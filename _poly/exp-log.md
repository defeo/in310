---
title: Rappels sur l'exponentielle et le logarithme
---

Des longues années passées à en étudier les propriétés analytiques font
souvent oublier à l’étudiant la nature purement arithmétique de la
fonction exponentielle et de son inverse, le logarithme.

S’il est vrai que l’étude analytique de ces fonctions a grandement
contribué à l’avancée des mathématiques du XVI au XIX siècle, ce qui
justifie largement l’intérêt qui leur est porté dans les études
secondaires, l’informaticien a beaucoup plus souvent à faire avec les
propriétés arithmétiques de celles-ci.

Dans ce qui suit, nous donnons les définitions et les quelques
propriétés élémentaires que tout informaticien devrait connaître sur le
bout des doigts.

## Les fonctions exponentielles

Soit $$a$$ un nombre réel strictement positif différent de 1, la *fonction
exponentielle* de base $$a$$ est la fonction

$$\exp_a : x \mapsto a^x$$

qui à tout réel $$x$$ associe $$a^x$$. Il s’agit d’une fonction définie pour
tout réel $$x$$, continue partout, prenant toutes les valeurs de 0 à
l’infini, croissante si $$a > 1$$ et décroissante si $$0 < a < 1$$.

En analyse, lorsque on ne précise pas la base, il est sous-entendu qu’on
parle de la fonction exponentielle de base $$e$$, où

$$e = \lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n \sim 2.78\dots$$

est la constante de Néper.

En informatique, au contraire, ce sont les bases entières qui sont les
plus intéressantes, et la fonction exponentielle la plus importante est
sans doutes celle de base 2.

Indépendamment de la base, les propriétés fondamentales de la fonction
exponentielle se résument à

-   $$a^x a^y = a^{x+y}$$,
-   $$(a^x)^y = a^{xy}$$,
-   $$a^{-x} = \frac{1}{a^x}$$.

## Les logarithmes

Le *logarithme* en base $$a$$, noté $$\log_a$$ est par définition la
**fonction inverse** de l’exponentielle en base $$a$$. Les égalités

$$\log_a a^x = a^{\log_a x} = x$$

la définissent univoquement. Le logarithme est une fonction définie pour
tout réel $$x > 0$$, continue partout où elle est définie, prenant toute
valeur réelle, strictement croissante si $$a>1$$ et décroissante si
$$0 < a < 1$$.

Lorsque on ne précise pas la base, les analystes sous-entendent la base
$$e$$. Le logarithme est dans ce cas appelé *logarithme naturel* ou
*logarithme népérien*. Une autre notation pour le logarithme naturel est
$$\ln x$$.

Les informaticiens, au contraire, ont plutôt tendance à sous-entendre la
base $$2$$, ou parfois une base entière quelconque.

En plus des propriétés le définissant, le logarithme a les propriétés
élémentaires suivantes, découlant directement des propriétés
élémentaires de l’exponentielle:

-   $$\log_a bc = \log_a b + \log_a c$$,
-   $$\log_a b^c = c\,\log_a b$$,
-   $$\log_a \frac{1}{b} = -\log_a b$$.

La preuve de ces égalités est assez simple. À titre d’exemple, nous
allons donner une ébauche de la première. On suppose que $$b$$ et $$c$$ sont
strictement positifs, sans quoi les logarithmes ne seraient pas bien
définis. Par conséquent, à cause des propriétés de l’exponentielle, il
existe des réels positifs $$B$$ et $$C$$ tels que

$$b = a^B,\qquad c = a^C.$$

Or, on a d’une part

$$\log_a bc = \log_a a^B a^C = \log_a a^{B+C} = B+C,$$

où la dernière égalité découle de la définition du logarithme. D’autre
part on a

$$\log_a b + \log_a c = \log_a a^B + \log_a a^C = B+C.$$

**Exercice:** prouver les deux autres égalités.

Grâce au logarithme, on peut donner une formule de changement de base
pour l’exponentielle et pour le logarithme. Soient $$a$$ et $$b$$ deux
entiers strictement positifs et différents de $$1$$. On a

$$\log_a b = \frac{1}{\log_b a}.$$

En effet

$$b^{(\log_b a)(log_a b)} = \left(b^{\log_b a}\right)^{\log_a b} = a^{\log_a b} = b,$$

d’où on déduit, grâce à
l’[injectivité](../fonction#injectivité-surjectivité-bijectivité) de
l’exponentielle de base $$b$$,

$$(\log_b a)(\log_a b) = 1.$$

De cette propriété découlent les formules de changement de base
suivantes

$$a^x = b^{x\log_b a} = b^{\frac{x}{\log_a b}},$$

$$\log_a b = (\log_c b)(\log_a c) = \frac{\log_c b}{\log_c a}.$$

En effet, la première égalité découle immédiatement des propriétés vues
plus haut, puisque

$$b^{x\log_b a} = (b^{\log_b a})^x = a^x.$$

**Exercice:** démontrer la deuxième égalité.