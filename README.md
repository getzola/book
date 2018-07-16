# book

A theme based on [Gitbook](https://www.gitbook.com), to write documentation
or books.

![book screenshot](https://github.com/Keats/book/blob/master/screenshot.png?raw=true)


## Contents

- [Installation](#installation)
- [Options](#options)
  - [Numbered chapters](#numbered-chapters)

## Installation
First download this theme to your `themes` directory:

```bash
$ cd themes
$ git clone https://github.com/Keats/book.git
```
and then enable it in your `config.toml`:

```toml
theme = "book"
```

## Usage
To ensure that each page displays in the correct order, you should set the front-matter
variables `order` and `weight` both to be equal to the page's position within its 
subsection.  For example, section 4 and section 2.4 should both have a weight/order of
4.

Additionally, you should set the front-matter variable `sort_by = "order"` in any 
section your create.

Finally, you should create an `_index.md` file and (in addition to setting `sort_by = 
"order"`) set the `redirect_to` front-matter variable to redirect to the first section
of your content.  For example, if your first section has the slug `introduction`, then
you would set `redirect_to = "introduction"`.

## Options

### Numbered chapters
By default, the `book` theme will number the chapters and pages in the left menu.
You can disable that by setting the `book_numbered_chapters` in `extra`:

```toml
book_numbered_chapters = false
```
