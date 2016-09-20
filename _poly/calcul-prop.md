---
title: Calcul des propositions
---

Le **calcul propositionnel** (sporadiquement appelé **logique d’ordre
zéro**) est une [théorie *formelle*](../logique) (au sens où
il s’agit de manipuler des *formules*) qui modélise des raisonnements
mathématiques simples du type *“si $$p$$ alors $$q$$”*. On s'intéresse notamment à la façon de créer de nouvelles propositions à partir des propositions élémentaires, dits *atomiques*, et à la manière de déduire si la proposition construite est vraie ou fausse à partir de la vérité ou la fausseté des propositions élémentaires.

Le [Calcul des prédicats](../calcul-pred) constitue une généralisation du calcul des
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

> **Si** $$p$$ **ou** $$q$$, **alors** $$r$$

où les *variables* $$p, q, r$$ représentent à la fois les *propositions*
"il pleut", "il neige", "$$n > 0$$", etc.

De plus, les **connecteurs** logiques *si*, *alors*, *ou*, etc. sont
exprimés par des symboles plutôt que par des mots. Par convention, on
utilise les symboles suivants:

|---------------------  |--------------------   |------------------------------------------------------------
|**Appellation**        |**Formule**            |**Interprétation**
|---------------------  |:--------------------: |------------------------------------------------------------
|implication            |$$p\to q$$             |  **si** $$p$$ **alors** $$q$$,
|équivalence            |$$p\leftrightarrow q$$ |  $$p$$ **si et seulement si** $$q$$, 
|conjonction            |$$p\wedge q$$          |  $$p$$ **et** $$q$$,
|disjonction            |$$p\vee q$$            |  $$p$$ **ou** $$q$$,
|négation               |$$\neg p$$             |  **il n'est pas vrai que** $$p$$. 
|---------------------  |--------------------   |-------------------------------------------------------------

De tous les opérateurs, seul le "ou" mérite quelques mots
d'explication en plus. Par $$p$$ **ou** $$q$$ l'on entend le *ou inclusif*
du français c'est à dire qu'au moins l'une des propositions $$p$$ ou
$$q$$ doit être vraie, mais possiblement les deux sont vraies. On
appelle *ou exclusif* ce qui est souvent exprimé en français par
"soit... soit..." et qui signifie $$p$$ ou $$q$$, mais pas les deux en même temps. Ce type d'opérateur est parfois ajouté à la logique
propositionnelle avec la notation $$p\oplus q$$. Voici des exemples

|Type de ou  |Notation      |Exemple
|----------- |-----------   |-------------------------------------------------------
|ou inclusif |$$p\vee q$$   |une résidence accueille des personnes malades ou agées
|ou exclusif |$$p\oplus q$$ |demain j'irai travailler en train ou en voiture
|----------- |-----------   |-------------------------------------------------------


## Définitions

En calcul des propositions, comme dans tout autre
[système formel](../logique), on fait une distinction
minutieuse entre
[*syntaxe*, *sémantique* et *métalogique*](../logique). Ainsi,
la **syntaxe** décrit la façon correcte de former les formules, la
**sémantique** donne l’interprétation des formules, et la
**métalogique** est le processus de raisonner sur le système formel
avec des outils externes (la pensée mathématique, en général, ou plus
formellement une autre logique formelle plus puissante que le calcul
des propositions).

### Syntaxe

La syntaxe du calcul propositionnel est composée des éléments suivants:

- Une liste infinie (mais [dénombrable](../cardinalite)) de
  **propositions atomiques** (ou **formules atomiques**), en général
  représentées par les lettres de l'alphabet $$p, q, \ldots$$,
- Des **opérateurs logiques**, en général $$\wedge, \vee, \to, \neg$$.

Une **proposition** (ou **formule**, ou **formule bien formée**) est

- soit une proposition atomique,
- soit le résultat de la combinaison d'un opérateur logique avec deux
  (ou une dans le cas de $$\neg$$) propositions (non nécessairement
  atomiques).

Ainsi $$p$$, $$p\wedge q$$, $$(p\wedge q)\vee (\neg r)$$ sont des
propositions, mais $$p q$$, $$\wedge\wedge p$$ ne le sont pas.

