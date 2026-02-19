/**
 * Cleanup Script
 * Removes old reports and screenshots
 */

const fs = require('fs');
const path = require('path');

const reportDir = path.join(__dirname, '../cypress/reports/');
const screenshotDir = path.join(__dirname, '../cypress/screenshots/');
const videoDir = path.join(__dirname, '../cypress/videos/');

function deleteDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        deleteDirectory(filePath);
      } else {
        fs.unlinkSync(filePath);
      }
    });
    fs.rmdirSync(dirPath);
    console.log(`✓ Deleted: ${dirPath}`);
  }
}

console.log('Cleaning up old reports...');

try {
  // Delete mochawesome directory but keep reports folder structure
  const mochawesomeDir = path.join(reportDir, 'mochawesome');
  if (fs.existsSync(mochawesomeDir)) {
    const files = fs.readdirSync(mochawesomeDir);
    files.forEach((file) => {
      const filePath = path.join(mochawesomeDir, file);
      if (fs.lstatSync(filePath).isFile()) {
        fs.unlinkSync(filePath);
      }
    });
    console.log('✓ Cleaned mochawesome reports');
  }

  // Delete old screenshots
  deleteDirectory(screenshotDir);

  // Delete old videos (optional - comment out if needed)
  // deleteDirectory(videoDir);

  console.log('✓ Cleanup completed successfully');
} catch (error) {
  console.error('✗ Error during cleanup:', error);
  process.exit(1);
}
