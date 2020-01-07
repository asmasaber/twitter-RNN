module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'App',
      },
    ],
    [
      require('@babel/plugin-proposal-decorators').default,
      {
        legacy: true,
      },
    ],
  ],
};