**Remarque:** les parenthèses ne font pas partie du calcul des
propositions, elles sont simplement là pour décrire la structure
syntaxique des formules, i.e. pour indiquer dans quel ordre les
opérateurs ont été appliqués pour obtenir la formule. Voir
[du bon usage des parenthèses](../logique#du-bon-usage-des-parenthèses).

Pour réduire le nombre de parenthèses, on assigne une précédence par
défaut aux opérateurs. Ainsi $$\neg$$ a la précédence la plus haute,
ensuite viennent $$\wedge$$ et $$\vee$$ avec la même précédence, et
enfin $$\to$$. Par conséquent la formule

$$\neg p \wedge q \to r$$

doit être lue comme

$$((\neg p) \wedge q) \to r.$$

Puisque on peut démontrer que $$\wedge$$ et $$\vee$$ sont associatifs, un
autre usage courant consiste à ne pas écrire les parenthèses d’une
chaîne de ces opérateurs, à moins que l’on ne s’intéresse à l’arbre de
formation d’une formule. Ainsi

$$p \wedge q \wedge r$$

peut être aussi bien interprété comme

$$(p \wedge q) \wedge r,$$

que comme

$$p \wedge (q \wedge r),$$

ce qui ne change rien dans un contexte où l’on s’intéresse à la vérité
de la formule puisque ces deux formules sont *sémantiquement
équivalentes*. Cependant, nous allons essayer d’utiliser cette
convention le moins possible.

**Attention:** Par contre, il est toujours incorrect d’écrire

$$p \vee q \wedge r,$$

puisque les deux parenthésages possibles de la formule n’ont pas la même
sémantique (remarquez que certains auteurs préfèrent assigner une priorité plus haute à $$\wedge$$, en levant donc cette ambiguïté). De façon similaire, la formule

$$p \to q \to r$$

est ambiguë puisque les deux parenthésages ne sont pas équivalents.
Beaucoup de textes adoptent la convention de l’*associativité à droite*,
ainsi la seule lecture possible de la formule ci-dessus serait

$$p \to (q \to r)$$

mais remarquez que ceci est purement une convention, que nous allons
éviter d’utiliser dans ce texte.


### Sémantique

La sémantique consiste à attacher des *interprétations* aux formules du
calcul propositionnel. Le système qui est obtenu en considérant toutes
les interprétations possibles est aussi appelée *logique Booléenne* ou
*algèbre de Boole*.

Formellement, un **modèle** (parfois on dit une **interprétation**)
d’une proposition est l’affectation d’une valeur $$0$$ ou $$1$$ (appelée
**valeur de vérité**) à chacune de ses propositions atomiques. En
général, affecter $$p$$ à $$1$$ est interprété comme l’affirmation “il est
vrai que $$p$$”, affecter $$p$$ à $$0$$ comme “il n’est pas vrai que $$p$$”.

On parle aussi de **modèle du calcul propositionnel** lorsque on assigne
une valeur de vérité à chacune de ses propositions atomiques
(souvenez-vous qu’il y en a une infinité).


#### Connecteurs logiques et tables de vérité 

Dans les langages naturelles on peut composer des propositions complexes à l'aide des propositions plus simples. Nous venons de voir que dans le calcul propositionnel on peut de la même façon composer des propositions complexes à partir des propositions atomiques en utilisant les connecteurs logiques. La valeur de vérité des propositions composées ne dépend que de celles des propositions atomiques. On peut décrire des telles constructions à l'aide des *tables de vérité*, qui sont des tables qui donnent, en fonction des valeurs de vérité des propositions atomiques, la valeur de vérité de la proposition composée. 

##### Négation

Considérons $$p$$ la proposition *Il fait beau aujourd’hui*. La langue française possède plusieurs formes grammaticales pour exprimer la négation de cette proposition, la plus courante étant sans doute l’expression *il ne fait pas beau aujourd’hui*. En l’occurence, *ne ... pas* signifie que s’il est vrai que *Il fait beau aujourd’hui*, alors il est faux qu’*il ne fait pas beau aujourd’hui*, et que s’il est faux que ”Il fait beau aujourd’hui”, alors il est vrai qu’*il ne fait pas beau aujourd’hui*. On peut illustrer la signification de la négation à l’aide d’une table de vérité :



| $$p$$ | $$\neg p$$ 
|:--------:|:------------:
|   0      |   1
|   1      |   0 

Le connecteur $$\neg$$ est appelé connecteur *monadique* car il s’applique à une seule proposition. Tous les autres connecteurs sont des connecteurs *dyadiques* s’appliquant à deux propositions.

##### Conjonction

Le sens donné au connecteur $$\wedge$$ et celle du *et*. Par conséquent, la proposition $$p \wedge q$$ est vraie si $$p$$ et $$q$$ sont tous les deux vrais, et sera fausse dans tous les autres cas. Ceci peut se résumer par la table de vérité suivante :


| $$p$$ | $$q$$ | $$p\wedge q$$
|:--------:|:--------:|:------------------:
|   0      |   0      |      0
|   0      |   1      |      0
|   1      |   0      |      0
|   1      |   1      |      1

##### Disjonction

La disjonction est un connecteur dyadique défini par la table de vérité :

| $$p$$ | $$q$$ | $$p \vee q$$
|:--------:|:--------:|:------------------:
|   0      |   0      |      0
|   0      |   1      |      1
|   1      |   0      |      1
|   1      |   1      |      1

La proposition $$p \vee q$$ est vraie si au moins une des propositions $$p$$ et $$q$$ est vraie. (**Rappel** : Le symbole $$\vee$$ définit le *ou inclusif*).

##### Implication

L'implication $$p \to q$$ est sans doute la plus compliquée à comprendre. On lit $$p \to q$$ comme **si** $$p$$, **alors** $$q$$, $$p$$ **implique** $$q$$ ou encore $$q$$, **à condition que** $$p$$. 

Afin de mettre les choses en clair commençons par un exemple. Soit $$p$$ la proposition *j'obtiens ma licence* et $$q$$ la proposition *je vais organiser une fête*. Dans ce cas $$p \to q$$ se lit *si j'obtiens ma licence alors je vais organiser une fête*. Clairement, si j'obtiens ma licence, donc si $$p$$ est vraie et si j'organise une fête, donc si $$q$$ est vraie, la promesse est tenue donc $$p \to q$$ est vraie. Par contre, si j'obtiens ma licence mais je n'organise pas de fête ($$p$$ est vraie tandis que $$q$$ est fausse) alors la promesse n'est pas tenue, donc $$p \to q$$ est fausse. Regardons cependant ce qu'il se passe si malheureusement je n'obtiens pas ma licence. Dans ce cas, si j'organise une fête malgré ça ou si je ne fait rien, ne fait pas démentir ma promesse car je ne me suis engagé à rien dans ce cas-ci. Personne ne pourrait dire que je suis un menteur. Donc, si la proposition $$p$$ est fausse, l'implication $$p \to q$$ est vraie, peut importe la valuer de $$q$$. Nous pouvons alors conclure que la table de vérité de l'implication est la suivante:

| $$p$$ | $$q$$ | $$p\to q$$
|:--------:|:--------:|:------------------:
|   0      |   0      |      1
|   0      |   1      |      1
|   1      |   0      |      0
|   1      |   1      |      1

**Remarque.** Comme on vient de le voir  si $$p$$ est fausse, alors l’implication $$p \to q$$ est vraie, quelle que soit la valeur de vérité de $$q$$. Ainsi, *si* $$4 < 0$$, *alors* $$1 = 2$$ est une implication vraie, de même que *si* $$1 = 2$$, *alors* $$4 > 0$$. Cela conduit à la constatation suivante : **du faux, on peut déduire n’importe quoi !**

<!-- Un modèle d’une formule $$\phi$$ lui associe une valeur de vérité définie
[inductivement](../recursivite) de la façon suivante:

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
tautologie. $$A\wedge\neg A$$ est une *antilogie*. -->

## Théorie des modèles

On appelle **tautologie** une formule $$\phi$$ dont l’interprétation est 1, quelle que soit la valeur des
variables propositionnelles. La notation 

$$\models\phi$$ 


signifie que $$\phi$$ est une tautologie. On a par exemple $$\models \phi \vee \neg \phi$$, puisque quelque soit la valeur associée à $$\phi$$ la valeur de  $$\phi \vee \neg \phi$$ sera toujours 1.

Si $$\phi$$ et $$\psi$$ sont deux
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
se rendre compte que $$p\wedge q\models p\vee q$$, mais que la réciproque
n’est pas vraie ($$p\wedge q$$ n’est pas une conséquence logique de
$$p\vee q$$).

**Attention:** aucun des symboles $$\models,\equiv,\Leftrightarrow,=$$ ne
fait partie de la logique. Ce sont tous des symboles *métalogiques* qui
permettent d’exprimer des propriétés qu’on a démontrées *en dehors* de
la syntaxe du calcul des propositions (par exemple en lisant les tables
de vérité). On fera surtout attention à ne pas confondre $$p\to q$$ et
$$p\leftrightarrow q$$, qui sont des propositions du calcul des
propositions, avec $$p\models q$$ et $$p\Leftrightarrow q$$.


<!-- La notion de **vérité** est une notion purement sémantique. On a déjà
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
-->

### Équivalences remarquables

#### Commutativité 

Les phrases *il est beau et intelligent* et *il est intelligent et beau* sont sémantiquement équivalentes. De la même façon les phrases *il est beau ou intelligent* et *il est intelligent ou beau* sont sémantiquement équivalentes. De manière générale, pour toutes propositions $$p$$ et $$q$$,

$$ p\wedge q \equiv q\wedge p \qquad \text{  et  } \qquad p\vee q \equiv q\vee p.$$

#### Associativité

Supposons que nous avons une formule de la forme  $$p\wedge q \wedge s$$. Nous pouvons interpréter cette formule de deux façons différentes. Ou bien on calcule d'abord $$s = p \wedge q$$ et ensuite $$s \wedge r$$, c'est qui est équivalent à $$(p\wedge q) \wedge r$$, ou bien on calcule d'abord $$t = q\wedge r$$ et ensuite $$q \wedge t$$, ce qui revient à faire $$p\wedge (q\wedge r)$$.

Le même constat tient si on remplace $$\wedge$$ par $$\vee$$. En effet, les connecteurs $$\wedge$$ et $$\vee$$ sont associatives et donc l'ordre dans lequel on effectue les opérations n'est pas important. On peut alors conclure que   

$$(p\wedge q) \wedge r \equiv p\wedge (q\wedge r) \qquad \text{  et  } \qquad (p\vee q)\vee r \equiv p\vee (q \vee r).$$

#### Distributivité

Imaginez que votre professeur vous dit: *Pour valider le cours il faut d'abord réussir l'examen écrit et ensuite  réussir l'examen sur machine ou avoir une note supérieure à 12 à tous les devoirs maison.* Vous avez alors deux manières de valider le cours: Réussir l'examen écrit et l'examen sur machine, ou bien réussir l'examen sur machine  et avoir une note supérieure à 12 à tous les devoirs maison.

Ceci est dû aux tautologies suivantes :



 $$p\wedge(q\vee s) \equiv (p\wedge q)\vee (p\wedge s) \qquad \text{ et } \qquad p\vee (q\wedge s)\equiv (p\vee q)\wedge (p\vee s).$$
 



#### Lois de De Morgan

Pour que la phrase "La maison est grande et belle" soit fausse, il suffit que la maison soit petite ou qu'elle soit moche, mais il n'est pas nécessaire que ces deux caractéristiques soient réunis en même temps. La négation de cette phrase est alors "La maison est petite ou moche" et non pas "La maison est petite et moche". 

Les tautologies suivantes, connues comme *les lois de De Morgan*, formalisent cela:

$$\neg (p\wedge q)\equiv \neg p\vee \neg q \qquad { et } \qquad \neg(p\vee q)\equiv \neg p\wedge \neg q$$


#### Implication

$$p \to q \equiv \neg p \vee q.$$

#### Transposition

La phrase *si l’eau bout, alors sa température est à 100 degrés* est équivalente à *si la temperature de l’eau n’est pas à 100 degrés, alors l’eau ne bout pas*. Ceci provient de la tautologie suivante :

$$ p \to q \equiv \neg q \to \neg p.$$

#### Exportation 

$$(p \wedge q) \to r \equiv p \to (q \to r).$$


On résume maintenant la liste de formules qui peuvent être prouvées *sémantiquement
équivalentes* en comparant leur tables de vérité (remarquez qu’à la
place de $$p$$ et $$q$$ on peut substituer n’importe quelles formules $$\phi$$
et $$\psi$$ non nécessairement atomiques).

|Propriété | Formules équivalentes
|-|:-:|:-:
|Double négation    |$$p$$                    |$$\neg\neg p$$
|Commutativité      |$$p\wedge q$$            |$$q\wedge p$$
|                   |$$p\vee q$$              |$$q\vee p$$
|Associativité      |$$(p\wedge q)\wedge r$$  |$$p\wedge(q\wedge r)$$
|                   |$$(p\vee q)\vee r$$      |$$p\vee(q\vee r)$$
|Distributivité     |$$p\wedge(q\vee r)$$     |$$(p\wedge q)\vee(q\wedge r)$$
|                   |$$p\vee(q\wedge r)$$     |$$(p\vee q)\wedge(q\vee r)$$
|Lois de de Morgan  |$$\neg(p\wedge q)$$      |$$\neg p\vee\neg q$$
|                   |$$\neg(p\vee q)$$        |$$\neg p\wedge\neg q$$
|Implication        |$$p\to q$$               |$$\neg p \vee q$$
|Transposition      |$$p\to q$$               |$$\neg q \to \neg p$$
|Exportation        |$$(p \wedge q) \to r$$   |$$p \to (q \to r)$$


#### Réciproque et contraposée d'une implication

##### Réciproque

Considérons la proposition $$p:$$ $$n$$ *est un nombre entier* et la position $$q:$$  $$n$$ *est un nombre réel*. L'implication $$p \to q$$ est vraie, puisque tout nombre entier est aussi un nombre réel. On peut maintenant se demander si la réciproque est vraie, c'est-à-dire si $$q$$ implique $$p$$, qui donne *si $$n$$ est un nombre réel, alors $$n$$ est un nombre entier*. Cette implication est évidemment fausse. En effet, $$1/2$$ est un nombre réel, mais pas un nombre entier. 

De façon générale, la réciproque d’une implication $$p \to q$$ est l’implication $$q \to p.$$

##### Contraposée

La phrase $$\neg q \to \neg p$$ est la contraposée de la phrase $$p \to  q$$. 

Si par exemple $$p$$ est la phrase *est un rectangle* et $$q$$ la phrase *a quatre angles droits*. L'implication $$p \to q$$ se lit alors *si c'est un rectangle alors il quatre angles trois*. L'implication contraposée est donc la phrase *s'il n'a pas quatre angles droits, alors ce n'est pas un rectangle.* Puisque  $$p \to  q$$ et $$\neg q \to  \neg p$$ sont des tautologies, pour démontrer une implication, nous pouvons à la place démontrer sa contraposée.

<!-- **Exercice:** écrivez les tables de vérité des formules ci-dessus et
vérifiez qu’elles sont effectivement équivalentes. -->

<!-- #### Implication sémantique et implication matérielle

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

La [Théorie de la preuve](../preuve#calcul-des-propositions) est une approche complémentaire à la théorie des modèles. Si les notions de *modèle* et de *vérité* permettent de vérifier aisément (et en temps fini) si une formule donnée est valide ou pas, la théorie de la preuve essaye de modéliser de plus près la façon dont le mathématicien pense et démontre des théorèmes.

 "Le vrai intérêt de la théorie de la preuve réside, cependant dans son application à la [logique du premier ordre](../calcul-pred). Voir [Théorie de la preuve](../preuve)." -->



## Bibliographie

Pour les définitions de base et les algèbres de Boole, on pourra
consulter un quelconque des ouvrages conseillés dans la
[Bibliographie](../../#bibliographie).

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
[Calcul des Prédicats](../calcul-pred).  Il propose aussi
beaucoup d’exercices pour vous entraîner avec les séquents. Le
chapitre 2 couvre la sémantique et les théorèmes de
complétude. L’étudiant intéressé pourra les lire rapidement.

Allez voir aussi les pages des [Exercices](../exercices) et des
[Exercices Corrigés](../exercices-corriges).
