---
title: Correction TD 1 à 4
---

# Important

Cette correction est là pour vous aider à vous entraîner.
Les réponses ne sont pas détaillées, mais **vos réponses en examen doivent être détaillées, vous devez expliquer la façon dont vous êtes arrivés au résultat**

# TD 1

## Rappels sur l’exponentielle et le logarithme

1. $$a^7$$,
2. $$a^{12}$$,
3. $$\frac{1}{a} = a^{-1}$$,
4. $$2^{6} = 64$$,
5. $$10$$,
6. $$6$$,
7. $$3  log_4(a)$$,
8. $$11$$.

## Conversions de base

1. $$(42)_{10}$$,
2. $$(34)_{10}$$,
3. $$(111100011)_{2} = (122220)_{3}$$,
4. $$(1E3)_{16}$$,
5. $$(1010 0011 0001 1011)_{2}$$,
6. $$(125)_{9}$$.
^

1. $$(102020)_{4}$$,
2. $$(1020130)_{4}$$,
3. $$(10201)_{4}$$,
4. $$(55)_{16} = (1010101)_{2}$$,
5. $$(11101)_{2}$$,
6. $$(1101110)_{2}$$,
7. $$(100000000)_{2}$$.

## Propriétés des représentations en base b

1. Avec 2 chiffres : 3 (11). Avec 3 chiffres : 7 (111). Avec 4 chiffres : 15 (1111). Avec n chiffres :  $$2^n -1$$.
2. Il faut $$\log_2(m)+1$$ chiffres.
3. Pour une base b : $$b^n-1$$ et $$\log_b(m)+1$$.
4. Il faut 6 chiffres binaires.
5. Il faut 2 chiffres hexadécimaux.

# TD 2

## Équivalences du calcul des propositions

**À l’aide des tables de vérité, trouver les propositions
équivalentes.**

$$
\begin{array}{c c | c| c| c| c| c| c| c| c}
p&q&1&2&3&4&5&6&7&8\\
\hline
0&0&1&1&1&1&1&1&0&0\\
0&1&1&0&0&1&1&1&0&0\\
1&0&1&0&0&1&1&1&0&0\\
1&1&0&0&0&0&0&0&1&1
\end{array}
$$

**Sans utiliser les tables de vérité, montrer les équivalences
suivantes.**

1.  $$(\neg p\to q) \to s = (\neg p \wedge \neg q) \vee s
\\(\neg p\to q) \to s = 
\\\neg(\neg p\to q) \vee s =
\\\neg(\neg \neg p  \vee q) \vee s = 
\\\neg(p  \vee q) \vee s = (\neg p \wedge \neg q) \vee s$$

2.  $$p = p \wedge (q \vee (q \to p))
\\p \wedge (q \vee (q \to p)) = 
\\(p \wedge q) \vee (p \wedge (q \to p)) = 
\\(p \wedge q) \vee (p \wedge ( \neg q \vee p)) = 
\\(p \wedge q) \vee ((p \wedge \neg q) \vee( p \wedge p)) = 
\\(p \wedge q) \vee ((p \wedge \neg q) \vee p) = 
\\(p \wedge q) \vee (p \wedge \neg q)) \vee p = 
\\(p \vee (q \wedge \neg q)) \vee p = 
\\(p \vee (q \wedge \neg q)) \vee p = 
\\p \vee p = p $$ 

# TD 3

## Forme prénexe

**Mettre les prédicats suivants en forme normale prénexe.**

1. $$\exists x \forall y.(\neg(x + y = 1))$$,

2. $$\exists x \exists y(\neg(R(x) \wedge Q(y))$$,

3. $$\exists x \exists y (\neg(R(x) \vee S(y)) \vee R(z) )$$,

4. $$\exists x \exists z \forall w (\neg (x \ge y \wedge z \le y)) \vee w=y)$$.

# TD 4

Démontrer par induction les propriétés suivantes.

1. Pour tout entier $$n$$, $$\sum_{i=0}^n i = n(n + 1)/2$$ ;

Pour n = 0 : $$\sum_{i=0}^n i = 0$$.

On suppose la propriété vraie pour n. 

Prouvons-la pour n+1 : 
$$\sum_{i=0}^{n+1} i = \sum_{i=0}^n i + (n+1) =  \frac{n(n + 1)}{2} + (n+1) =   \frac{n(n + 1) + 2*(n+1)}{2} =  
\frac{(n + 1)(n+2)}{2}.$$
CQFD

