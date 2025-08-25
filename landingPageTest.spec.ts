import { test, expect } from '@playwright/test';
import { landingPage } from '../pages/landingPage';

const { baseUrl, pageTitle, emailElement, passwordElement, submitButton } = landingPage;

test('Test Evolv.me Landing Page Elements', async ({ page }) => {
    await page.goto(baseUrl);

    // Check if the page title is correct
    await expect(page).toHaveTitle(pageTitle);

    // Check if the email input field is visible
    await expect(page.locator(emailElement)).toBeVisible();

    // Check if the password input field is visible
    await expect(page.locator(passwordElement)).toBeVisible();

    // Check if the submit button is visible
    await expect(page.locator(submitButton)).toBeVisible();

    await page.screenshot({ path: 'playwright-report/landingPageReport/screenshot.png', fullPage: true });
});