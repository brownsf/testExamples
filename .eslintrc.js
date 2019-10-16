module.exports = {
  extends: ['airbnb', 'plugin:cypress/recommended'],
  plugins: ['jest'],
  env: {
    jest: true,
  },
  rules:{
      "react/jsx-filename-extension":0
  }
};
