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
        this.addToCart = page.locator(this.loginPage.addToCart);
        this.shopCart = page.locator(this.loginPage.shopCart);
        this.checkOut = page.locator(this.loginPage.checkOut);
        this.firstName = page.locator(this.loginPage.firstName);
        this.lastName = page.locator(this.loginPage.lastName);
        this.postalCode = page.locator(this.loginPage.postalCode);
        this.continueButton = page.locator(this.loginPage.continueButton);
        this.finishButton = page.locator(this.loginPage.finishButton);
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
        await this.addToCart.click();
        await this.shopCart.click();
        await this.checkOut.click();
        await this.firstName.fill('Putu');
        await expect(this.firstName).toHaveValue('Putu');
        await this.lastName.fill('Raditha');
        await expect(this.lastName).toHaveValue('Raditha');
        await this.postalCode.fill('35667');
        await expect(this.postalCode).toHaveValue('35667');
        await this.continueButton.click();
        await this.finishButton.click();
    }
}