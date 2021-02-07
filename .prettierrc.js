module.exports = {
  singleQuote: false,
  trailingComma: 'all',
  printWidth: 80,
  proseWrap: 'always',
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  semi: true,
  arrowParens: 'avoid',
  plugins:["prettier-plugin-svelte"],
  overrides: [
    {
      files: ['.svelte'],
      options: {
        svelteSortOrder: 'scripts-markup-styles',
      },
    },
    {
      files: [
        '.prettierrc',
        '.eslintrc',
        '.babelrc',
        '.tern-project',
        '.stylelintrc',
        '.lighthouserc',
      ],
      options: {
        parser: 'json',
      },
    },
    {
      files: ['package.json'],
      options: {
        printWidth: 180,
      },
    },
  ],
};
