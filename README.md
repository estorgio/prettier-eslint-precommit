# Setting up Prettier and ESLint with pre-commit hook

- Initialize Git repository
  ```bash
  git init
  ```
- Create `.gitignore` file and add the following:
  ```
  node_modules/
  *.env
  ```
- Create a `package.json` file with `npm init`
  ```bash
  npm init -y
  ```
- Install dev dependencies
  ```bash
  npm i -D prettier eslint husky lint-staged
  ```
- Initialize ESLint config
  ```bash
  npx eslint --init
  ```
- Create `.prettierrc` file and add the following rules:
  ```json
  {
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "quoteProps": "as-needed",
    "jsxSingleQuote": false,
    "trailingComma": "all",
    "bracketSpacing": true,
    "jsxBracketSameLine": true,
    "arrowParens": "avoid",
    "endOfLine": "lf"
  }
  ```
- Create `.prettierignore` and `.eslintignore` files and exclude third-party libraries.
  ```
  # Exclude third-party libraries
  node_modules/
  public/vendor/
  ```
- Open `package.json` file and add the following sections:
  ```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx}": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ],
    "*.{html,css,less,ejs}": [
      "prettier --write",
      "git add"
    ]
  }
  ```
- At this point, your pre-commit linting setup should be working and ready for use.

## Make your first commit

- Open `.eslintrc.js` file and add `no-console` rule under `rules` section.
  ```javascript
  module.exports = {
    ...
    rules: {
      'no-console': 'off',
    },
  };
  ```
- Add this sample `app.js` file:
  ```javascript
  console.log('one');
  var ww = process.env.NODE_ENV.trim.toLowerCase();
  if (ww === 'production') {
    console.log('Another one');
  } else {
    console.log('test');
  }
  ```
- Commit all files
  ```bash
  git add .
  git commit -m "Initial commit"
  ```
- If all goes well, your `app.js` should now be formatted properly :
  ```javascript
  console.log('one');
  const ww = process.env.NODE_ENV.trim.toLowerCase();
  if (ww === 'production') {
    console.log('Another one');
  } else {
    console.log('test');
  }
  ```

## Visual Studio Code integration

Aside from performing formatting and linting on commit, you can also install extensions on Visual Studio Code and perform these operations on every file save.

- Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions for Visual Studio Code.
- Open `settings.json` file and add these settings for Visual Studio Code:
  ```json
  {
    "editor.formatOnSave": true,
    "eslint.alwaysShowStatus": true,
    "prettier.eslintIntegration": true,
    "prettier.tslintIntegration": true,
    "prettier.printWidth": 80,
    "prettier.tabWidth": 2,
    "prettier.useTabs": false,
    "prettier.semi": true,
    "prettier.singleQuote": true,
    "prettier.quoteProps": "as-needed",
    "prettier.jsxSingleQuote": false,
    "prettier.trailingComma": "all",
    "prettier.bracketSpacing": true,
    "prettier.jsxBracketSameLine": true,
    "prettier.arrowParens": "avoid",
    "prettier.endOfLine": "lf"
  }
  ```
- Save the file. VSCode should now work with ESLint and Prettier.
