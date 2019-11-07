import { Worker } from './worker';
import { LoggerService } from './logger.service';
import { Injectable, Component } from '@angular/core';

@Component({
  providers: [LoggerService]
})
export class WorkerService {
  //constructor(private logger: LoggerService) {}
  getWorkers(): Worker[] {
    //this.logger.log('Fetching workers...');
    let workers: Worker[] = [
      new Worker(1, 'WorkerJoe', 45600, new Date(2016, 8, 4)),
      new Worker(2, 'WorkerShmoe', 45600, new Date(2016, 8, 4)),
      new Worker(3, 'WorkerBloe', 45600, new Date(2016, 8, 4)),
      new Worker(4, 'WorkerBsoe', 45600, new Date(2016, 8, 4)),
      new Worker(5, 'WorkerCroe', 45600, new Date(2016, 8, 4)),
      new Worker(6, 'WorkerThroe', 45600, new Date(2016, 8, 4)),
      new Worker(7, 'WorkerShoe', 45600, new Date(2016, 8, 4))
    ];
    return workers;
  }
}
