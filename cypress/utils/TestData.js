/**
 * Test Data Utilities
 * Generate and manage test data
 */

/**
 * Generate random email
 * @returns {string} Random email
 */
export const generateRandomEmail = () => {
  const timestamp = Date.now();
  return `testuser${timestamp}@orangehrm.com`;
};

/**
 * Generate random user name
 * @returns {string} Random username
 */
export const generateRandomUsername = () => {
  const timestamp = Date.now();
  return `testuser${timestamp}`;
};

/**
 * Generate random phone number
 * @returns {string} Random phone number
 */
export const generateRandomPhone = () => {
  return '+1' + Math.floor(Math.random() * 9000000000 + 1000000000);
};

/**
 * Get current date in YYYY-MM-DD format
 * @returns {string} Current date
 */
export const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

/**
 * Get future date in YYYY-MM-DD format
 * @param {number} daysFromNow - Number of days from now
 * @returns {string} Future date
 */
export const getFutureDate = (daysFromNow = 7) => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + daysFromNow);
  return futureDate.toISOString().split('T')[0];
};

/**
 * Get past date in YYYY-MM-DD format
 * @param {number} daysAgo - Number of days from now
 * @returns {string} Past date
 */
export const getPastDate = (daysAgo = 7) => {
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - daysAgo);
  return pastDate.toISOString().split('T')[0];
};

/**
 * Get random employee ID
 * @returns {string} Random employee ID
 */
export const getRandomEmployeeId = () => {
  return Math.floor(Math.random() * 9000 + 1000).toString();
};

/**
 * Get test data object
 * @returns {Object} Test data
 */
export const getTestData = () => {
  return {
    adminUsername: 'admin',
    adminPassword: 'admin123',
    validEmail: generateRandomEmail(),
    validUsername: generateRandomUsername(),
    validPhone: generateRandomPhone(),
    validFirstName: 'Test',
    validLastName: 'User',
    validJobTitle: 'QA Engineer',
    validDepartment: 'Engineering',
    currentDate: getCurrentDate(),
    futureDate: getFutureDate(7),
    pastDate: getPastDate(7),
  };
};

/**
 * Login credentials
 */
export const credentials = {
  admin: {
    username: 'admin',
    password: 'admin123',
  },
};

/**
 * Common test data
 */
export const commonData = {
  leaveTypes: ['Casual', 'Medical', 'Annual', 'Sick'],
  departments: ['Engineering', 'Sales', 'HR', 'Finance'],
  jobTitles: ['QA Engineer', 'Developer', 'Manager', 'Analyst'],
  employmentStatuses: ['Full-Time', 'Part-Time', 'Contract', 'Freelance'],
  performance: ['Below Expectations', 'Meets Expectations', 'Exceeds Expectations'],
};

export default {
  generateRandomEmail,
  generateRandomUsername,
  generateRandomPhone,
  getCurrentDate,
  getFutureDate,
  getPastDate,
  getRandomEmployeeId,
  getTestData,
  credentials,
  commonData,
};
