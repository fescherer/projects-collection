module.exports = {
  extends: ["next/core-web-vitals", "next/typescript", "plugin:react/recommended", 'plugin:tailwindcss/recommended'],
  plugins: ["@stylistic"],
  rules: {
    '@stylistic/indent': ['error', 2],
    '@stylistic/jsx-self-closing-comp': ['error'],
    'react/button-has-type': ['error'],
    'react/react-in-jsx-scope': 'off',
  },
  "ignorePatterns": ["**/*.css","**/*.scss"]
}