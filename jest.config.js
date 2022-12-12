module.exports = {
  clearMocks: true,
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  setupFiles: ['<rootDir>/jest/setup.js', './node_modules/react-native-gesture-handler/jestSetup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/node_modules/react-native/Libraries/Image/RelativeImageStub',
  },
  preset: 'react-native',
  testPathIgnorePatterns: ['<rootDir>/dist'],
  transformIgnorePatterns: ['node_modules/(?!(@?react-native|@?react-navigation.*|@app*.))', '<rootDir>/dist'],
  // testResultsProcessor: './node_modules/jest-bamboo-formatter',
  resolver: null,
};
