module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['.'],
        extensions: ['.ts', '.tsx', '.ios.tsx', '.android.tsx'],
      },
    ],
  ],
};
