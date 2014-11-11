---
layout: index
---

# How to use/edit this site

This is a
[*static website*](http://en.wikipedia.org/wiki/Static_web_page)
automatically generated with [Jekyll](http://jekyllrb.com/) by
[GitHub Pages](http://pages.github.com/). The source code is
[available on GitHub]({{ site.github.repository_url }}) and you are
free to copy it, modify it and share it under the terms of the
[Creative Commons 4.0 BY-SA license](http://creativecommons.org/licenses/by-sa/4.0/deed.en_GB).

You are a student, a collaborator, or a casual visitor to this site
and want to learn how to take advantage of the
[freedom offered to you by the CC license](https://creativecommons.org/about),
this help page is for you!


## Quickly editing pages for collaborators

You are a collaborator of mine, and have
[write access](https://help.github.com/articles/what-are-the-different-access-permissions/)
to [the GitHub repository]({{site.github.repository_url}}), you can
make quick edits to any page by clicking on the **Quick edit** link
on top.

This will drop you in GitHub's file editing interface, where you can
modify the source code, preview it, and
[commit your changes](http://readwrite.com/2013/10/02/github-for-beginners-part-2)
by giving a short description of what you modified.

Most of the pages are written in
[Markdown](http://daringfireball.net/projects/markdown/), which is a
textual format for generating formatted text. Markdown syntax is very
intuitive, you can get a quick review
[here](https://help.github.com/articles/github-flavored-markdown/) or
[here](http://kramdown.gettalong.org/syntax.html).

**CAVEATS:** The Markdown engine used by this site is
[Kramdown](http://kramdown.gettalong.org/). Its syntax definitions are
slightly different form
[GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/),
thus the preview feature in GitHub might not render source as in the
final result.

Other reasons why GitHub's preview may not correspond to the final
results are:

- Use of
  [Liquid templates](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
  in the source. This is seldom used, but some pages (like
  [this one]({{ site.github.zip_url | replace: 'zipball', 'blob' }}/{{ page.path }}))
  use them to access site-wide configuration variables.
- Use of special purpose markup, HTML, and scripts, such as
  mathematical excerpts written in [MathJax](http://mathjax.org/).
  

## Copying the site for your own use

You want to get a copy of the website and its source code to analyze
it, or because you are afraid that I might take it down someday, this
is very easily done, even if you're not (yet!) the technical type.

All you need is a [GitHub account](http://github.com/). Once your
account is setup,
[forking the repository]({{site.github.repository_url}}/fork) will
create your own copy in your GitHub account.

Now you can make changes to your own copy of the site. Edit some
files, commit the changes, and examine the result. The compiled static
site will be served at
**http://*username*.github.io/{{site.github.project_title}}** (replace
*username* by your GitHub user name).

**Note:** the website will not be compiled when you first fork the
repository. If you want your fork to be served on **github.io** before
committing any changes, you will have to
[create a local clone](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork)
of your fork, then
[push](https://help.github.com/articles/pushing-to-a-remote/). This
will not create any new commit, but will force GitHub to compile your
copy of the site. In a Unix shell, this is

~~~
git clone git@github.com:username/{{ site.github.project_title }}.git
cd {{ site.github.project_title }}
git push
~~~


## Contributing your changes back to this site

You have forked the repository, made your changes, and now want to
contribute them back to the site, but you do not have write access.

[Pull requests](https://help.github.com/articles/using-pull-requests/)
are GitHub's standard way of contributing changes back to the original
repository.  You can
[make a pull request for this repository]({{site.github.repository_url}}/compare),
and I will be happy to review your changes and integrate them.


## Working locally

You want to do more than the occasional typo fix, or you want to
deeply modify the code to make your own site. GitHub's editor and
preview are too limited for this, and handling git history via
GitHub's web interface becomes too clumsy at this point. You need to
work locally on your computer.

All you need to work locally is a [Git client](http://git-scm.com/).
[Clone the repository](https://help.github.com/articles/fork-a-repo/#step-2-create-a-local-clone-of-your-fork)
and start coding right away.

At some point, you will need to preview your work, but pushing to
GitHub each time you want to preview is clumsy. Your best option is to
[install Jekyll and the required dependencies](https://help.github.com/articles/using-jekyll-with-pages/#installing-jekyll)
on your machine. It is recommended to install the
[GitHub pages gem](https://github.com/github/pages-gem) which provides
you with the exact same versions used by GitHub to compile your site.

If you already have Ruby `>1.9.3`, the install part should be as easy as

~~~
gem install github-pages
~~~

Note that you will need Ruby headers (`ruby-dev` package on Ubuntu) in
order to compile C dependencies.

Now you can `cd` into your local clone of the repository and launch
the compilation by

~~~
jekyll serve -w -b''
~~~

Your site will be generated in a `_site` sub-directory, and served
live at <http://localhost:4000/>. Any changes to the sources will
trigger an automatic recompilation!

Have fun coding!

**Note:** you will notice that the source for the site is in a branch
mysteriously called `gh-pages`. If you are familiar with Git, this
will surprise you as the usual branch name for Git repositories is
`master`. This special name is where all the GitHub pages magic comes
from: name your branch `gh-pages`, and GitHub will automatically
compile it when you push.


## Using the template

I maintain an empty Jekyll template at
<https://github.com/defeo/class-boilerplate/>.  If you have a look at
the [history graph]({{site.github.repository_url}}/network), you will
notice that it is often merged to this project.

You can start from there to create your own site. Beware that some of
the features of this site may be experimental and not integrated in
the template.
