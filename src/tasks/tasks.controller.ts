import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {


    constructor(private tasksService: TasksService) {}
    
    @Get()
    getTasks(@Query() query: any) {
        console.log(query);
        return this.tasksService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') id: string) {
        return this.tasksService.getTask(parseInt(id)); 
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