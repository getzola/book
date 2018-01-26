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

## Options

### Numbered chapters
By default, the `book` theme will number the chapters and pages in the left menu.
You can disable that by setting the `book_numbered_chapters` in `extra`:

```toml
book_numbered_chapters = false
```
