import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [ProjectsModule, TasksModule, UsersModule],
  controllers: [HelloController, HelloController],
})
export class AppModule {}
