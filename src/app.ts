import express, { Application } from 'express';
import env from 'dotenv';
import actionCode from './events/consumer/user.consumer';


class nodeApp {
  public app: Application

  constructor() {
    this.app = express()

    env.config()
    this.initialiseMiddleware()
    this.messageConsumers()
  }

  private initialiseMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }


  private messageConsumers () {
    actionCode()
  }
  
  public listen(port: number): void {
    this.app.listen(port, () => console.log('notification service is running at', port))
  }
}


export default nodeApp