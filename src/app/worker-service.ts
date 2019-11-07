import { Worker } from './worker';
import { Injectable } from '@angular/core';

export class WorkerService {
  getWorkers(): Worker[] {
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
