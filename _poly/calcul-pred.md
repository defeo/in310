---
title: Calcul des prédicats
---

Le **calcul des prédicats**, ou **logique du premier ordre**, est une [théorie formelle](../logique) (au sens où il s'agit de manipuler des *formules*) qui modélise le raisonnement mathématique.

Des exemples de théories mathématiques modélisables en logique du premier ordre sont les **entiers naturels** (via les [axiomes de Peano](#système-de-Peano)) ou les mathématiques entières (via les [axiomes de Zermelo-Fraenkel](#système-de-zermelo-fraenkel)). Il existe cependant des limitations bien connues à la possibilité de réaliser ces modélisations, comme l'a démontré Gödel avec ses [théorèmes d'incomplétude](#théorèmes-d'incomplétude-de-Gödel).


## Définitions

On fait comme d'habitude une distinction entre **syntaxe** et **sémantique**. Si la première est à peine plus complexe que la syntaxe du [Calcul des propositions](../calcul-prop), la deuxième est beaucoup plus riche, car n'importe quelle structure mathématique peut faire de modèle à la logique du premier ordre.

### Syntaxe

La logique du premier ordre a été conçue pour décrire n'importe quelle structure mathématique, comme par exemple les nombres naturels. Avant de pouvoir énoncer des propriétés (i.e., des théorèmes) d'une structure mathématique, nous devons définir quel est son *langage*, i.e. quelles sont les façons légitimes de  combiner les objets de la structure.

Un **langage**, ou **signature**, est la donnée des éléments suivants (tous en quantité pas nécessairement finie):

- Des **symboles de constante**, par exemple: $$0,1,2,\ldots$$.
- Des **symboles de fonction**, par exemple: $$f,g,h,\ldots$$. À chaque symbole est associé un entier strictement positif appelé **arité de la fonction**; ce nombre indique le nombre d'arguments pris par la fonction.
- Des **prédicats** (ou **symboles de relation**), par exemple: $$P,Q,R,\ldots$$. À chaque symbole est aussi associé une **arité**, qui peut être dans ce cas positive ou nulle.

Par exemple, le langage de l'arithmétique est constitué de:

- les constantes $$0, 1, 2, \ldots$$;
- les symboles de fonction $$+,-,\times,/$$ (tous de arité $$2$$);
- les relations $$=,\le$$ (tous de arité $$2$$).

On peut combiner les symboles d'un langage pour former des **termes**. Pour cela, nous nous donnons un ensemble [dénombrable](../cardinalite) de **variables** $$x,y,z,\ldots$$. alors un **terme** est

- soit une variable,
- soit un symbole de constante,
- soit l'application d'un symbole de fonction d'arité $$n$$ à $$n$$ termes.

Par exemple

$$0+1,\qquad x-3,\qquad (y+5)\times 6$$

sont des termes, mais

$$-5,\qquad x=y,\qquad ++3, xy$$

n'en sont pas. Un terme qui ne contient pas de variables est dit **clos**.

**Remarque**: ni les parenthèses ni le point ne font pas partie du langage. Ils sont simplement là pour rendre les termes non-ambigus, i.e. pour indiquer dans quel ordre les fonctions ont été appliquées pour obtenir le terme. Voir [du bon usage des parenthèses](../logique#du-bon-usage-des-parenthèses).

Une **formule atomique** est un prédicat du langage de arité $$n$$ appliqué à $$n$$ termes. Par exemple

$$x=y,\qquad (2+y) = x,\qquad  (0 + 1) = (3 - 2)$$

sont des formules atomiques, mais

$$2+3,\qquad 2 + (y=x), \qquad y=x=z, 0\le 1\le 2$$

n'en sont pas (même si certaines d'entre elles sont des raccourcis communément utilisés).

Finalement nous sommes prêts à définir la syntaxe de la logique du premier ordre. Nous nous donnons les **connecteurs logiques suivants**

- Les connecteurs du [Calcul des propositions](../calcul-prop): $$\wedge,\vee,\neg,\to,\ldots$$;
- Les **quantificateurs**
    - $$\forall$$, qui se lit *pour tout*,
    - $$\exists$$, qui se lit *il existe*.

Une **formule du premier ordre** (ou **formule bien formée**) est:

- soit une formule atomique,
- soit, si $$\phi$$ et $$\psi$$ sont deux formules du premier ordre, l'une des expressions suivantes:
    - $$\phi\wedge\psi$$, ou $$\phi\vee\psi$$, ou $$\neg\phi$$, ou $$\phi\to\psi$$, etc.,
    - $$\exists x. \phi$$, ou $$\forall x. \phi$$, pour une variable quelconque $$x$$.

Voici des exemples de formules:

$$\forall x.(x\le 0\vee x=0),\qquad (\exists x.x+2=0)\wedge(\exists y.z=2)$$

et des non-exemples:

$$\forall x\le 0. x=y,\qquad \exists x.x,\qquad (\exists x.x=y)+1$$

(même si la première est un raccourci courant).


#### Variables libres et liées

Une variable est dite **libre** si elle n'est quantifiée par aucun quantificateur (dans son sous-arbre syntaxique). Elle est dite **liée** sinon. Par exemple, dans le prédicat

$$\forall x. (P(x) \vee Q(y))$$

la variable $$x$$ est liée, tandis que $$y$$ est libre. De façon moins évidente, dans le prédicat

$$(\forall x. P(x)) \vee Q(x)$$

la première occurrence de la variable $$x$$ est liée, tandis que la deuxième est libre (en effet, le quantificateur $$\forall$$ ne porte pas sur elle, car il est dans un sous-arbre différent).

Une formule sans variables libres est dite **close**. Une formule $$\phi$$ de variables libres $$x,y,\dots$$ est parfois notée $$\phi(x,y,\dots)$$ lorsque l'on veut indiquer clairement les noms de ses variables libres. Ceci est intéressant, par exemple, lorsque l'on forme un prédicat plus long à partir de $$\phi$$, comme par exemple

$$\forall x.\exists y.\phi(x,y).$$


#### Priorité des opérateurs

Les règles de priorité des opérateurs sont les mêmes que pour le [Calcul des propositions](../calcul-prop). Les quantificateurs ont par convention la priorité la plus basse, ainsi

$$\forall x. P(x) \vee Q(x)$$

est à lire comme

$$\forall x. (P(x) \vee Q(x))$$

et non pas comme 

$$(\forall x. P(x)) \vee Q(x)$$


On omet aussi les parenthèses lorsque plusieurs quantificateurs se suivent. Ainsi, la seule façon d'interpréter

$$\forall x. \exists y. P(x,y)$$

est 

$$\forall x. (\exists y. P(x,y))$$


#### Autres conventions

En dehors du cadre de la logique, le calcul des prédicats est utilisé pour exprimer de façon succincte des énoncés mathématiques. Pour avoir plus de souplesse et de maniabilité, l'on accepte dans ce cas d'autres raccourcis de notation qui ne sont pas standard dans la théorie de la logique du premier ordre.

Les raccourcis les plus courants sont

- $$\forall x, y. P(x,y)$$ pour $$\forall x.\forall y. P(x,y)$$ ;
- $$\forall P(x). Q(x)$$, pour $$\forall x. P(x) \to Q(x)$$ ;
- $$\exists P(x). Q(x)$$, pour $$\exists x. P(x) \wedge Q(x)$$.

Ces raccourcis peuvent être utilisés, par exemple, pour écrire

$$\forall x,y \in \mathbb{N}. x + y \ge 0.$$

Une autre convention courant consiste à utiliser le symbole $$\Rightarrow$$ pour l'implication, à la place du symbole $$\to$$ qui a déjà trop d'utilisations en algèbre.

Dans la suite de ce cours, nous allons rigoureusement éviter d'utiliser ces raccourcis.


### Sémantique

Comme en [Calcul des propositions](../calcul-prop), donner une sémantique au calcul des prédicats revient à attacher une *interprétation* à chaque symbole, et ensuite à chaque prédicat. Les choses sont rendues plus complexes par le fait que le calcul des prédicats permet de modéliser toutes les mathématiques, et que donc le nombre d'interprétations possibles est infini (alors que, rappelons-le, dans une proposition avec $$n$$ formules atomique a seulement $$2^n$$ modèles distincts).

La première chose à fixer pour interpréter le calcul des prédicats est un **domaine du discours**, en général un ensemble (par exemple les entiers), dans lequel on va interpréter tous les **termes**. 

Une fois le **domaine du discours** fixé, on définit un **modèle** (ou **interprétation**, ou **structure du premier ordre**) comme l'assignation

- d'un élément du domaine à chaque *symbole de constante* ;
- d'une [fonction](../fonction) du domaine dans lui même à chaque *symbole de fonction* ;
- d'une [relation](../relation) sur le domaine à chaque *symbole de rélation*.


Par exemple, si le langage est celui de l'arithmétique, un modèle possible sera l'assignation

- des nombres **zéro**, **un**, ... aux constantes 0, 1, ...
- des opérations d'addition, soustraction, ... aux symboles +, -, ...
- des relations d'égalité, d'ordre, ... aux symboles =, ≤, ...


**Remarque :** Tout ceci peut paraître une inutile lapalissade, car on donne à chaque symbole la signification qu'on lui attribue déjà ordinairement. Gardez à l'esprit, toutefois, qu'un même symbole peut être interprété de plusieurs façons différentes : les chiffres peuvent représenter des nombres en [base deux](../entiers-bases), les opérations arithmétiques peuvent être faites [modulo un entier](../equivalence#réduction-modulo-un-entier), etc. La théorie du calcul des prédicats s'intéresse aux **metathéorèmes** qu'on peut démontrer *indépendemment de la façon d'interpréter* le langage ; il est donc naturel de monter à ce niveau d'abstraction, afin de pouvoir attacher des modèles exotiques au calcul des prédicats.


Une fois le modèle fixé, on peut passer à définir l'interprétation des prédicats. On commence par se donner une **affectation des variables** $$\mu$$, c'est à dire une fonction $$\mu(x)$$ qui à chaque variable $$x,y,\dots$$ associe un élément du domaine.

On peut maintenant définir l'interprétation d'un terme. L'interprétation d'un terme $$t$$, **sous l'affection** $$\mu$$ est définie [inductivement](../recursivite) par

- si $$t$$ est une constante, l'élément du domaine qui est lui est associé ;
- si $$t$$ est une variable $$x$$, l'élément du domaine $$\mu(x)$$ ;
- si $$t$$ est de la forme $$f(t_1,t_2,\dots)$$, avec $$f$$ un symbole de fonction et $$t_1,t_2,\dots$$ des termes, l'interprétation de $$f$$ appliquée aux interprétations de $$t_1$$, $$t_2$$, etc.

Par exemple, si le terme est $$x+1$$, en supposant que $$\mu(x)=3$$, son interprétation sous $$\mu$$ est

- 1 est interprété comme le nombre **un**,
- $$x$$ est interprété comme le nombre **trois**,
- $$x+1$$ est interprété comme **un plus trois**, c'est à dire **quatre**.


On peut finalement définir l'interprétation d'un prédicat $$\phi$$ **sous une affectation** $$\mu$$. L'interprétation d'un prédicat ne va plus être un élément du domaine, mais plutôt une valeur de vérité (vrai ou faux).

- Si $$\phi$$ est de la forme $$P(t_1, t_2, \dots)$$, où $$P$$ est un symbole de relation et $$t_1,t_2,\dots$$ sont des termes, l'interprétation de $$P$$ appliquée aux interprétations de $$t_1$$, $$t_2$$, etc.
- Si $$\phi$$ est la forme $$\psi \bullet \chi$$, avec $$\bullet$$ un opérateur du [Calcul des propositions](../calcul-prop) et $$\psi$$ et $$\chi$$ deux prédicats, la valeur de vérité de $$\phi$$ est obtenue à partir des valeurs de vérité de $$\psi$$ et $$\chi$$ grâce à la table de vérité de $$\bullet$$.
- Si $$\phi$$ est de la forme $$\exists x.\psi$$, son interprétation est vraie s'il existe une autre affectation $$\mu'$$, qui diffère de $$\mu$$ seulement en $$x$$, et telle que l'interprétation de $$\psi$$ sous $$\mu'$$ est vraie. En pratique ceci modélise le fait qu'il existe une valeur du domaine qui rend vrai $$\psi$$.
- Si $$\phi$$ est de la forme $$\forall x.\psi$$, son interprétation est vraie si pour toute affectation $$\mu'$$, qui diffère de $$\mu$$ seulement en $$x$$, l'interprétation de $$\psi$$ sous $$\mu'$$ est vraie. En pratique ceci modélise le fait que toute valeur du domaine rend vrai $$\psi$$.

**Exemple :** on fixe $$\mu(x) = 2$$ et $$\mu(y) = 1$$. La formule $$\forall x.(x>0)\to(x>y)$$ est fausse car il existe un $$\mu'$$, par exemple $$\mu'(x)=1$$, $$\mu'(y)=1$$, qui diffère de $$\mu$$ seulement en $$x$$ et qui rend $$(x>0)\to (x>y)$$ fausse. Au contraire, si on prend $$\mu(x)=2$$ et $$\mu(y)=0$$, la même formule devient vraie (sous l'affectation $$\mu$$). On observe que la valeur de $$\mu(x)$$ ne change rien à la vérité de la formule, car $$x$$ y est **liée**.

Lorsque la formule $$\phi$$ ne contient pas de variable **libre**, sa valeur de vérité ne dépend pas de l'affectation initiale $$\mu$$, et on dit simplement que $$\phi$$ est vraie ou fausse dans le modèle.

**Exemple :** $$\forall x.\forall y.\exists z. (x < z < y)$$ est fausse dans les entiers. En effet, pour n'importe quelle affectation initiale, il suffit de prendre $$\mu'(x)=0$$ et $$\mu'(y)=1$$ pour voir qu'il n'existe pas de choix pour $$z$$ qui vérifie $$x<z<y$$. Par contre le même prédicat est vrai dans les rationnels, il existe en effet toujours un nombre rationnel compris entre deux nombres rationnels distincts. On voit ici que, même si la vérité d'un prédicat clos ne dépend pas de l'affectation, elle peut bien dépendre du modèle choisi.

Un prédicat **clos** qui est vrai dans un modèle est dit **satisfaisable**, un prédicat qui est vrai dans tout modèle est dit **valide**. Ceci est analogue aux définitions de satisfaisabilité et de tautologie en [Calcul des prédicats](../calcul-pred).

Puisque ces notions ne sont bien définie que pour les prédicats clos, on s'intéresse par la suite principalement à ceux-ci. Une convention courrante pour traiter les prédicats non-clos consiste à convenir que toutes les variables libres sont **universellement quantifiées**. Ainsi lorsque l'on s'interroge sur la validité du prédicat

$$\forall x. x < y$$

il est sous-entendu qu'on parle de la validité de

$$\forall y. \forall x. x < y$$


## Théorie des modèles

Comme pour le [Calcul des propositions](../calcul-prop), nous nous intéressons aux équivalences entre prédicats qui sont valides indépendemment de la façon dont on interprète les variables. Lorsque un prédicat $$\phi$$ est **valide** on note

$$\models \phi$$

Si $$\phi$$ et $$\psi$$ sont deux prédicats, et si tout modèle qui rend vrai $$\phi$$ rend aussi vrai $$\psi$$, on dit que $$\psi$$ est une **conséquence logique** (ou **sémantique**) de $$\phi$$ et on note

$$\phi\models\psi$$

Si $$\phi\models\psi$$ et $$\psi\models\phi$$ on dit que $$\phi$$ et $$\psi$$ sont équivalentes et on note

$$\phi\equiv\psi \quad\text{ou}\quad \phi\Leftrightarrow\psi \quad\text{ou}\quad \phi=\psi$$

En général ces équivalences sont indépendantes du langage employé. Ainsi les équivalences qu'on peut espérer démontrer ressembleront plutôt à

$$\neg(\forall x. \psi) \equiv \exists x.\neg\psi$$

pour tout prédicat $$\psi$$.

**Exercice :** Montrer que cette équivalence est bien vérifiée.


### $$\alpha$$-rennomage

Une des méthodes les plus simples pour obtenir des équivalences consiste à renommer certaines variables sans altérer la sémantique du prédicat. Ce procédé s'appelle $$\alpha$$-**renommage** (ou **$$\alpha$$-conversion**).

Si $$\phi$$ est une formule, contenant une variable $$x$$ liée, on peut remplacer toutes les occurrences liées de $$x$$ par une nouvelle variable $$y$$ (en faisant attention à ce que $$y$$ ne soit pas déjà employée et libre dans $$\phi$$), sans altérer la sémantique de $$\phi$$.

Par exemple, si $$\phi(y)$$ est la formule

$$(\forall x. (x=2 \vee y=3)) \vee (\forall x. x = 3)$$

elle peut être changée en

$$(\forall x. (x=2 \vee y=3)) \vee (\forall z. z = 3)$$

sans en altérer la sémantique. Lorsque l'on procède à un $$\alpha$$-renommage il faut faire attention à ce que la nouvelle variable ne soit pas déjà libre dans la formule ; en effet la formule

$$(\forall y. (y=2 \vee y=3)) \vee (\forall x. x = 3)$$

n'est pas équivalente à $$\phi(y)$$ (en effet, $$y$$ n'y est plus libre).

Il est aussi possible de renommer les variables libres, par exemple $$y$$ dans la formule précédente, mais dans ce cas il ne fait pas beaucoup de sens de parler d'équivalence, car la formule n'est pas close. Par exemple, la formule

$$(\forall x. (x=2 \vee z=3) \vee (\forall x. x = 3)$$

n'est pas équivalente à $$\phi(y)$$, néanmoins on peut noter $$\phi(z)$$ cette nouvelle formule. En général, si $$\phi(x)$$ est une formule de variable libre $$x$$, on notera $$\phi(y)$$ ou encore $$\phi[y/x]$$ la même formule dans laquelle toutes les occurrences libres de $$x$$ ont été remplacées par $$y$$.


### Forme normale prénexe

La **forme normale prénexe** est une technique permettant de transformer un prédicat quelconque en un prédicat équivalent sous une forme standard. Un prédicat est dit en **forme normale prénexe** (en anglais, PNF) s'il est de la forme

$$\Theta a. \Theta b. \dots \Theta z. P(a,b,\dots,z)$$

où les $$\Theta$$ sont des quantificateurs $$\forall$$ ou $$\exists$$, et $$P(a,b,\dots,z)$$ est un prédicat sans quantificateurs. Pour tout prédicat il existe un prédicat sémantiquement équivalent (en logique classique) en PNF ; ce prédicat peut être obtenu à l'aide de quelques transformations élémentaires, que nous listons ci-dessous.

Les équivalences remarquables du calcul des propositions :

- Lois de De Morgan : $$\neg (A \vee B) \equiv \neg A \wedge \neg B, \quad \neg (A \wedge B) \equiv \neg A \vee \neg B$$ ;

- Distributivité : $$A \wedge (B \vee C) \equiv (A \wedge B) \vee (A \wedge C), \quad A \vee (B \wedge C) \equiv (A \vee B) \wedge (A \vee C)$$ ;

- Implication : $$A \to B \equiv \neg A \vee B$$ ;

- Double négation : $$\neg\neg A \equiv A$$.


Les équivalences remarquables du calcul des prédicats :

- $$\neg\forall x.P \equiv \exists x.\neg P$$ ;

- $$\neg\exists x.P \equiv \forall x.\neg P$$ ;

- $$(\forall x. P) \wedge Q \equiv \forall x. (P \wedge Q)$$ seulement si $$x$$ n'est pas libre dans $$Q$$ ;

- $$(\forall x. P) \vee Q \equiv \forall x. (P \vee Q)$$ seulement si $$x$$ n'est pas libre dans $$Q$$ ;

- $$(\exists x. P) \wedge Q \equiv \exists x. (P \wedge Q)$$ seulement si $$x$$ n'est pas libre dans $$Q$$ ;

- $$(\exists x. P) \vee Q \equiv \exists x. (P \vee Q)$$ seulement si $$x$$ n'est pas libre dans $$Q$$.

Moyennant un $$\alpha$$-rennomage de la variable $$x$$, ces quatre dernières règles peuvent être appliquées en toute circonstance.

D'autres règles de transformation, notamment concernant le connecteur $$\to$$, peuvent être déduites à partir de celles-ci.

**Exercice :** Prouver les équivalences remarquables ci-dessus.


## Théorie de la preuve

La [Théorie de la preuve](../Théorie de la preuve) de la logique du premier ordre n'est pas plus compliquée que celle du [Calcul des propositions](../Théorie de la preuve#calcul-des-propositions): en effet les **systèmes de preuve** sont les mêmes, après ajout de quelques règles d'inférence pour les quantificateurs. Voir [Théorie de la preuve](../preuve#calcul-des-propositions).
