import { Injectable } from '@nestjs/common';
import { Todo } from '@nx-node-microservice/todos';
@Injectable()
export class AppService {
  getData(): Todo[] {
    return [
      { message: 'go for a walk', done: true },
      { message: 'create docker file for project', done: false },
    ];
  }
}
