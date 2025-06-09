import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TasksController {

    tasksService: TasksService;

    constructor(taskService: TasksService) {
        this.tasksService = taskService;
    }
    
    @Get('/tasks')
    getTasks() {
        return this.tasksService.getTasks();
    }

    @Post('/tasks')
    createTasks() {
        return 'Creando tarea';
    }

    @Put('/tasks/:id')
    updateTasks() {
        return 'Actualizando tarea';
    }

    @Delete('/tasks/:id')
    deleteTasks() {
        return 'Eliminando tarea';
    }
    

}