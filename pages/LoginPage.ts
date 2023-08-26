import { Page } from "@playwright/test";
import User from "../Models/User";


export default class LoginPage {
    async load(page: Page) {
        await page.goto('/login');
    }

    private get emailInput() {
        return `[data-testid='email']`;
    }
    private get passwordInput() {
        return `[data-testid='password']`;
    }
    private get submitBtn() {
        return `[data-testid='submit']`;
    }

    async login(page: Page, user: User) {
        await page.type(this.emailInput, user.getEmail());
        await page.type(this.passwordInput, user.getPassword());
        await page.click(this.submitBtn);
    }
}