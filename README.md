# [descioli.design](https://descioli.design)

## What it's made with

* A whole lot of ~~JavaScript~~ [TypeScript](https://www.typescriptlang.org/)
* [React](https://github.com/facebook/react) to declare the UI
* [Emotion](https://github.com/emotion-js/emotion) to define the styles
* [MDX](https://github.com/mdx-js/mdx) to author the content
* [Gatsby](https://github.com/gatsbyjs/gatsby) for the tooling, including a wonderful [GraphQL](http://graphql.org/) data layer
* [Netlify](https://www.netlify.com/) for hosting because it's simple, implements a lot of best practices by default that make serving your site super fast, and includes SSL and custom domains for free

## How it works

Gatsby pulls in data from the [`content`](./content) directory, as specified in the [`gatsby-config.js`](./gatsby-config.js) file. It builds a data graph with a defined GraphQL schema. It then renders the application as configured by `.js` files it finds in [`src/pages`](./src/pages), and calls to the `createPage` function as specified in [`gatsby-node.js`](./gatsby-node.js).

Pages are React components. A Page file's default export is a React component. Pages describe their needed data with a GraphQL query exported under the name `pageQuery`. Gatsby handles providing that data as the prop `data` to the component.

Gatsby is exellent because it makes it very easy to develop using a model-driven approach without needing more than simple files. (Not to mention how much messy configuration it simplifies for getting a super fast website and a sweet hot reloading development experience.)

## Installation

1. Get a working knowledge of computers and the command line
1. [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. [Install Node.js](https://nodejs.org/en/download/)
1. [Install Yarn](https://yarnpkg.com/en/docs/install) (or just use npm if you know what you're doing)
1. And then:

   ```sh
   git clone https://github.com/lourd/descioli-design
   cd descioli-design
   yarn install
   yarn start
   ```
