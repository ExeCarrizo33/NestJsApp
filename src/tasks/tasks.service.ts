import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {


    getTasks() {
        return [
            {
                id: 1,
                title: 'Tarea 1',
                description: 'Descripción de la tarea 1'
            }
        ];
    }

    
}
