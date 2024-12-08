module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    // ... other configs, if any
    [
      // Using module resolver for path aliasing
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@lib': ['./lib'],
          '@screens': ['./src/screens'],
          '@assets': ['./assets'],
        },
      },
    ],

    // ... other configs, if any
  ],
};
