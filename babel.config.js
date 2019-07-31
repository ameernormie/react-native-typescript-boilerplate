module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['ignite-ignore-reactotron'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.', 'App'],
        extensions: ['.ts', '.tsx', '.js', '.json', '.ios.tsx', '.android.tsx'],
      },
    ],
  ],
};
