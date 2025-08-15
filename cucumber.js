module.exports = {
  default: {
    require: ['steps/ecom.ts'],
    requireModule: ['ts-node/register'],
    paths: ['/features/ecom.feature'],
    format: [
      'summary',
      'progress-bar',
      'json:reports/cucumber.json'
    ],
    //publishQuiet: true,
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