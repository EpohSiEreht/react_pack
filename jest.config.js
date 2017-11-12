module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.html', '!src/**/*.css', '!src/**/*.scss'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  moduleNameMapper: {
    '@(.*)$': '<rootDir>/src/$1',
  },
};
