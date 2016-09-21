---
title: Propriétés du calcul des propositions et preuves élémentaires
---

## Modéliser la langue parlée

**Du français au calcul des propositions…**

Pour chacun des énoncés suivants, représenter les propositions
élémentaires par une formule atomique (une lettre de l’alphabet) et
montrer quelle est la forme logique de l’énoncé.

1.  Soit ce n’est pas Sophia, soit elle a beaucoup changé.
2.  Si c’est Sophia, elle a beaucoup changé.
3.  Karpov doit sacrifier une tour ou Kasparov fera mat en trois coups.
4.  Si Karpov ne sacrifie pas une tour, Kasparov fera mat en trois
    coups.
5.  Ni Paul ni Maurice n’ont réussi.
6.  Paul et Maurice ne réussiront pas tous les deux.
7.  Si Maurice réussit, Paul réussira, sinon aucun des deux ne réussira.

**… et retour**

Soient $$p$$ et $$s$$ les propositions signifiant respectivement *“Paul aime
Sophie”* et *“Sophie aime Paul”*. Pour chacune des formules suivantes,
trouver un énoncé en français (cohérent et simple) qui lui corresponde.

1.  $$(\neg p) \wedge s$$,
2.  $$\neg(p\wedge s)$$,
3.  $$\neg(p\vee s)$$,
4.  $$p \leftrightarrow s$$,
5.  $$\neg(p \to s)$$.

## Équivalences du calcul des propositions

**À l’aide des tables de vérité, trouver lesquelles des propositions suivantes sont
équivalentes entre elles.**

1.  $$\neg(p \wedge q)$$,
2.  $$(\neg p \wedge \neg q)$$,
3.  $$\neg(p \vee q)$$,
4.  $$(\neg p \vee \neg q)$$,
5.  $$q \to (\neg p)$$,
6.  $$p \to (\neg q)$$,
7.  $$\neg (p \to q)$$,
8.  $$p \wedge (\neg q)$$.

**Trouver des formules correspondantes aux tables de vérité suivantes.**

$$
\begin{array}{c c | c}
p&q&?\\
\hline
0&0&1\\
0&1&1\\
1&0&1\\
1&1&1
\end{array},
\qquad
\begin{array}{c c c | c}
p&q&s&?\\
\hline
0&0&0&0\\
0&0&1&0\\
0&1&0&0\\
0&1&1&1\\
1&0&0&0\\
1&0&1&0\\
1&1&0&0\\
1&1&1&1
\end{array},
\qquad
\begin{array}{c c | c}
p&q&?\\
\hline
0&0&0\\
0&1&1\\
1&0&0\\
1&1&0\\
\end{array}.
$$

**Sans utiliser les tables de vérité, montrer les équivalences
suivantes.**

1.  $$(\neg p\to q) \to s \equiv (\neg p \wedge \neg q) \vee s$$,
2.  $$p \equiv p \wedge (q \vee (q \to p))$$,

## Implication

1. Écrire la réciproque et la contraposée des implications suivantes :

	* Si 2 + 2 = 3 alors je suis le roi de Prusse.
	* S’il fait bon et si je ne suis pas trop fatigué alors je vais me promener.
	* Si je gagne au LOTO alors je sable le champagne et je pars aux Bahamas.


2. Soient les propositions $$p$$ et $$q$$ :

	* $$p$$ : « $$x$$ est un entier pair »,
	* $$q$$ : « $$x$$ est divisible par 4 ».

	Le prédicat $$p$$ est-il une condition suffisante de $$q$$ ? Une
    condition nécessaire ?

 
3. Un logicien dit à son fils : « si tu ne manges pas ta soupe, tu ne
   regarderas pas la télévision ». Le fils mange sa soupe et son
   dîner, et il est envoyé au lit tout de suite après. Quelle erreur
   avait faite le fils en pensant regarder la télé après le dîner ?

4. On interroge un logicien qui dit toujours la vérité sur sa vie
   sentimentale et il énonce les deux affirmations suivantes :
   
   * J’aime Marie ou j’aime Anne,
   * Si j’aime Marie alors j’aime Anne,
	 
   Que peut-on en conclure ?


5. Si le même logicien, avait répondu (sans donner les deux
   affirmations précédentes) à la question : « Est-il vrai que si vous
   aimez Marie alors vous aimez Anne » par :

   > « Si c’est vrai alors j’aime Marie, et si j’aime Marie alors c’est vrai. »

   Qu’aurait-on pu conclure ?

6. Un homme accusé d’avoir fait un cambriolage est jugé. Le procureur et l’avocat disent tour à tour :


*Le procureur* : Si l’accusé est coupable, alors il a un complice.

*L’avocat* : C’est faux !

Que peut-on conclure (et pourquoi faut-il virer l'avocat ?) 

## Faire des preuves

**Parmi les affirmations suivantes, lesquelles sont vraies et lesquelles
sont fausses?**

Écrivez des formules du calcul propositionnel représentant ces phrases,
puis, en utilisant les transformations vues plus haut, réduisez-les à
des évidences.

1.  Soit $$4$$ ne divise pas $$n$$, soit $$n$$ est pair.
2.  Soit $$n$$ est impair, soit $$4$$ divise $$n$$.
3.  Si $$n$$ est pair, alors $$1+1=2$$.
4.  Si $$1+1=3$$, alors les nombres premiers sont en quantité finie.

<!-- 3.  $$a \le 0$$ et $$a \ge 0$$ impliquent que $$a=0$$. -->
<!-- 4.  Si $$a\le 0$$ implique que $$a\ge 0$$, alors $$a \ge 0$$.-->




## Contradictions et vérité

1. Un logicien fait un cauchemar. Il erre dans un labyrinthe et il
   arrive à un endroit où le chemin se sépare en deux. Deux diables (A
   et B) sont à la croisée. Quand le logicien demande le chemin de la
   sortie, les diables répondent :

	* A : *« B n’est pas un menteur et la sortie est à gauche »* ;
	* B : *« A est un menteur et la sortie est à gauche »*.

	Quel chemin prend le logicien pour sortir ?


2. Le lendemain, le logicien refait un cauchemar similaire. Il repose la même question.

	* A : *« B n’est pas un menteur et la sortie est à gauche »* ;
	* B : *« A est un menteur ou la sortie est à droite »*.

	Quel est cette fois le chemin de la sortie ?

