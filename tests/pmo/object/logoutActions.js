import logoutPage from "../locator/logoutPage";
import { expect } from "@playwright/test";

export default class logoutActions {
    /**
     * 
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.logoutPage = new logoutPage();
        this.hamburgerMenu = page.locator(this.logoutPage.hamburgerMenu);
        this.logoutButton = page.locator(this.logoutPage.logoutButton);
    }

    async Logout() {
        await this.hamburgerMenu.click();
        await expect(this.logoutButton).toBeVisible();
        await this.logoutButton.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/');
    }
}