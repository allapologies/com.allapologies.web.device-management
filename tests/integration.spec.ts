import { test, expect } from '@playwright/test';

import { devices } from '../src/service/mocks';

const HOST = 'http://localhost:5173';

test('has title', async ({ page }) => {
  await page.goto(HOST);

  await expect(page).toHaveTitle(/device management/i);
});

test('displays existing devices', async ({ page }) => {
  // mock the response from the server
  await page.route('**/devices', async (route) => {
    await route.fulfill({ json: { devices } });
  });

  await page.goto(HOST);

  await expect(page.locator('table tbody tr')).toHaveCount(devices.length);
});

test('creates a device', async ({ page }) => {
  await page.route('**/devices', async (route) => {
    await route.fulfill({ json: { devices } });
  });

  await page.goto(HOST);

  // click add device button
  await page.getByRole('button', { name: /add device/ }).click();

  await page.getByLabel(/name/i).fill('Test Device');
  await page.getByLabel(/owner/i).fill('Test Owner');
  await page.getByLabel(/type/i).click();
  await page.getByRole('option', { name: 'smartphone' }).click();
  await page.getByLabel(/battery status/i).fill('99');

  await page.getByRole('button', { name: /save/ }).click();
});
