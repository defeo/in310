---
layout: post
title: Calcul des propositions
---

Le **calcul propositionnel** (sporadiquement appelé **logique d’ordre
zéro**) est une [théorie *formelle*](Logique%20mathématique) (au sens où
il s’agit de manipuler des *formules*) qui modélise des raisonnements
mathématiques simples du type *“si A alors B”*.

Le [Calcul des prédicats](Calcul des prédicats) constitue une généralisation du calcul des
propositions à des formules plus complexes du type *“pour tout n, si n a
la propriété X alors n a la propriété Y”*.

## Concepts de base

Une **proposition** est une phrase dont on peut affirmer qu’elle est
vraie ou fausse. Ainsi “il pleut”, “$$n$$ est pair”, “$$n>0$$” sont des
propositions, mais “le nombre de doigts de la main”, “4”, “$$f(n)$$” ne le
sont pas.

Le calcul des propositions modélise la façon dont le mathématicien
raisonne sur la vérité et la fausseté en faisant abstraction des
propositions spécifiques qui forment le raisonnement concret. Ce qui
compte est exclusivement la forme du raisonnement, ainsi l’affirmation

> **S’il** pleut **ou** il neige, **alors** il y a des nuages

et l’affirmation

> **Si** $$n > 0$$ **ou** $$n < 0$$, **alors** $$n\ne0$$

sont représentées par la même **formule**

> **Si** A **ou** B, **alors** C

où les *variables* A, B, C représentent à la fois les *propositions*
"il pleut", "il neige", "$$n > 0$$", etc.

De plus, les **connecteurs** logiques *si*, *alors*, *ou*, etc. sont
exprimés par des symboles plutôt que par des mots. Par convention, on
utilise les symboles suivants:

|--------------------   |------------------------------------------------------------
|Formule                |Interprétation
|:--------------------: |------------------------------------------------------------
|$$A\to B$$             |  **si** $$A$$ **alors** $$B$$,
|$$A\leftrightarrow B$$ |  $$A$$ **si et seulement si** $$B$$, 
|$$A\wedge B$$          |  $$A$$ **et** $$B$$,
|$$A\vee B$$            |  $$A$$ **ou** $$B$$,
|$$\neg A$$             |  **il n'est pas vrai que** $$A$$. 
|--------------------   |-------------------------------------------------------------

De tous les opérateurs, seul le "ou" mérite quelques mots
d'explication en plus. Par $$A$$ **ou** B l'on entend le *ou inclusif*
du français c'est à dire qu'au moins l'une des propositions $$A$$ ou
$$B$$ doit être vraie, mais possiblement les deux sont vraies. On
appelle *ou exclusif* ce qui est souvent exprimé en français par
"soit... soit...", ce type d'opérateur est parfois ajouté à la logique
propositionnelle avec la notation $$A\oplus B$$. Voici des exemples

|Type de ou  |Notation      |Exemple
|----------- |-----------   |-------------------------------------------------------
|ou inclusif |$$A\vee B$$   |j'y vais, ou bien on y va ensemble
|ou exclusif |$$A\oplus B$$ |tu manges le potage ou tu vas te coucher immédiatement!
|----------- |-----------   |-------------------------------------------------------


## Définitions

En calcul des propositions, comme dans tout autre
[système formel](Logique%20mathématique), on fait une distinction
minutieuse entre
[*syntaxe*, *sémantique* et *métalogique*](Logique%20mathématique). Ainsi,
la **syntaxe** décrit la façon correcte de former les formules, la
**sémantique** donne l’interprétation des formules, et la
**métalogique** est le processus de raisonner sur le système formel
avec des outils externes (la pensée mathématique, en général, ou plus
formellement une autre logique formelle plus puissante que le calcul
des propositions).

### Syntaxe

La syntaxe du calcul propositionnel est composée des éléments suivants:

- Une liste infinie (mais [dénombrable](Cardinalité)) de
  **propositions atomiques** (ou **formules atomiques**), en général
  représentées par les lettres de l'alphabet $$A, B, \ldots$$,
- Des **opérateurs logiques**, en général $$\wedge, \vee, \to, \neg$$.

Une **proposition** (ou **formule**, ou **formule bien formée**) est

- soit une proposition atomique,
- soit le résultat de la combinaison d'un opérateur logique avec deux
  (ou une dans le cas de $$\neg$$) propositions (non nécessairement
  atomiques).

