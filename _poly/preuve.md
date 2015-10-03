---
layout: post
title: Théorie de la preuve
---

La **théorie de la preuve** est la branche de la logique mathématique qui s'intéresse à la modélisation du raisonnement mathématique. Développée au début du siècle par Hilbert, Gödel, et les autres pionniers de la logique formelle, elle revenue à la mode à partir des années '50 grâce au développement de l'informatique et de l'intelligence artificielle ; elle est en effet à la base des preuves assistées par ordinateur et de la certification de code.

Normalement on présente la théorie de la preuve du [Calcul des prédicats](../calcul-pred), car c'est de cette théorie qui découlent les résultats les plus intéressants. Néanmoins dans ce cours nous mettons l'accent sur la théorie de la preuve du [Calcul des propositions](../calcul-prop), qui constitue un sous-ensemble de la précédente.

## Calcul des propositions

En [Calcul des propositions](../calcul-prop), les notions de [modèle](../calcul-prop#théorie-des-modeles) et de [vérité](../calcul-prop#théorie-des-modeles) permettent de vérifier aisément
(et en temps fini) si une formule donnée est valide ou pas. Néanmoins,
quand un mathématicien veut montrer un théorème il ne commence pas par
énumérer toutes les possibilités et vérifier que son énoncé reste vrai
pour n’importe quel choix. C’est pour modéliser la façon de raisonner du
mathématicien qu’on a développé le concept de **preuve formelle**.

La méthode de démonstration universellement acceptée en mathématiques
est la **méthode axiomatique**. Un ensemble de *vérités élémentaires*,
appelées **axiomes**, est initialement établi et accepté comme *vrai*
sans aucune preuve. En général sont choisis comme axiomes des énoncés
qui paraissent évidents et consensuels, comme par exemple *“deux droites
parallèles ne se rencontrent en aucun point”*.

À partir des axiomes, le mathématicien s’autorise à déduire des
**théorèmes** en appliquant un nombre restreint et universellement
accepté de *formes de raisonnement* appelées **règles d’inférence** ou
**de déduction**. La **preuve** est donc une opération purement
**syntaxique** qui transforme des formules vraies en d’autres formules
vraies indépendamment de la notion sémantique de **vérité**.

On appelle **système de déduction** (ou **de preuve**) le choix d’un
ensemble d’axiomes et de règles d’inférence. Pour tout système formel ce
choix n’est pas unique, et plusieurs systèmes de preuve différents vont
aboutir aux mêmes théorèmes.

### Définitions et notations

Un **système de preuve** pour le calcul propositionnel est la donne
d’un ensemble (éventuellement infini ou même vide) de formules
appelées **axiomes**, et d’un nombre fini de **règles
d’inférence**. Une règle d'inférence est constitué d'une ou plusieurs
**prémisses** et d'une **conséquence**.

On dit qu'une formule est un **théorème**

-   si elle est un *axiome*, ou
-   si elle est la *conséquence* d’une *règle d’inférence* dont les
    *prémisses* sont elles mêmes des théorèmes.

La suite des applications des *règles d’inférence* qui permettent de
dériver un *théorème* $$\phi$$ est appelée une **preuve** de $$\phi$$. Si on
a une preuve de $$\phi$$, on dit aussi qu’on a **démontré** $$\phi$$.

Si une formule $$\phi$$ est un théorème on écrit

$$\vdash\phi.$$

Si $$\Gamma$$ est un ensemble de formules, et si en ajoutant $$\Gamma$$ aux
axiomes on peut démontrer une formule $$\phi$$, on dit que $$\phi$$ est
**dérivable** de $$\Gamma$$ (ou que $$\phi$$ est une **conséquence
syntaxique** de $$\Gamma$$) et on écrit

$$\Gamma\vdash\psi.$$

On dit qu’un système de preuve est

-   **correct** si tout théorème est une tautologie,
-   **complet** si toute tautologie est un théorème,
-   **syntactiquement complet** si pour toute formule $$\phi$$, au moins
    une formule parmi $$\phi$$ et $$\neg\phi$$ est démontrable.


### Déduction naturelle

Il y a plusieurs systèmes de preuve *corrects* et *complets* pour le
calcul des propositions. Parmi eux, nous nous intéressons
principalement à la **déduction naturelle**, car plus proche de la
façon naturelle de penser.

La **déduction naturelle** se caractérise par un ensemble d’axiomes
**vide** et par des **règles d'inférence** qui sont généralement
notées à l'aide de **séquents**, c'est à dire des expressions de la
forme

$$\dfrac{\text{premisse1}\quad \text{premisse2}\quad \cdots}{\text{conclusion}}\text{(nom de la règle)}$$

Par exemple, la règle d'**introduction de la conjonction**

$$\dfrac{\Gamma\vdash\phi \qquad \Gamma\vdash\psi}{\Gamma\vdash\phi\wedge\psi} I_\wedge$$

est à interpréter comme

> « si on peut démontrer $$\phi$$ à partir de $$\Gamma$$ et si on peut
> démontrer $$\psi$$ à partir de $$\Gamma$$, alors on peut démontrer
> $$\phi\wedge\psi$$ à partir de $$\Gamma$$. »


Voici la liste complète des règles de la déduction naturelle

|Hypothèse                 |$$\dfrac{}{\Gamma,\phi\vdash\phi}H$$
|Tiers exclus              |$$\dfrac{}{\Gamma\vdash\phi\vee\neg\phi}T$$
|Affaiblissement           |$$\dfrac{\Gamma\vdash\phi}{\Gamma,\psi\vdash\phi}W$$
|Élimination du faux       |$$\dfrac{\Gamma\vdash\psi\wedge\neg\psi}{\Gamma\vdash\phi}F$$
|Introduction du *et*      |$$\dfrac{\Gamma\vdash\phi \qquad\Gamma\vdash\psi}{\Gamma\vdash\phi\wedge\psi}I_\wedge$$
|Élimination du *et*       |$$\dfrac{\Gamma\vdash\phi\wedge\psi}{\Gamma\vdash\phi}L_\wedge$$
|                          |$$\dfrac{\Gamma\vdash\phi\wedge\psi}{\Gamma\vdash\psi}R_\wedge$$
|Introduction du *ou*      |$$\dfrac{\Gamma\vdash\phi}{\Gamma\vdash\phi\vee\psi}L_\vee$$
|                          |$$\dfrac{\Gamma\vdash\psi}{\Gamma\vdash\phi\vee\psi}R_\vee$$
|Élimination du *ou*       |$$\dfrac{\Gamma\vdash\phi\vee\psi \qquad \Gamma\vdash\phi\to\chi\quad \Gamma\vdash\psi\to\chi}{\Gamma\vdash\chi}E_\vee$$
|Modus ponens              |$$\dfrac{\Gamma\vdash\phi \qquad\Gamma\vdash\phi\to\psi}{\Gamma\vdash\psi}M$$
|Déduction                 |$$\dfrac{\Gamma,\phi\vdash\psi}{\Gamma\vdash\phi\to\psi}D$$


#### Exemple de preuve

Une preuve en déduction naturelle est une suite d'applications des
règles d'inférence. L'écriture sous forme de séquents permet de
représenter une preuve par un *arbre de preuve*. Par exemple, la
preuve de $$A,B,C\vdash (A\wedge B)\wedge C$$ (sous les hypothèses $$A$$,
$$B$$ et $$C$$ on peut prouver $$A\wedge B\wedge C$$) a la forme suivante :

$$
\dfrac{
  \dfrac{
    \dfrac{}{A,B,C\vdash A}H
    \quad
    \dfrac{}{A,B,C\vdash B}H
  }{
    A,B,C\vdash A\wedge B
  }I_\wedge\quad
  \dfrac{}{A,B,C\vdash C}H
}{
  A,B,C \vdash (A\wedge B) \wedge C
}I_\wedge
$$

**Exercice :** Prouver le théorème $$\vdash A\to A$$.

**Exercice :** Prouver $$\vdash A \to (B\to A)$$.


#### Règles dérivées

La liste des règles d'inférence de la déduction naturelle est assez
restrictive, et elle ne contient pas certaines formes de raisonnement
très courantes comme par exemple

$$\dfrac{\Gamma\vdash \neg\neg\phi}{\Gamma\vdash\phi}$$

Cependant, il est pratique d'isoler certains enchaînements courants de
règles pour en faire des **règles dérivées**. On peut ainsi réutiliser
ces nouvelles règles dans des preuves complexes sans avoir à réécrire
toute la preuve.

Par exemple, de l'extrait de preuve suivante

$$
\dfrac{
  \dfrac{}{\Gamma \vdash \phi\vee\neg \phi}\quad
  \dfrac{
    \dfrac{}{\Gamma,\phi\vdash\phi}
  }{
    \Gamma \vdash \phi\to\phi
  }\quad
  \dfrac{
    \dfrac{
	  \dfrac{\vdots}{\Gamma,\neg\phi \vdash \psi\wedge\neg\psi}
	}{
      \Gamma,\neg\phi \vdash \phi
	}
  }{
    \Gamma \vdash \neg\phi\to\phi
  }
}{
  \Gamma \vdash \phi
}
$$

on déduit la règle de **réduction à l'absurde**

$$\dfrac{\Gamma,\neg\phi \vdash \psi\wedge\neg\psi}{\Gamma \vdash \phi}$$

**Exercice :** Indiquer quelles règles ont été utilisées dans la preuve ci-dessus.

**Exercice :** Donner des preuves pour les deux règles dérivées

$$\dfrac{\Gamma\vdash \neg\neg\phi}{\Gamma\vdash\phi}
\quad\text{et}\quad
\dfrac{\Gamma\vdash \phi}{\Gamma\vdash\neg\neg\phi}.$$

**Exercice :** La liste de règles non dérivées donnée dans la section
précédente n'est pas la seule possible. Montrer que la règle du *tiers
exclus* est dérivable de la *réduction à l'absurde* et des autres
règles.


### Autres systèmes de preuve

La déduction naturelle n'est pas le seul système de preuve correct et
complet, ni historiquement premier.

#### Systèmes à la Hilbert

Les systèmes à la Hilbert se caractérisent par l’emploi de la
seule règle du *modus ponens*, exprimée par le séquent

$$\dfrac{\phi\to\psi\qquad\phi}{\psi}$$

On remarquera que la notation est simplifiée par rapport à la
déduction naturelle à cause de la disparition du symbole $$\vdash$$,
inutile dans ce contexte.

D'un autre côté, les systèmes à la Hilbert possèdent un nombre
relativement grand d’axiomes (de trois jusqu’à la dizaine). Voici un
exemple de système d'axiomes à la Hilbert dû à Frege:

1.  $$\phi \to (\psi \to \phi)$$,
2.  $$(\phi \to (\psi \to \chi)) \to ((\phi\to\psi) \to (\phi\to\chi))$$,
3.  $$(\phi \to (\psi \to \chi)) \to (\psi \to (\phi\to\chi))$$,
4.  $$(\phi\to\psi) \to (\neg\psi\to\neg\phi)$$,
5.  $$\neg\neg\phi \to \phi$$,
6.  $$\phi \to \neg\neg\phi$$.

Un exemple de *preuve* dans le système de Frege est le suivant:

$$
\dfrac{
  (A\to(B\to A)) \to ((A\to B) \to (A\to A))
  \qquad
  A\to(B\to A)
}{(A\to B) \to (A\to A)}
$$

où les deux prémisses du *modus ponens* sont obtenues par instanciation
des axiomes 2 et 1 respectivement. On conclut que

$$\vdash(A\to B) \to (A\to A).$$

Comme dans la déduction naturelle, on peut démontrer dans un système à
la Hilbert des résultats conditionnels où un théorème est *dérivable*
d’une ou plusieurs hypothèses. Par exemple on montre qu’à partir des
hypothèses $$A\to B$$ et $$A$$ on peut prouver $$A$$ (ce qui est un peu
bête, admettons); en symboles:

$$(A\to B),A \vdash A.$$

La preuve procède ainsi (par convention, on met une barre au dessus
des prémisses qui ne sont pas des axiomes, comme si on avait utilisé
la règle $$H$$ en déduction naturelle):

$$
\dfrac{
  \dfrac{
    \dfrac{
      (A\to(B\to A)) \to ((A\to B) \to (A\to A))
      \qquad
      A\to(B\to A)
    }{(A\to B) \to (A\to A)}
    \qquad
    \dfrac{}{A\to B}
  }{A\to A}
  \qquad
  \dfrac{}{A}
}{A}
$$

##### Théorème de déduction

La principale différence entre les systèmes à la Hilbert et la
déduction naturelle est le manque de la *règle de déduction*

$$\dfrac{\Gamma,\phi\vdash\psi} {\Gamma\vdash\phi\to\psi}D$$

On peut cependant prouver un *méta-théorème*, dit **théorème de
déduction** qui permet de simplifier grandement les preuves. Ce
théorème affirme que si $$\phi$$ et $$\psi$$ sont deux formules on peut
prouver

$$\phi\vdash\psi$$

dans un système à la Hilbert si et seulement si on peut prouver

$$\vdash\phi\to\psi.$$

Si passer de la deuxième preuve à la première revient juste à
appliquer une fois le *modus ponens*, la construction explicite qui
permet de passer de la première preuve à la deuxième est assez longue
et compliquée, mais il est important (et confortant) de savoir qu’elle
existe et est automatique.  Ceci est à comparer avec la déduction
naturelle, où les deux passages sont immédiats.

On remarque que la règle et le théorème de déduction donnent un
fondement formel à une technique de preuve utilisée largement en
mathématiques: pour prouver un énoncé de la forme $$A\to B$$, on
commence par supposer $$A$$ et on démontre $$B$$.


##### Système de Łukasiewicz

Łukasiewicz démontre que les trois schémas d’axiomes suivants

1.  $$\phi \to (\psi \to \phi)$$,
2.  $$(\phi \to (\psi \to \chi)) \to ((\phi\to\psi) \to (\phi\to\chi))$$,
3.  $$(\neg\phi\to\neg\psi) \to (\psi\to\phi)$$,

avec le *modus ponens* sont suffisants à définir un système de preuve
complet (et correct). Dans les [Exercices](../exercices) on peut trouver quelques
questions autour de systèmes similaires à celui de Łukasiewicz.

##### Extensions conservatives des systèmes à la Hilbert

Par souci de coincision, il est classique de présenter les systèmes à la
Hilbert en utilisant seulement les symboles $$\to$$ et $$\neg$$. Il est bien
évidemment possible d’étendre ces systèmes en ajoutant les symboles
$$\wedge,\vee,\leftrightarrow$$, etc. Pour cela, il suffit d’ajouter
quelques axiomes de plus; par exemple:

1. $$(\phi\to\psi) \leftrightarrow (\neg\phi\vee\psi)$$,
2. $$(\phi\vee\psi) \leftrightarrow \neg(\neg\phi\wedge\neg\psi)$$,
3. $$(\phi\leftrightarrow\psi) \to (\phi\to\psi)$$,
4. $$(\phi\leftrightarrow\psi) \to (\psi\to\phi)$$.

#### Séquents de Gentzen

Voir <http://fr.wikipedia.org/wiki/Calcul_des_séquents>.


## Calcul des prédicats

La théorie de la preuve du [Calcul des prédicats](../calcul-pred) est à peine plus riche de celle du calcul des propositions. Il s'agit, en effet, d'ajouter simplement les règles d'inférence concernant les *quantificateurs*. Comme pour les autres connecteurs logique, chacun des quantifieurs $$\forall$$ et $$\exists$$ va avoir une *règle d'introduction* et une *règle d'élimination*.

On rappelle qu'une variable $$x$$ dans un prédicat $$\phi$$ est dite **libre** si elle n'est pas quantifiée, et **liée** sinon. Si $$x$$ est libre dans $$\phi$$ et si $$y$$ est une nouvelle variable, on note $$\phi[y/x]$$ le prédicat obtenu en remplaçant toutes les occurrences libres de $$x$$ par $$y$$. De la même façon, si $$t$$ est un [terme](../calcul-pred#syntaxe), on note $$\phi[t/x]$$ le prédicat obtenu en remplaçant toutes les occurrences libres de $$x$$ par $$y$$. Voir aussi la [syntaxe du Calcul des prédicats](../calcul-pred#syntaxe). 

Voici finalement les règles pour $$\forall$$ et $$\exists$$. Dans ces règles $$x$$ et $$y$$ sont des variables, et $$t$$ est un terme quelconque. La variable $$y$$ ne doit pas apparaître libre dans $$\Gamma$$ ou dans $$\psi$$ ; de façon équivalente, les règles $$I_\forall$$ et $$E_\exists$$ ne doivent pas contenir la variable $$y$$ libre dans les conclusions.

|Généralisation      |$$\dfrac{\Gamma\vdash\phi[y/x]}{\Gamma\vdash\forall x.\phi}I_\forall$$
|Spécialisation      |$$\dfrac{\Gamma\vdash\forall x.\phi}{\Gamma\vdash\phi[t/x]}E_\forall$$
|Introduction de l'existentiel |$$\dfrac{\Gamma\vdash\phi[t/x]}{\Gamma\vdash\exists x.\phi}I_\exists$$
|Élimination de l'existentiel  |$$\dfrac{\Gamma\vdash\exists x.\phi\qquad  \Gamma,\phi[y/x]\vdash\psi}{\Gamma\vdash\psi}E_\exists$$

Intuitivement, la règle de généralisation dit que si on peut prouver $$\phi$$ sans faire d'hypothèses sur $$x$$, alors $$\phi(x)$$ est vrai pour tout $$x$$. Par exemple, si on peut prouver $$(x \ge 0) \to (x > 0)$$ sans faire d'hypothèse sur $$x$$, alors on peut conclure $$\forall x. (x \ge 0) \to (x > 0)$$. L'élimination de l'existentiel a une interprétation similaire.

L'introduction de l'existentiel dit que si on peut prouver $$\phi(t)$$ pour un terme spécifique $$t$$, alors on peut conclure qu'il existe un terme $$x$$ qui rend vrai $$\phi(x)$$. Par exemple, si on peut démontrer que $$3 > 2$$, alors on peut conclure que $$\exists x.x>2$$. La règle de spécialisation a une interprétation similaire.

**Excercice :** donner des exemples concrets de dérivations utilisant la règle de spécialisation ou la règle d'élimination de l'existentiel.


## Bibliographie

- A. Arnold, I. Guessarian. *Mathématiques pour l’Informatique*. Chapitres 4 et 5.
- R. David, K. Nour, Karim, C. Raffalli. *Introduction à la logique: théorie de la démonstration cours et exercices corrigés*. Chapitre 1. Chapitre 2 pour approfondissement.
