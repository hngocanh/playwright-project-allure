import { Page } from "@playwright/test";

export default class NewToDoPage{
    async load(page: Page) {
        await page.goto('/todo/new');
    }

    private get newTodoInput() {
        return `[data-testid='new-todo']`;
    }

    private get newTodoSubmit() {
        return `[data-testid='submit-newTask']`;
    }



    async addTodo(page: Page, task: string) {
        await page.type(this.newTodoInput, task);
        await page.click(this.newTodoSubmit);
    }


}