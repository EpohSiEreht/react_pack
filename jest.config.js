module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  moduleNameMapper: {
    '@(.*)$': '<rootDir>/src/$1',
  },
};
