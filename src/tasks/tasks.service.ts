import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User{
    name: string;
    age: number;
}
@Injectable()
export class TasksService {

    private tasks: any[] = [];

    getTasks() {
        return this.tasks
    }

    getTask(id: number){
        const taskFound = this.tasks.find(task => task.id === id);
        if (!taskFound) {
            return new NotFoundException('Task not found');
        }
    }

    createTask(task: any) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }

    updateTask(task: UpdateTaskDto) {
        console.log(task);
        return 'Actualizando tarea';
    }

    deleteTask() {
        return 'Eliminando tarea';
    }

    

    
}
