import { test, expect, type Page } from '@playwright/test';
import User from '../Models/User';
import SignupPage from '../pages/SignupPage';
import TodoPage from '../pages/TodoPage';
import NewToDoPage from '../pages/NewTodoPage';
import ToDoApi from '../apis/TodoApi';

test("Should be able to add a new todo", async ({ page, request, context }) => {

    const user = new User();

    const signupPage = new SignupPage();
    await signupPage.signupUsingAPI(request, user, context);


    const newTodoPage = new NewToDoPage();
    await newTodoPage.load(page);
    await newTodoPage.addTodo(page, 'Learn English')

    const todoPage = new TodoPage();
    const todoItem = await todoPage.getTodoItem(page);

    expect(await todoItem.innerText()).toEqual('Learn English');

});

test("Should be able to delete a todo", async ({ page, request, context }) => {
    const user = new User();
    const signupPage = new SignupPage();
    await signupPage.signupUsingAPI(request, user, context);
    await new ToDoApi().addToDo(request, user);

    const todoPage = new TodoPage();
    await todoPage.load(page);
    await todoPage.deleteTodo(page)

    const noToDoMessage = await todoPage.getNoTodoMessage(page);
    await expect(noToDoMessage).toBeVisible();
    expect(await noToDoMessage.innerText()).toEqual("No Available Todos");

});

