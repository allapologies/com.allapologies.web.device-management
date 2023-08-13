import { test, expect } from '@playwright/test';

import { devices } from '../src/service/mocks';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page).toHaveTitle(/device management/i);
});

test('displays existing devices', async ({ page }) => {
  // mock the response from the server
  await page.route('**/devices', async (route) => {
    await route.fulfill({ json: { devices } });
  });

  await page.goto('http://localhost:5173/');

  const table = page.locator('table');
  const tbody = table.locator('tbody');

  expect(await tbody.locator('tr').count()).toBe(devices.length);
});
