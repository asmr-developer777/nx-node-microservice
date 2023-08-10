import { Controller, Get, Render } from '@nestjs/common';
import { Todo } from '@nx-node-microservice/todos';
import axios from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root() {
    return {
      todos: await this.getData(),
    };
  }

  async getData() {
    try {
      const { data } = await axios.get<Todo[]>('http://localhost:3333');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
