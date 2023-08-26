import { APIRequestContext } from "@playwright/test";
import User from "../Models/User";

export default class ToDoApi{
    async addToDo(request: APIRequestContext, user: User) {
        return await request.post('/api/v1/tasks', {
            data: {
                isCompleted: false,
                item: "Learn English"
            },
            headers: {
                Authorization: `Bearer ${user.getAccessToken()}`,
            }
        });
    }
} 