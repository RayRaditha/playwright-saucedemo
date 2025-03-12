// @ts-check
import { test, expect } from '@playwright/test';
// @ts-ignore
const { default: loginActions } = require('../tests/pmo/object/loginActions');
const { default: checkoutActions } = require('../tests/pmo/object/checkoutActions');
const { default: logoutActions } = require('../tests/pmo/object/logoutActions');

test('Login User', async ({ page }) => {
    const loginObj = new loginActions(page);
    await loginObj.goto();
    await loginObj.InputLogin();
});

test('Invalid Login', async ({ page }) => {
    const loginObj = new loginActions(page);
    await loginObj.goto();
    await loginObj.LoginNegative();
});

test('Remove Item from Cart', async ({ page }) => {
    const loginObj = new loginActions(page);
    const checkoutObj = new checkoutActions(page);
    await loginObj.goto();
    await loginObj.InputLogin();
    await checkoutObj.RemoveItem();
});

test('Sort Item from Low to High', async ({ page }) => {
    const loginObj = new loginActions(page);
    const checkoutObj = new checkoutActions(page);
    await loginObj.goto();
    await loginObj.InputLogin();
    await checkoutObj.SortItemLowToHigh();
});

test('Sort Item from High to Low', async ({ page }) => {
    const loginObj = new loginActions(page);
    const checkoutObj = new checkoutActions(page);
    await loginObj.goto();
    await loginObj.InputLogin();
    await checkoutObj.SortItemHighToLow();
});

test('Sort Item from A to Z', async ({ page }) => {
    const loginObj = new loginActions(page);
    const checkoutObj = new checkoutActions(page);
    await loginObj.goto();
    await loginObj.InputLogin();
    await checkoutObj.SortItemAtoZ();
});

test('Sort Item from Z to A', async ({ page }) => {
    const loginObj = new loginActions(page);
    const checkoutObj = new checkoutActions(page);
    await loginObj.goto();
    await loginObj.InputLogin();
    await checkoutObj.SortItemZtoA();
});

test('Checkout Process', async ({ page }) => {
    const loginObj = new loginActions(page);
    const checkoutObj = new checkoutActions(page);
    await loginObj.goto();
    await loginObj.InputLogin();
    await checkoutObj.CheckoutItem();
});

test('Logout Process', async ({ page }) => {
    const loginObj = new loginActions(page);
    const logoutObj = new logoutActions(page);
    await loginObj.goto();
    await loginObj.InputLogin();
    await logoutObj.Logout();
});