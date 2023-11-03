<p align="right">
  <img src="https://img.shields.io/github/languages/code-size/semanticdata/zola-book" />
  <img src="https://img.shields.io/github/repo-size/semanticdata/zola-book" />
  <img src="https://img.shields.io/github/commit-activity/t/semanticdata/zola-book" />
  <img src="https://img.shields.io/github/last-commit/semanticdata/zola-book" />
  <img src="https://img.shields.io/website/https/semanticdata.github.io/zola-book.svg" />
</p>

# Zola Book

A book theme for Zola inspired from GitBook/mdBook.

## Features and Improvements

* Menu is hidden by default when accessing the site from a mobile phone. I created PR [#25](https://github.com/getzola/book/pull/25) to address issue [#18](https://github.com/getzola/book/issues/18).
* Added `vercel.json`, and `netlify.toml` to help when deploying the site.
* Added additional options in the `config.toml`.
* Added meta GitHub items such as: workflows, git attributes, git ignore.
* Temporarily swapped the original contents with Zola's and Tera's Documentation.
* Removed custom synthax highlighting theme. Now uses `base16-ocean-light`.

## Requirements

Before using the theme, you need to install [Zola](https://www.getzola.org/documentation/getting-started/installation/) ≥ 0.17.2.

## Quick Start

```bash
git clone git@github.com:semanticdata/mabuya.git
cd mabuya
zola serve
# open http://127.0.0.1:1111/ in the browser
```

## Customization

You can changed the configuration, templates and content yourself. Refer to the `config.toml`, and templates files for an idea.

In most cases you only need to modify the contents of `config.toml` to
customize the appearance of your blog.

### Custom CSS Styles

Adding custom CSS is as easy as adding your styles to `sass/_custom.scss. This is made possible because SCSS files are backwards compatible with CSS3. This means you can type normal CSS code into a SCSS file and it will be valid.

## Useful Commands

A short list of commands that will help you develop your own version of the theme.

| Command                    | Description                |
| -------------------------- | -------------------------- |
| `zola build`               | Build only                 |
| `zola serve`               | Build and Serve            |

## Reporting Issues

We use GitHub Issues as the official bug tracker for **Mabuya**. Please
search [existing issues](https://github.com/semanticdata/mabuya/issues). It’s
possible someone has already reported the same problem.

If your problem or idea is not addressed yet, [open a new issue](https://github.com/semanticdata/mabuya/issues/new).

## Contributing

We'd love your help! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) to learn
about the kinds of contributions we're looking for.

## Acknowledgements and Attributions

Mabuya is a fork of [Tale](https://github.com/aaranxu/tale-zola), which is a port of the Jekyll theme [Tale](https://github.com/chesterhow/tale).

The icons used throughout the site are kindly provided by [UXWing](https://uxwing.com/license/). Pay them a visit, maybe you'll get inspired and what not.

## License

Source code in this repository is available under the [MIT](LICENSE) license. You are free to use this code however you see fit. That said, some acknowledgement would be well received.
