// @ts-check
import { test, expect } from '@playwright/test';
// @ts-ignore
const { default: loginActions } = require('../tests/pmo/object/loginActions');

test('Login with PMO', async ({ page }) => {
    const loginObj = new loginActions(page);
    await loginObj.goto();
    await loginObj.InputLogin();
});