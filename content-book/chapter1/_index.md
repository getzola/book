+++
title = "Introduction"
weight = 1
sort_by = "weight"
insert_anchor_links = "right"
+++

A theme based on [Gitbook](https://www.gitbook.com/), to write documentation or books.
<!-- more -->

Book will generate a book from the files you place in the `content` directory.  Your book
can have two levels of hierarchy: chapters and subchapters.

Each chapter should be a `section` within the Gutenberg site and should have an `_index.md`
file that sets its `weight` front-matter variable to its chapter number. For example,
chapter 2 should have `weight = 2`. Additionally, each chapter should also set the
`sort_by = "weight"` in its front matter.

Each subchapter should be a `page` and should have its `weight` variable set to the subchapter
number. For example, subchapter 3.4 should have `weight = 4`.

Finally, you should create an `_index.md` file and set the `redirect_to` front-matter variable
to redirect to the first section of your content. For example, if your first section has the
slug `introduction`, then you would set `redirect_to = "introduction"`.
