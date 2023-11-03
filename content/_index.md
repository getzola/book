---
title: index
# insert_anchor_links: right
redirect_to: getting-started/overview
---

## An easy way to create a document library for your project

This theme for [Zola](https://getzola.org) (static site engine) helps you build and publish your project docs easily and fast. Zola is just one binary that outputs html-pages and additional static assets after building your docs written in Markdown. Thus, you can take the theme, your md-files, Zola and gain flexible and simple website for documentation.

### Step-by-step

1. Fork the repo and replace demo-content inside content folder with yours. But take a look to _index.md files. It contains `title` and when you want to have anchor right of your headers add `insert_anchor_links = "right"` to each index. `theme.toml`, screenshot and readme may be deleted too.
2. Inside `config.toml` change URL and title on your own. In extra section you can specify path to your GitHub API for version below the logo on nav, favicon and logo itself. Or just remove the lines if you don't need it. Also, you can configure or turn on some additional settings related to Zola. [Specification is here](https://www.getzola.org/documentation/getting-started/configuration/).
3. In sass/_variables.scss you may change font, color or backgound if you want.
4. Almost done. Now, you should decide how you want to build and where will be hosted your website. You can build it locally and upload to somewhere. Or build in GitHub Actions and host on GitHub Pages / Netlify / CloudFlare Pages / AnyS3CloudStorage. [Howto for GitHub Pages](https://www.getzola.org/documentation/deployment/github-pages/).

Enjoy your docs!
