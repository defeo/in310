# Modéliser la langue parlée

**Du français au calcul des propositions…**

Pour chacun des énoncés suivants, représenter les propositions
élémentaires par une formule atomique (une lettre de l’alphabet) et
montrer quelle est la forme logique de l’énoncé.

1.  Ou ce n’est pas Sophia, ou bien elle a beaucoup changé.
2.  Si c’est Sophia, elle a beaucoup changé.
3.  Karpov doit sacrifier une tour ou Kasparov fera mat en trois coups.
4.  Si Karpov ne sacrifie pas une tour, Kasparov fera mat en trois
    coups.
5.  Ni Paul ni Maurice n’ont réussi.
6.  Paul et Maurice ne réussiront pas tous les deux.
7.  Si Maurice réussit, Paul réussira, sinon aucun des deux ne réussira.

**… et retour**

Soient $p$ et $s$ les propositions signifiant respectivement *“Paul aime
Sophie”* et *“Sophie aime Paul”*. Pour chacune des formules suivantes,
trouver un énoncé en français (cohérent et simple) qui lui corresponde.

1.  $(\neg p) \wedge s$,
2.  $\neg(p\wedge s)$,
3.  $\neg(p\vee s)$,
4.  $p \leftrightarrow s$,
5.  $\neg(p \to s)$.

# Syntaxe

**Lesquelles des formules suivantes sont syntaxiquement correctes?**

1.  $p \wedge q$,
2.  $\neg p \wedge q$,
3.  $\neg \neg p \to q$,
4.  $\neg p \neg\to q$,
5.  $\neg p \to\neg q$,
6.  $p \wedge\wedge q$.

**Dessiner les arbres de formation des formules suivantes.**

1.  $(p \wedge q) \vee s$,
2.  $p \wedge (q \vee s)$,
3.  $(p \to q) \to ((p \to \neg q) \to \neg p)$.

**Ajouter des parenthèses aux formules suivantes, selon les usages de
priorité vus en cours.**

1.  $\neg p \to q$,
2.  $p \to \neg q$,
3.  $\neg p\vee q \to \neg\neg q\vee \neg p$.

# Équivalences du calcul des propositions

**À l’aide des tables de vérité, trouver les propositions
équivalentes.**

1.  $\neg(p \wedge q)$,
2.  $(\neg p \wedge \neg q)$,
3.  $\neg(p \vee q)$,
4.  $(\neg p \vee \neg q)$,
5.  $q \to (\neg p)$,
6.  $p \to (\neg q)$,
7.  $\neg (p \to q)$,
8.  $p \wedge (\neg q)$.

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

1.  $(\neg p\to q) \to s = (\neg p \wedge \neg q) \vee s$,
2.  $p = p \wedge (q \vee (q \to p))$,

# Faire des preuves

**Parmi les affirmations suivantes, lesquelles sont vraies et lesquelles
sont fausses?**

Écrivez des formules du calcul propositionnel représentant ces phrases,
puis, en utilisant les transformations vues plus haut, réduisez-les à
des évidences.

1.  Soit $4$ ne divise pas $n$, soit $n$ est pair.
2.  Soit $n$ est impair, soit $4$ divise $n$.
3.  $a \le 0$ et $a \ge 0$ impliquent que $a=0$.
4.  Si $a\le 0$ implique que $a\ge 0$, alors $a \ge 0$.
5.  Si $n$ est pair, alors $1+1=2$.
6.  Si $1+1=3$, alors les nombres premiers sont en quantité finie.
