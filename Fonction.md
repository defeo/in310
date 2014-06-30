---
layout: post
title: Fonction
---

Une fonction est une loi qui associe à chaque élément d'un ensemble A un unique élément d'un ensemble B.

## Définition et notation

Une **fonction** $$f$$ d'un ensemble $$A$$ vers un ensemble $$B$$ est une [relation](Relation) entre les deux ensembles telle que à tout élément de $$A$$ correspond un seul élément de $$B$$. On note cela

$$f:A\to B$$

et pour tout élément $$a\in A$$ on écrit $$f(a)=b$$ ou $$f:a\mapsto b$$ pour indiquer que la fonction $$f$$ associe $$a$$ à $$b$$.

L'ensemble $$A$$ de départ est appelé le **domaine** ou la **source** de $$f$$, tandis que l'ensemble $$B$$ est appelé le **codomaine** ou le **but** de $$f$$. 

Graphiquement, une fonction peut être représentée par des [diagrammes de Venn](Ensemble#diagrammes-de-venn) à l'aide de flêches du domaine vers le codomaine, comme dans le dessin suivant:

![](http://upload.wikimedia.org/wikipedia/commons/e/e7/Aplicación.svg "Fonction")


### Fonctions partielles

Une fonction **partielle** de $$A$$ vers $$B$$ est une [relation](Relation) entre les deux ensembles telle que à tout élément de $$A$$ correspond **au plus** un élément de $$B$$. Voici un exemple graphique:

![](http://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Partial_function.svg/200px-Partial_function.svg.png "Fonction partielle")

Parfois on appelle simplement "fonction" une fonction parielle; lorsque on veut souligner qu'une fonction n'est pas partielle on dit qu'elle est **totale**.

**Nota bene:** Suivant l'usage [Bourbakiste](http://fr.wikipedia.org/wiki/Nicolas_Bourbaki), en français, surtout au lycée, on appelle *fonction* une fonction partielle et *application* une fonction totale. Dans ce cours, cependant, nous préférerons la convention anglophone que nous avons utilisée jusqu'ici. Allez voir [ce bref historique](http://fr.wikipedia.org/wiki/Application_%28math%C3%A9matiques%29#Fonction_et_application) pour en savoir plus sur l'histoire de ces concepts.

### Composition

Si $$f:A\to B$$ et $$g:B\to C$$ sont deux fonctions (totales ou pas), on définit la **composée de $$g$$ avec $$f$$**, notée $$g\circ f$$ comme étant la fonction

$$g\circ f(a) = g(f(a)).$$

Si $$f$$ et $$g$$ sont totales, $$f\circ g$$ l'est aussi.

### Image, Image inverse, Fibre

Soit $$f:A\to B$$ une fonction telle que $$f(a)=b$$ pour un $$a\in A$$ et un $$b\in B$$. L'élément $$b$$ est appelé l'**image** de $$a$$; l'élément $$a$$ est appelé une **préimage** (ou un **antécédent**) de $$b$$. Notez que l'image est nécessairement unique, alors que la préimage ne l'est pas.

L'ensemble des éléments de $$B$$ qui sont image d'un élément quelconque de $$A$$ est appelé l'**image** de $$f$$:

$$\mathrm{Im}\,f = \{b\in B \;\vert\; \exists a\in A.f(a)=b\}.$$

Plus généralement, si $$C$$ est un sous-ensemble de $$A$$, **l'image de $$C$$ par $$f$$**, noté $$f(C)$$, est l'ensemble des éléments de $$B$$ qui sont image d'un élément de $$C$$:

$$f(C) = \{b\in B \;\vert\; \exists c\in C.f(c)=b\}.$$

On a donc $$\mathrm{Im}\,f = f(A)$$.

L'**image inverse** d'un sous-ensemble $$D$$ de $$B$$, noté $$f^{-1}(D)$$ est l'ensemble des éléments de $$A$$ qui sont préimage d'un élément de $$D$$:

$$f^{-1}(D) = \{a\in A \;\vert\; f(a)\in D\}.$$

L'image inverse de $$B$$ tout entier est aussi appelée l'**image inverse de $$f$$**. La **fibre** d'un élément $$b\in B$$ est l'image inverse de l'ensemble $$\{b\}$$; on peut l'écrire $$f^{-1}(\{b\})$$ ou, par abus de notation, $$f^{-1}(b)$$.

## Graphe

Formellement, le **graphe** $$\mathcal{G}_f$$ d'une fonction $$f:A\to B$$ est le sous-ensemble de du [produit cartésien](Ensemble#produit-cartésien) $$A\times B$$ défini comme suit:

$$\mathcal{G}_f = \{(a,b) \;\vert\; f(a) = b\}.$$

Le graphe d'une fonction est une [relation fonctionnelle](Relation).

### Dessiner le graphe d'une fonction dans le plan Cartésien

Le graphe d'une fonction peut être représenté par des diagrammes de Venn tout comme sa fonction. Cependant, tout le monde est familier avec une autre technique de représentation plus adaptée aux fonctions sur des ensembles infinis.

Le graphe d'une fonction $$f:\mathbb{R}\to\mathbb{R}$$ est un sous-ensemble de $$\mathbb{R}^2$$. Le plan Cartésien est une représentation de $$\mathbb{R}^2$$: à chaque couple $$(x_A,y_A)\in\mathbb{R}^2$$ correspond un unique point du plan.

![](http://upload.wikimedia.org/wikipedia/commons/2/28/Rovinna_kartezska_soustava_souradnic.svg)

Le graphe de la fonction $$f$$ est donc constitué de l'ensemble des points $$(x,y)$$ du plan Cartésien tels que $$f(x)=y$$.

![](http://upload.wikimedia.org/wikipedia/commons/d/d1/Cubicpoly.png)

Cette représentation n'est pas limitée aux fonctions de $$\mathbb{R}$$ vers $$\mathbb{R}$$. Elle s'applique de façon naturelle à toute fonction dont le domaine et le codomaine sont [totalement ordonnés](Ordre).

![Graphe de la fonction identité sur les naturels](http://cnx.org/content/m15239/latest/f2.gif)
Cette image a été crée par Singh, S. (2007, October 26). Functions. Téléchargée du site [Connexions](http://cnx.org/content/m15239/1.8/).


## Propriétés

On a déjà parlé de fonctions [totales](#fonctions-partielles) et [partielles](#fonctions-partielles). Il existe d'autres propriétés d'intérêt pour une fonction.

### Injectivité, surjectivité, bijectivité

Une fonction $$f:A\to B$$ est dite:

- **injective** si chaque élément de $$A$$ a une image distincte dans $$B$$. Formellement, pour tout $a_1,a_2\in A$

$$a_1\ne a_2 \Rightarrow f(a_1)\ne f(a_2).$$

- **surjective** si l'image de $$f$$ correspond avec son codomaine. Formellement

$$\forall b\in B. \exists a\in A. f(a)=b.$$

- **bijective** si elle est à la fois injective et bijective.

Voici un exemple graphique:

![](http://upload.wikimedia.org/wikipedia/commons/7/7b/Surjection_Injection_Bijection-fr.svg)


### Inverse

Si $$f:A\to B$$ est une fonction bijective, la [fibre](#image,-image-inverse,-fibre) de chaque élément de $$B$$ est réduite à un seul élément. On définit alors la **fonction inverse** $$f^{-1}:B\to A$$ comme étant la fonction qui associe à chaque élément $$b\in B$$ son unique préimage dans $$A$$.

$$f(a) = b \Leftrightarrow f^{-1}(b) = a.$$

Le graphe de $$f^{-1}$$ est le [réciproque](Relation#réciproque) du graphe de $$f$$.

On a le propriétés suivantes (où $\mathrm{id}$ dénote la fonction identité, c'est à dire la fonction qui à tout $x$ associe lui-même):

- $$(f^{-1})^{-1} = f$$,
- $$f\circ f^{-1} = f^{-1} \circ f = \mathrm{id}$$,
- $$(g\circ f)^{-1} = f^{-1}\circ g^{-1}$$.

**Excercice:** Démontrer ces propriétés.

Plus généralement, si on s'intéresse aux fonctions partielles, il suffit de supposer que $$f$$ est **injective** pour pouvoir définir son inverse. La définition est identique:

$$f(a) = b \Leftrightarrow f^{-1}(b) = a.$$

Dans ce sens, l'inverse d'une fonction totale n'est pas nécessairement totale.

**Exercice:** Dire lesquelles des propriétés précédentes sont encore vérifiées par l'inverse d'une fonction partielle.

#### Exemples

- La fonction $$e^x$$ est l'inverse de $$\ln x$$. Observez que $$e^x$$ est totale, mais $$\ln x$$ ne l'est pas.
- Ne vous faites pas avoir par les utilisations multiples du mot *inverse*. L'inverse de la fonction $$\frac{1}{x}$$ est la fonction $$\frac{1}{x}$$ elle même.

**Excercice:** Dessiner le graphe de ces fonctions et de leurs inverses. Que constatez-vous? Expliquez.