Ainsi $$A$$, $$A\wedge B$$, $$(A\wedge B)\vee (\neg C)$$ sont des
propositions, mais $$A B$$, $$\wedge\wedge A$$ ne le sont pas.

**Remarque:** les parenthèses ne font pas partie du calcul des
propositions, elles sont simplement là pour décrire la structure
syntaxique des formules, i.e. pour indiquer dans quel ordre les
opérateurs ont été appliqués pour obtenir la formule. Voir
[du bon usage des parenthèses](Logique mathématique#du-bon-usage-des-parenthèses).

Pour réduire le nombre de parenthèses, on assigne une précédence par
défaut aux opérateurs. Ainsi $$\neg$$ a la précédence la plus haute,
ensuite viennent $$\wedge$$ et $$\vee$$ avec la même précédence, et
enfin $$\to$$. Par conséquent la formule

$$\neg A \wedge B \to C$$

doit être lue comme

$$((\neg A) \wedge B) \to C.$$

Puisque on peut démontrer que $$\wedge$$ et $$\vee$$ sont associatifs, un
autre usage courant consiste à ne pas écrire les parenthèses d’une
chaîne de ces opérateurs, à moins que l’on ne s’intéresse à l’arbre de
formation d’une formule. Ainsi

$$A \wedge B \wedge C$$

peut être aussi bien interprété comme

$$(A \wedge B) \wedge C,$$

que comme

$$A \wedge (B \wedge C),$$

ce qui ne change rien dans un contexte où l’on s’intéresse à la vérité
de la formule puisque ces deux formules sont *sémantiquement
équivalentes*. Cependant, nous allons essayer d’utiliser cette
convention le moins possible.

**Attention:** Par contre, il est toujours incorrect d’écrire

$$A \vee B \wedge C,$$

puisque les deux parenthésages possibles de la formule n’ont pas la même
sémantique (remarquez que certains auteurs préfèrent assigner une priorité plus haute à $\wedge$, en levant donc cette ambiguïté). De façon similaire, la formule

$$A \to B \to C$$

est ambiguë puisque les deux parenthésages ne sont pas équivalents.
Beaucoup de textes adoptent la convention de l’*associativité à droite*,
ainsi la seule lecture possible de la formule ci-dessus serait

$$A \to (B \to C)$$

mais remarquez que ceci est purement une convention, que nous allons
éviter d’utiliser dans ce texte.


### Sémantique

La sémantique consiste à attacher des *interprétations* aux formules du
calcul propositionnel. Le système qui est obtenu en considérant toutes
les interprétations possibles est aussi appelée *logique Boléenne* ou
*algèbre de Boole*.

Formellement, un **modèle** (parfois on dit une **interprétation**)
d’une proposition est l’affectation d’une valeur $$0$$ ou $$1$$ (appelée
**valeur de vérité**) à chacune de ses propositions atomiques. En
général, affecter $$A$$ à $$1$$ est interprété comme l’affirmation “il est
vrai que $$A$$”, affecter $$A$$ à $$0$$ comme “il n’est pas vrai que $$A$$”.

On parle aussi de **modèle du calcul propositionnel** lorsque on assigne
une valeur de vérité à chacune de ses propositions atomiques
(souvenez-vous qu’il y en a une infinité).

Un modèle d’une formule $$\phi$$ lui associe une valeur de vérité définie
[inductivement](Récursivité) de la façon suivante:

-   Si $$\phi = A$$ pour une formule atomique $$A$$, alors la valeur de
    vérité de $$\phi$$ est la valeur de vérité de $$A$$;
-   Si $$\phi = \neg\psi$$ pour une formule $$\psi$$, alors $$\phi$$ vaut $$1$$
    si et seulement si $$\psi$$ vaut $$0$$;
-   Si $$\phi = \psi \wedge \chi$$ pour deux formules $$\psi$$ et $$\chi$$,
    alors $$\phi$$ vaut $$1$$ si et seulement si $$\psi$$ et $$\chi$$ valent
    $$1$$;
-   Si $$\phi = \psi \vee \chi$$ pour deux formules $$\psi$$ et $$\chi$$,
    alors $$\phi$$ vaut $$0$$ si et seulement si $$\psi$$ et $$\chi$$ valent
    $$0$$;
-   Si $$\phi = \psi \to \chi$$ pour deux formules $$\psi$$ et $$\chi$$, alors
    $$\phi$$ vaut $$0$$ si et seulement si $$\psi$$ vaut $$1$$ et $$\chi$$ vaut
    $$0$$.

Les quatre dernières règles peuvent être résumées de façon très simple
par la méthode familière des **tableaux de vérité**:

| $$\psi$$ | $$\neg\psi$$ 
|:--------:|:------------:
|   0      |   1
|   1      |   0

| $$\psi$$ | $$\chi$$ | $$\psi\wedge\chi$$
|:--------:|:--------:|:------------------:
|   0      |   0      |      0
|   0      |   1      |      0
|   1      |   0      |      0
|   1      |   1      |      1

| $$\psi$$ | $$\chi$$ | $$\psi\vee\chi$$
|:--------:|:--------:|:------------------:
|   0      |   0      |      0
|   0      |   1      |      1
|   1      |   0      |      1
|   1      |   1      |      1

| $$\psi$$ | $$\chi$$ | $$\psi\to\chi$$
|:--------:|:--------:|:------------------:
|   0      |   0      |      1
|   0      |   1      |      1
|   1      |   0      |      0
|   1      |   1      |      1

**Remarque:** Dans ce qui précède nous avons utilisé des lettres
grecques $$\phi,\psi,\chi$$ pour indiquer des formules quelconques. Ces
lettres *ne font pas partie de la syntaxe* du calcul propositionnel:
elles sont plutôt une notation que nous nous donnons en dehors du calcul
(i.e., à un niveau méta) pour parler du calcul.

Si un modèle $$\mathcal{M}$$ associe la valeur $$1$$ à une formule donnée,
on dit que la formule est *vraie dans le modèle $$\mathcal{M}$$*. On dit
qu’une formule est

-   **satisfaisable** s’il existe un modèle qui la rend vraie;
-   une **tautologie** si elle est vraie dans tout modèle (on dit aussi
    que la formule est **valide**);
-   **falsifiable** s’il existe un modèle qui la rend fausse;
-   une **antilogie** s’il n’existe aucun modèle qui la rend vraie.

Par example $$A\wedge B$$ est *satisfaisable* et *falsifiable* car $$A=1$$
et $$B=1$$ la rendent vraie, mais $$A=0$$ et $$B=1$$ la rendent fausse.
$$A \vee \neg A$$ est non seulement *satisfaisable*, mais aussi une
tautologie. $$A\wedge\neg A$$ est une *antilogie*.

## Théorie des modèles

La notion de **vérité** est une notion purement sémantique. On a déjà
discuté de la notion de *tautologie*, introduisons maintenant un peu de
notation. Soit $$\phi$$ une formule, l’écriture

$$\models\phi$$

signifie que $$\phi$$ est une tautologie. Si $$\phi$$ et $$\psi$$ sont deux
formules, on dit que $$\phi$$ est une **conséquence logique** de $$\psi$$
(ou **conséquence sémantique** ou, plus informellement, que $$\psi$$
**implique** $$\phi$$) si tout modèle qui satisfait $$\psi$$ satisfait aussi
$$\phi$$. Si $$\phi$$ est une conséquence logique de $$\psi$$ on écrit

$$\psi\models\phi;$$

intuitivement, ceci signifie que $$\phi$$ est vraie *sous l’hypothèse*
$$\psi$$. Plus généralement, si $$\Gamma$$ est un ensemble de formules on
dit que $$\phi$$ est une conséquence logique de $$\Gamma$$, et on note
$$\Gamma\models\phi$$, si tout modèle qui satisfait *toutes* les formules
de $$\Gamma$$ satisfait aussi $$\phi$$.

Lorsque on a $$\phi\models\psi$$ et $$\psi\models\phi$$, on dit que $$\phi$$
et $$\psi$$ sont **(sémantiquement) équivalentes**, ce qui, selon les
textes, est noté

$$\phi\equiv\psi \quad\text{ou}\quad \phi\Leftrightarrow\psi \quad\text{ou}\quad \phi=\psi$$

Pour donner un exemple, il suffit de regarder les tables de vérité pour
se rendre compte que $$A\wedge B\models A\vee B$$, mais que la réciproque
n’est pas vraie ($$A\wedge B$$ n’est pas une conséquence logique de
$$A\vee B$$).

**Attention:** aucun des symboles $$\models,\equiv,\Leftrightarrow,=$$ ne
fait partie de la logique. Ce sont tous des symboles *métalogiques* qui
permettent d’exprimer des propriétés qu’on a démontrées *en dehors* de
la syntaxe du calcul des propositions (par exemple en lisant les tables
de vérité). On fera surtout attention à ne pas confondre $$A\to B$$ et
$$A\leftrightarrow B$$, qui sont des propositions du calcul des
propositions, avec $$A\models B$$ et $$A\Leftrightarrow B$$.


### Équivalences remarquables

Voici une liste de formules qui peuvent être prouvées *sémantiquement
équivalentes* en comparant leur tables de vérité (remarquez qu’à la
place de $$A$$ et $$B$$ on peut substituer n’importe quelles formules $$\phi$$
et $$\psi$$ non nécessairement atomiques).

|Propriété | Formules équivalentes
|-|:-:|:-:
|Double négation    |$$A$$                    |$$\neg\neg A$$
|Commutativité      |$$A\wedge B$$            |$$B\wedge A$$
|                   |$$A\vee B$$              |$$B\vee A$$
|Associativité      |$$(A\wedge B)\wedge C$$  |$$A\wedge(B\wedge C)$$
|                   |$$(A\vee B)\vee C$$      |$$A\vee(B\vee C)$$
|Distributivité     |$$A\wedge(B\vee C)$$     |$$(A\wedge B)\vee(B\wedge C)$$
|                   |$$A\vee(B\wedge C)$$     |$$(A\vee B)\wedge(B\vee C)$$
|Lois de de Morgan  |$$\neg(A\wedge B)$$      |$$\neg A\vee\neg B$$
|                   |$$\neg(A\vee B)$$        |$$\neg A\wedge\neg B$$
|Implication        |$$A\to B$$               |$$\neg A \vee B$$
|Transposition      |$$A\to B$$               |$$\neg B \to \neg A$$
|Exportation        |$$(A \wedge B) \to C$$   |$$A \to (B \to C)$$

**Exercice:** écrivez les tables de vérité des formules ci-dessus et
vérifiez qu’elles sont effectivement équivalentes.

#### Implication sémantique et implication matérielle

On appelle **implication matérielle** le connecteur logique $$\to$$, pour
le distinguer du concept de **conséquence logique** (aussi dite
**implication sémantique** ou **logique**) défini plus haut. De la table
de vérité de l’implication matérielle, et de la définition même de
conséquence logique, on déduit immédiatement que

$$\psi\models\phi \quad\text{si et seulement si} \models\psi\to\phi.$$

Ce métathéorème, appelé *théorème de déduction*, constitue la
justification sémantique du
[raisonnement hypothétique](#déduction-naturelle) qu’on va définir
plus tard.


## Théorie de la preuve

La [Théorie de la preuve](Théorie de la preuve#calcul-des-propositions) est une approche complémentaire à la théorie des modèles. Si les notions de *modèle* et de *vérité* permettent de vérifier aisément (et en temps fini) si une formule donnée est valide ou pas, la théorie de la preuve essaye de modéliser de plus près la façon dont le mathématicien pense et démontre des théorèmes.

Le vrai intérêt de la théorie de la preuve réside, cependant dans son application à la [logique du premier ordre](Calcul des prédicats). Voir [Théorie de la preuve](Théorie de la preuve).



## Bibliographie

Pour les définitions de base et les algèbres de Boole, on pourra
consulter un quelconque des ouvrages conseillés dans la
[Bibliographie](./#bibliographie).

Pour une exposition claire et complète sur la distinction entre syntaxe
et sémantique et sur la théorie de la preuve, je conseille les chapitres
4 et 5 du livre *Mathématiques pour l’Informatique* de *Arnold* et
*Guessarian*, en particulier la section 5.2: à quelques choix de
nomenclature et de notation près (par exemple le symbole $$\to$$ est
remplacé par $$\supset$$), les arguments y sont traités de la même façon
que dans cette page. Malheureusement ce livre contient assez peu
d’exercices sur cette partie.

*Introduction à la logique* de *David*, *Nour* et *Raffali* est un
autre très bon texte. Le chapitre 1 couvre toute la théorie de la
preuve faite dans ce cours, plus la théorie de la preuve du
[Calcul des Prédicats](Calcul des prédicats).  Il propose aussi
beaucoup d’exercices pour vous entraîner avec les séquents. Le
chapitre 2 couvre la sémantique et les théorèmes de
complétude. L’étudiant intéressé pourra les lire rapidement.

Allez voir aussi les pages des [Exercices](Exercices) et des
[Exercices Corrigés](Exercices Corrigés).
