---
title: Anagramme
---

Une anagramme d'un mot est une [permutation](../permutation) de ses lettres. Par exemple, « ruine » est une anagramme de « nuire ». Les anagrammes sont strictement liées aux [permutations](../permutation), en effet les permutations de $$\mathcal{S}_n$$ ne sont rien d'autre que la représentation abstraite des toutes les anagrammes possibles d'un mot de $$n$$ lettres.

## Nombre d'anagrammes

Il est facile de voire qu'un mot de $$n$$ lettres **distinctes** a exactement $$n!$$ anagrammes. En effet, pour former une anagramme à partir de $$n$$ lettres, on a $$n$$ choix pour la première lettre, $$n-1$$ choix pour la deuxième et ainsi de suite. 

On peut voir cela de façon récursive. On note $$A(n)$$ le nombre d'anagrammes. On commence par choisir la première lettre de notre anagramme, ce qui fait $$n$$ possibilités ; il reste $$n-1$$ lettres à déterminer, et tous les anagrammes du mot de $$n-1$$ lettres restantes sont acceptables. On déduit

$$A(n) = nA(n-1)$$

et, puisque $$A(0)=1$$, on déduit $$A(n)=n!$$.


### Anagrammes avec répétitions

Le calcul est un peu plus compliqué lorsque le mot présente des lettres répétées. Par exemple, le mot « abba » a seulement six anagrammes possibles, à savoir « baab », « baba », « abab », « bbaa », « aabb » et « abba » lui-même. Ce nombre est bien moindre que $$4!=24$$.

Pour trouver le nombre exact d'anagrammes d'un mot avec répétitions, on numérote les lettres répétées afin de les distinguer. « abba » devient

$$ a_1 b_1 b_2 a_2.$$

Comme toutes les lettres sont différentes, ce nouveau mot a maintenant $$n!$$ anagrammes, mais plusieurs anagrammes correspondent au même mot dès qu'on enlève les indices. En effet, les mots

$$ a_1 b_1 b_2 a_2,\quad a_2 b_1 b_2 a_1,\quad a_1 b_2 b_1 a_2,\quad a_2 b_2 b_1 a_1$$

correspondent tous au même mot « abba ». On voit que si un mot a une lettre répétée $$k$$ fois, à chaque anagramme du mot d'origine, correspondent $$k!$$ anagrammes équivalents avec cette lettre numérotée.

En conclusion, un mot de longueur $$n$$, contenant $$n_a$$ répétitions de la lettre $$a$$, $$n_b$$ répétitions de la lettre $$b$$ et ainsi de suite a exactement

$$\frac{n!}{n_a! n_b! \cdots n_z!}$$

anagrammes.
