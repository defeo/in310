---
name: style_goodies
links:
  - href: goodies.css
layout: default
title: Style goodies
addons:
  style_goodies: yes
---

# Style goodies

This addon enables some useful styles for classrooms. Activate with

~~~
addons:
  style_goodies: yes
~~~

Features are listed below.

## Numbered sections

Second level sections (`<h2>` in Html, or `##` in Markdown) become
numbered (like in this page).

## Numberd exercises

A class `.exercise` for numbered exercises. The Markdown code

~~~
### – One plus one
{:.exercise}

Prove that 1 + 1 = 2.
~~~

Generates the following layout:

> ### – One plus one
> {:.exercise}
>
> Prove that 1 + 1 = 2.
{: style="padding-left:2em"}

While the Markdown code

~~~
**–**{:.exercise} Prove that 1 + 1 ≠ 2.
~~~

generates:

**–**{:.exercise} Prove that 1 + 1 ≠ 2.
{: style="padding-left:2em"}


## Centered style

A very simple `.centered` class, centering both inline text and blocks (i.e., tables).
{:.centered}


## Citations

> The `.cite` class puts citations in italic, and adds quotes to block quotes.
{:.cite}

## Prettier tables

The class `.pretty` adds:

- vertical separators,
- header separator,
- bold headers, and
- alternate row gray background

to tables.

| aa | b | c
|-
| a | bb | c
| a | b | cc
{:.pretty}

