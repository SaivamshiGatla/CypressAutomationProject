/**
 * Report Generation Script
 * Merges and generates mochawesome reports
 */

const fs = require('fs');
const path = require('path');
const marge = require('mochawesome-merge');
const opts = require('mochawesome-report-generator/options');

const reportDir = path.join(__dirname, '../cypress/reports/mochawesome/');
const outDir = path.join(__dirname, '../cypress/reports/mochawesome-report/');

// Ensure output directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const options = {
  files: [path.join(reportDir, '**/*.json')],
  reportDir: outDir,
  reportFileName: 'index.html',
  reportTitle: 'Orange HRM Automation Test Report',
  reportPageTitle: 'Test Execution Report',
  inline: false,
  charts: true,
  showPassed: true,
  showFailed: true,
  showPending: true,
  showSkipped: true,
  showHooks: 'failed',
  noScreenshots: false,
  timestamp: 'yyyy-mm-dd HH:MM:ss',
};

marge
  .create(options)
  .then(() => {
    console.log('✓ Report generated successfully at:', outDir);
    console.log('✓ Open the report at:', path.join(outDir, 'index.html'));
  })
  .catch((err) => {
    console.error('✗ Error generating report:', err);
    process.exit(1);
  });
