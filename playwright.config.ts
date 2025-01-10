import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Path to the tests directory
  timeout: 30000,      // Set a global timeout of 30 seconds for each test
  retries: 2,          // Retries on test failure
  reporter: 'list',    // Use a list reporter for better readability of test results

  use: {
    baseURL: 'https://petstore.swagger.io/v2',  // Base URL for the API
    extraHTTPHeaders: {
      'Content-Type': 'application/json',       // Common header for API requests
    },
    headless: true,      // Headless mode for running tests
    ignoreHTTPSErrors: true, // Handle any potential SSL issues
  },

  projects: [
    {
      name: 'Petstore-apitests',
      testMatch: '**/*.api.ts', // Match only API-specific test files
    },
  ],

  // Limit the number of parallel workers for API testing
  workers: 2,
});