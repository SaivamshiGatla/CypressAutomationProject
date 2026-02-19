/**
 * Global Utilities
 * Helper functions for test execution
 */

/**
 * Wait for element to be visible and clickable
 * @param {string} selector - Element selector
 * @param {number} timeout - Timeout in milliseconds
 */
export const waitForElementAndClick = (selector, timeout = 5000) => {
  cy.get(selector, { timeout }).should('be.visible').click();
};

/**
 * Type text in input field with clear
 * @param {string} selector - Element selector
 * @param {string} text - Text to type
 */
export const typeText = (selector, text) => {
  cy.get(selector).clear().type(text, { delay: 50 });
};

/**
 * Verify element contains text
 * @param {string} selector - Element selector
 * @param {string} text - Text to verify
 */
export const verifyElementContainsText = (selector, text) => {
  cy.get(selector).should('contain', text);
};

/**
 * Verify element is visible
 * @param {string} selector - Element selector
 */
export const verifyElementVisible = (selector) => {
  cy.get(selector).should('be.visible');
};

/**
 * Verify element is not visible
 * @param {string} selector - Element selector
 */
export const verifyElementNotVisible = (selector) => {
  cy.get(selector).should('not.be.visible');
};

/**
 * Wait for specified time
 * @param {number} time - Time in milliseconds
 */
export const waitForTime = (time) => {
  cy.wait(time);
};

/**
 * Get current URL
 */
export const getCurrentUrl = () => {
  return cy.url();
};

/**
 * Navigate to specific URL
 * @param {string} url - URL to navigate
 */
export const navigateToUrl = (url) => {
  cy.visit(url);
};

/**
 * Scroll to element
 * @param {string} selector - Element selector
 */
export const scrollToElement = (selector) => {
  cy.get(selector).scrollIntoView();
};

/**
 * Scroll to top of page
 */
export const scrollToTop = () => {
  cy.scrollTo('top');
};

/**
 * Scroll to bottom of page
 */
export const scrollToBottom = () => {
  cy.scrollTo('bottom');
};

/**
 * Get element text
 * @param {string} selector - Element selector
 */
export const getElementText = (selector) => {
  return cy.get(selector).invoke('text');
};

/**
 * Count elements
 * @param {string} selector - Element selector
 */
export const countElements = (selector) => {
  return cy.get(selector).then($elements => {
    return $elements.length;
  });
};

/**
 * Check if element exists
 * @param {string} selector - Element selector
 */
export const elementExists = (selector) => {
  return cy.get(selector).then($element => {
    return $element.length > 0;
  });
};

/**
 * Double click element
 * @param {string} selector - Element selector
 */
export const doubleClickElement = (selector) => {
  cy.get(selector).dblclick();
};

/**
 * Right click element
 * @param {string} selector - Element selector
 */
export const rightClickElement = (selector) => {
  cy.get(selector).rightclick();
};

/**
 * Hover over element
 * @param {string} selector - Element selector
 */
export const hoverElement = (selector) => {
  cy.get(selector).trigger('mouseover');
};

/**
 * Focus on element
 * @param {string} selector - Element selector
 */
export const focusElement = (selector) => {
  cy.get(selector).focus();
};

/**
 * Get attribute value
 * @param {string} selector - Element selector
 * @param {string} attribute - Attribute name
 */
export const getAttributeValue = (selector, attribute) => {
  return cy.get(selector).invoke('attr', attribute);
};

/**
 * Set input value
 * @param {string} selector - Element selector
 * @param {*} value - Value to set
 */
export const setInputValue = (selector, value) => {
  cy.get(selector).invoke('val', value).trigger('change');
};

export default {
  waitForElementAndClick,
  typeText,
  verifyElementContainsText,
  verifyElementVisible,
  verifyElementNotVisible,
  waitForTime,
  getCurrentUrl,
  navigateToUrl,
  scrollToElement,
  scrollToTop,
  scrollToBottom,
  getElementText,
  countElements,
  elementExists,
  doubleClickElement,
  rightClickElement,
  hoverElement,
  focusElement,
  getAttributeValue,
  setInputValue,
};
