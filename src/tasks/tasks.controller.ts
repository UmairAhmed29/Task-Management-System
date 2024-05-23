import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';


@Controller('tasks')
export class TasksController {

    constructor(private taskservice: TasksService) {}

    @Get()
    getAllTasks(): Task[]{
        return this.taskservice.getAllTasks();

    }

    @Post()
    createTask(@Body() body) {
        console.log('body', body);


    }
}
