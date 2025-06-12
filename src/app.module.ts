import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProjectsModule, TasksModule, UsersModule, AuthModule],
  controllers: [HelloController, HelloController],
})
export class AppModule {}
