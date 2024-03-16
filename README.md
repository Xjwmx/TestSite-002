# Welcome to Austinmueck.com

** Technologies **

- Node.js
- Astro.js
  - Pages
  - Basic Components
- Astro DB
  - TO DO
- Typscript
  - Used When Nessesary
- React
  - Interactive Components
- SCSS
  - Global Styling (depreciated?)
- Stylelint

## TO DO

_ Clean up and re-factor where possible
_ Set Up Routes
_ Inteactivity
_ DB For Project Pages

## DEV SITE MAP (DEV)

├── public/
│ └── favicon.svg (To Do)
│ └── public_img/ - non-processed images
| └── images (To Do)
├── src/
│ └── assets/
│ | | | └── styles/
│ | | | └── cursor.css --Cursor Styles
│ | | | └── Root.css --Re-factor global Styles
│ | | └── img_projects/
│ | | | └── img.jpg
│ | | └── js/
│ | | | └── inline-vanilla.js
│ └── components/
│ | └── Nav.astro --Global Navigation
| | └── Footer.astro --Global Footer
| | └── Social.astro --Animated Social Icons
| | └── MouseEffect.jsx --React Comp. => cursor.js
| | └── Hero.astro -- Primary Block for Home
| | └── Projects.astro --project links (TD make dynamic)
| | └── Footer.astro --Global Footer
│ └── layouts/
│ | | └── Layout.astro --primary layout
│ └── pages/
| | └── brightroom.astro
| | └── brightroom.astro
| | └── brightroom.astro
| | └── brightroom.astro
| | └── brightroom.astro
│ └── index.astro --Home Page
│ └── 404.astro --I can't find it, sorry (TD)
|
└── package.json

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
