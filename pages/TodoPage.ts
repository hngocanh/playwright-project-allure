import { Page } from "@playwright/test";


export default class TodoPage{

    private get welcomeMessage() {
        return `[data-testid=welcome]`;
    }

    private get deleteIcon() {
        return `[data-testid='delete']`;
    }

    private get noTodoMessage() {
        return '[data-testid="no-todos"]';
    }

    private get todoItem() {
        return `[data-testid="todo-item"]`;
    }

    async load(page: Page) {
        await page.goto('/todo/new');
    }

    getWelcomeMessageElement(page: Page) {
        return page.locator(this.welcomeMessage);
    }

    async deleteTodo(page: Page) {
        await page.click(this.deleteIcon);
    }

    async getNoTodoMessage(page: Page) {
        return page.locator(this.noTodoMessage);
    }

    async getTodoItem(page: Page) {
        return page.locator(this.todoItem);
    }
}