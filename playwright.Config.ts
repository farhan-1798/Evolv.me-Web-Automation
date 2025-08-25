import { defineConfig } from '@playwright/test';
import path from 'path';

// Create a unique timestamp for each run
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const reportDir = path.join(__dirname, 'test-reports', `report-${timestamp}`);

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: reportDir, open: 'always' }], // ✅ unique report per run
  ],
  workers: 3, // sequential for consistent reports
});
