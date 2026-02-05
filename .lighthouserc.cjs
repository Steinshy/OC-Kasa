module.exports = {
  ci: {
    collect: {
      url: ['https://steinshy.github.io/OC-Kasa/'],
      numberOfRuns: 3,
      settings: {
        throttlingMethod: 'devtools',
        maxWaitForLoad: 90000,
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'first-contentful-paint': [
          'error',
          { maxNumericValue: 2000, aggregationMethod: 'optimistic' },
        ],
        'largest-contentful-paint': [
          'error',
          { maxNumericValue: 2500, aggregationMethod: 'optimistic' },
        ],
        'cumulative-layout-shift': [
          'error',
          { maxNumericValue: 0.1, aggregationMethod: 'optimistic' },
        ],
        'total-blocking-time': [
          'error',
          { maxNumericValue: 300, aggregationMethod: 'optimistic' },
        ],
        'speed-index': [
          'error',
          { maxNumericValue: 3000, aggregationMethod: 'optimistic' },
        ],
        'interactive': [
          'error',
          { maxNumericValue: 3800, aggregationMethod: 'optimistic' },
        ],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
