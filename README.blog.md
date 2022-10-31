## Contribute To Blogs 📃

Contributing to blogs is easy. Just follow the steps below:

### How to contribute to blogs 👀

1. Fork the repository
2. Create a new branch🌿
3. Add your blog post
   Create a blog within `.mdx` format with the following format:

   ```
   ---
   tags: <YOUR TAGS>
   title: <YOUR BLOG TITLE>
   body: <YOUR BLOG SMALL DESCRIPTION>
   author: <BLOG AUTHOR>
   date: <DATE OF PUBLISH IN FORMAT  YYYY-MM-DD>
   blogImage: /blogs/<BLOG SLUG>/<BLOG IMAGE>
   authorImage: /author/<AUTHOR IMAGE>
   blogslug: <BLOG SLUG>
   ---

   <BLOG CONTENT>

   ```

   For example:

   ```
   ---
   tags: python
   title: Decorators in Python
   body: Decorators are one of the most helpful and powerful tools of Python.
   author: Abhishek Kushwaha
   date: 2022-10-27
   blogImage: /blogs/decorator-in-python/blogimage.png
   authorImage: /author/abhishek-kushwaha.png
   blogslug: decorator-in-python
   ---
   ```

- `<BLOG CONTENT>` IS THE CONTENT OF YOUR BLOG IN MARKDOWN FORMAT.
- Add your blog image in the folder `public/blogs/<BLOG SLUG>/`
- Add your author image in the folder `public/author/`
- Add your blogs image in the folder`public/blogs/<BLOG SLUG>/` file

4. Commit and push your changes
5. Create a pull request

Will love to read your blogs and articles. 🤩

Supported Components:

- [x] Code Block
- [x] Image
- [x] YouTube

## CODE BLOCK:

- When adding a code block, add the language name after the first three backticks. For example:

```js
console.log('Hello World');
```

- js - JavaScript
- ts - TypeScript
- css - CSS
- html - HTML
- sh - Shell
- md - Markdown
- json - JSON
- py - Python
- rb - Ruby
- go - Go
- java - Java
- c - C
- cpp - C++
- cs - C#
- php - PHP
- swift - Swift
- bash - Bash
- yaml - YAML
- diff - Diff
- sql - SQL
- graphql - GraphQL
- mdx - MDX

## Image

our blogs supports image. To add an image, use the following syntax:

```md
<div align="center">
<Image src="<Path to that image>" heigth={Some Heigth} width={some Width}>
</div>
```

we are expecting a div wrapped in each image component for now :)

## YouTube

To add a YouTube video, use the following syntax:

```md
<YouTube id="<YouTube Video ID>" />
```

for example:

```md
Youtube url -> https://www.youtube.com/watch?v=2BDnl7WMhw4
<YouTube id="2BDnl7WMhw4" />
```

# Table of Contents

We automatically generate a table of contents for each blog post. To add a heading to the table of contents, add the following comment to the heading:

```md
<!-- toc -->
```
