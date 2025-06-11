import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {


    constructor(private tasksService: TasksService) {}
    
    @Get()
    getTasks(@Query() query: any) {
        console.log(query);
        return this.tasksService.getTasks();
    }

    @Post()
    createTasks(@Body() task:any) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTasks() {
        return this.tasksService.updateTask();
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTask();
    }
    

}