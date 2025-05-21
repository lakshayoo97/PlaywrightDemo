module.exports = {
  default: {
    require: ['steps/login.ts'],
    requireModule: ['ts-node/register'],
    paths: ['//featureFile/login.feature'],
    format: [
      'summary',
      'progress-bar',
      'json:reports/cucumber.json'
    ],
    publishQuiet: true,
    tags: '@smoke',
    dryRun: false,
    formatOptions: {
      colorsEnabled: true,
      snippetInterface: 'async-await'
    },
    retry: 0,
    failFast: false,
    parallel: 0,
    defaultTimeout: 60000
  }
};