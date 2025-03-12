import loginPage from "../locator/loginPage";
import { expect } from "@playwright/test";

export default class loginActions {
    /**
     * 
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.loginPage = new loginPage();
        this.inputUsername = page.locator(this.loginPage.inputUsername);
        this.inputPassword = page.locator(this.loginPage.inputPassword);
        this.clickButtonLogin = page.locator(this.loginPage.clickButton);
        this.errorMessage = page.locator(this.loginPage.errorMessage);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async InputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButtonLogin.click();
    }

    async LoginNegative () {
        await this.inputUsername.fill('testing');
        await expect(this.inputUsername).toHaveValue('testing');
        await this.inputPassword.fill('testing123');
        await expect(this.inputPassword).toHaveValue('testing123');
        await this.clickButtonLogin.click();
        await expect(this.errorMessage).toBeVisible();
    }
}