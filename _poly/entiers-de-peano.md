---
title: Entiers de Peano
---

Vers la fin du XIX siècle les mathématiciens ont commencé s'interroger sur les *fondements des mathématiques*, et en particulier sur la possibilité de ramener toutes les mathématiques à un nombre restreint d'[axiomes](../logique). Les *axiomes de Peano* ont été introduits  par le mathématicien italien Giuseppe Peano afin de modéliser les entiers naturels. Il s'agit de neuf axiomes qui formalisent les propriétés des nombres représentés en [unaire](../entiers-bases).

## Les axiomes

Les axiomes de Peano définissent ce que c'est un nombre naturel et ce que c'est que le *successeur d'un nombre*. Le premier axiome affirme l'existence d'un entier naturel (qu'on identifie avec le nombre zéro).

> **Axiome 1 :** $$0$$ est un nombre naturel.

Les axiomes suivants affirment que l'égalité est une [relation](../relation) d'[équivalence](../equivalence).

> **Axiome 2 :** Pour tout nombre naturel $$n$$, $$n = n$$.

> **Axiome 3 :** Pour tous nombres naturels $$n$$ et $$m$$, si $$n = m$$ alors $$m = n$$.

> **Axiome 4 :** Pour tous nombres naturels $$n$$, $$m$$ et $$p$$, si $$n = m$$ et $$m = p$$ alors $$n = p$$.

> **Axiome 5 :** Pour tout nombre naturel $$n$$, si $$n = m$$ alors $$m$$ est un nombre naturel.

L'axiome suivant introduit le concept de *successeur*, ce qui est représenté par une [fonction](../fonction) $$S$$. De cette façon les nombres naturels sont définis [récursivement](../induction) comme une suite d'application de la fonction *successeur* au nombre $$0$$.

> **Axiome 6 :** Pour tout nombre naturel $$n$$, $$S(n)$$ est un nombre naturel.

Dans le système de Peano, les nombres sont ainsi [représentés en unaire](../entiers-bases) : $$0$$ est le nombre **zéro**, $$S(0)$$ son successeur, c'est à dire le nombre **un**, $$S(S(0))$$ le nombre **deux** et ainsi de suite.

**Note :** Pour une meilleure lisibilité, il est courant d'écrire la fonction $$S$$ sans les parenthèses, ainsi dans la suite le nombre **trois** sera représenté par $$SSS0$$.

Les deux axiomes suivants imposent des contraintes suffisantes pour que la fonction $$S$$ corresponde exactement au concept de *successeur*.

> **Axiome 7 :** Pour tout nombre naturel $$n$$, $$Sn$$ n'est pas égal à 0.

> **Axiome 8 :** Pour tous nombres naturels $$n$$ et $$m$$, si $$Sn = Sm$$ alors $$n = m$$.

Enfin, le dernier et plus important axiome, l'[axiome d'induction](../induction#axiome-dinduction), permet d'affirmer qu'il n'y a pas d'autres nombres naturels que ce qu'on construit à l'aide de la fonction $$S$$.

> **Axiome 9 :** Si $$A$$ est un [ensemble](../ensemble) tel que
>
> - il contient $$0$$ et
> - pour tout nombre naturel $$n$$, si $$n$$ est dans $$A$$ alors $$S(n)$$ est dans $$A$$,
>
> alors $$A$$ contient tous les nombres naturels.

En plus de restreindre la définition de nombre naturel, ce dernier axiome entre en jeu dans la quasi-totalité des preuves concernant les nombres naturels.


## Formalisation en calcul des prédicats

La formalisation des axiomes ci-dessus dans le langage du [Calcul des prédicats](../calcul-pred) et immédiate, mais elle comporte une subtilité concernant l'axiome d'induction. En particulier, la question de savoir si les axiomes de Peano sont corrects et s'ils sont suffisants a prouver toutes les propriétés des entiers pose pas mal de problèmes. Allez voir [Logique mathématique](../logique).


## Définition des opérations arithmétiques

À partir des axiomes, il est possible de définir les opérations arithmétiques usuelles sur les entiers. Il va s'agir, bien sûr, de [définitions récursives](../induction).

On commence par l'addition :

- Si $$n$$ est un nombre, $$n + 0 = n$$,
- Si $$n$$ et $$m$$ sont deux nombres, $$n + Sm = S(n + m)$$.

On peut ensuite définir la multiplication :

- Si $$n$$ est un nombre, $$n \times 0 = 0$$,
- Si $$n$$ et $$m$$ sont deux nombres, $$n \times Sm = n + (n \times m)$$.

Et l'ordre

- Pour tous nombres $$n$$ et $$m$$, $$n \le m$$ si et seulement s'il existe un nombre $$p$$ tel que $$n + p = m$$.

À partir de ces définitions, on peut définir la soustraction et la division comme les inverses de l'addition et de la division, et grâce à cela définir les **entiers relatifs** et les **nombres rationnels**.

