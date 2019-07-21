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
    "endOfLine": "auto"
  }
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