2. Pour tout entier $$n$$, $$7^n - 1$$ est divisible par 6 ;

Pour n = 0 : $$7^n - 1 = 1-1 = 0$$ divisible par 6.

On suppose la propriété vraie pour n. 

Prouvons-la pour n+1 : 
$$7^{n+1} - 1 = 7*7^n - 1 = 7*(7^n -1 +1) -1 = 7*(7^n -1) +7 -1 = 7*(7^n -1) +6.$$ On a $$(7^n -1)$$ divisible par 6, donc $$7*(7^n -1)$$ est divisible par 6, et  $$7*(7^n -1) +6$$ est donc divisible par 6 (par addition de nombre divisible par 6).
CQFD

3. Pour tout entier $$n$$, $$(n^3 - n)$$ est divisible par 3 ;

Pour n = 0 : $$(n^3 - n) = 0 $$est divisible par 6.

On suppose la propriété vraie pour n. 

Prouvons-la pour n+1 : 

$$(n+1)^3 - (n+1) = (n+1)(n+1)^2 - (n+1) = (n+1)(n^2 +2n + 1)^2 - (n+1) $$

$$= n^3+2n^2+n+n^2+2n+1-n-1 $$

$$= n^3+3n^3+3n-n =  n^3-n+3(n^3+ n)$$.

Par hypothèse $$n^3-n$$ est divisible par 3. On a $$3(n^3+ n)$$ divisible par 3, donc par addition de nombres divisibles par 3, $$(n+1)^3 - (n+1)$$ est divisible par 3.

CQFD

4. Pour tout entier $$n$$, $$1+3+...+(2n-1) = n^2$$ ;

Pour n = 1 : $$n^2 = 1 = (2*n-1)$$.

On suppose la propriété vraie pour n. 

Prouvons-la pour n+1 : 

$$ 1 + 3 + .... + (2n-1) + (2(n+1) - 1) = n^2 + (2(n+1)-1) = n^2+ 2n + 2 - 1 = (n+1)^2 $$

CQFD

5. Pour tout entier $$n$$, $$\sum_{i=0}^n i^2 = (n(n + 1)(2n+1))/6$$ ;

Pour n = 0 : $$\sum_{i=0}^n i^2 = 0$$.

On suppose la propriété vraie pour n. 

Prouvons-la pour n+1 : 
$$\sum_{i=0}^{n+1} i^2 = \sum_{i=0}^n i + (n+1)^2 =  \frac{n(n + 1)(2n+1)}{6} + (n+1)^2 =   \frac{n(n + 1)(2n+1) + 6*(n+1)^2}{6} =  
 \frac{(n + 1)(n(2n+1) + 6*(n+1))}{6} = \frac{(n + 1)(2n^2 +n + 6n +6))}{6}.= \frac{(n + 1)(n+2)(2(n+1)+1)}{6}.$$
CQFD


## Suites récurrentes

1. Pour tout entier $$n$$, $$\sum_{i=0}^n F(i) = F(n+2) - 1 $$ ;

Pour n = 0 : $$\sum_{i=0}^0 F(i) = 0 et F(2) = 1, donc F(0+2) - 1 = 0$$.

On suppose la propriété vraie pour n. 

Prouvons-la pour n+1 : 
$$\sum_{i=0}^{n+1} F(i) = \sum_{i=0}^n F(i) + F(n+1) = F(n+2) - 1  F(n+1) =$$

$$ F(n+3) - 1 $$

CQFD

2. Pour tout entier $$n$$, $$\sum_{i=0}^n F(i)^2 = F(n)F(n+1)$$ ;

Pour n = 0 : $$\sum_{i=0}^0 F(i)^2 = 0 et F(0) = 0, donc F(0)F(1)= 0$$.

On suppose la propriété vraie pour n. 

Prouvons-la pour n+1 : 
$$\sum_{i=0}^{n+1} F(i)^2 = \sum_{i=0}^n F(i)^2 + F(n+1)^2 = F(n)F(n+1) + F(n+1)^2 =$$

$$ F(n+1)(F(n) + F(n+1)) = F(n+1)F(n+2)$$

CQFD


# Important

Cette correction est là pour vous aider à vous entraîner.
Les réponses ne sont pas détaillées, mais **vos réponses en examen doivent être détaillées, vous devez expliquer la façon dont vous êtes arrivés au résultat**.


