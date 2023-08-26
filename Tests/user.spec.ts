import { test, expect, type Page } from '@playwright/test';
import User from '../Models/User';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import TodoPage from '../pages/TodoPage';

test("should be able to register to our app", async ({page}) => {
    
    const user = new User();

    const signupPage = new SignupPage();
    await signupPage.load(page);
    await signupPage.signup(page, user);

    const todoPage = new TodoPage();
    const welcomeMessage = todoPage.getWelcomeMessageElement(page);

    await expect(welcomeMessage).toBeVisible();
})

test("should be able to log in",async ({page}) => {

    const user = new User();
    const loginPage = new LoginPage();
    const signupPage = new SignupPage();
    await signupPage.load(page);
    await signupPage.signup(page, user);
    await loginPage.load(page);
    await loginPage.login(page, user);

    const todoPage = new TodoPage();
    const welcomeMessage = todoPage.getWelcomeMessageElement(page);

    await expect(welcomeMessage).toBeVisible();

})