module.exports = {
  testEnvironment: "jsdom-thirteen",
  setupFilesAfterEnv: [
    "./test/react-polyfill.js",
  ],
  moduleNameMapper: {
    "^react$": require.resolve("react"),
    "^react-dom$": require.resolve("react-dom"),
  },
  transform: {
    "^.+\\.(jsx?|tsx?)$": "babel-jest",
  },
  transformIgnorePatterns: []
}
