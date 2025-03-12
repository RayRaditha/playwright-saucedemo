import checkoutPage from "../locator/checkoutPage";
import { expect } from "@playwright/test";

export default class checkoutActions {
    /**
     * 
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.checkoutPage = new checkoutPage();
        this.sortItem = page.locator(this.checkoutPage.sortItem);
        this.priceItem = page.locator(this.checkoutPage.priceItem);
        this.itemName = page.locator(this.checkoutPage.itemName);
        this.addToCart = page.locator(this.checkoutPage.addToCart);
        this.shopCart = page.locator(this.checkoutPage.shopCart);
        this.checkOut = page.locator(this.checkoutPage.checkOut);
        this.firstName = page.locator(this.checkoutPage.firstName);
        this.lastName = page.locator(this.checkoutPage.lastName);
        this.postalCode = page.locator(this.checkoutPage.postalCode);
        this.continueButton = page.locator(this.checkoutPage.continueButton);
        this.finishButton = page.locator(this.checkoutPage.finishButton);
        this.removeButton = page.locator(this.checkoutPage.removeButton);
        this.continueShop = page.locator(this.checkoutPage.continueShop);
    }

    async CheckoutItem() {
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

    async RemoveItem() {
        await this.addToCart.click();
        await this.shopCart.click();
        await this.removeButton.click();
        await this.continueShop.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }

    async SortItemLowToHigh() {
        await this.sortItem.selectOption('lohi');
        // Get all price
        const prices = await this.priceItem.allTextContents();
        // Convert Prices to numbers
        const conPrices = prices.map(price => parseFloat(price.replace('$', '')));
        // Validate in Ascending Order
        expect(conPrices).toEqual([...conPrices].sort((a,b) => a - b));
    }

    async SortItemHighToLow() {
        await this.sortItem.selectOption('hilo');
        const prices = await this.priceItem.allTextContents();
        const conPrices = prices.map(price => parseFloat(price.replace('$', '')));
        expect(conPrices).toEqual([...conPrices].sort((a,b) => b - a));
    }

    async SortItemAtoZ() {
        await this.sortItem.selectOption('az');
        // Get All Item Names
        const itemNames = await this.itemName.allTextContents();
        // Validate Name is A to Z
        expect(itemNames).toEqual([...itemNames].sort());
    }
    
    async SortItemZtoA() {
        await this.sortItem.selectOption('za');
        const itemNames = await this.itemName.allTextContents();
        expect(itemNames).toEqual([...itemNames].sort((a,b) => b.localeCompare(a)));
    }
}