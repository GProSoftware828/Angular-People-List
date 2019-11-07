import { Component } from '@angular/core';
import { Worker } from './worker';
import { WorkerService } from './worker-service';

@Component({
  selector: 'workers',
  templateUrl: 'Worker.html',
  providers: [WorkerService]
})
export class WorkerComponent {
  workers: Worker[];
  constructor(private workerService: WorkerService) {
    this.workers = workerService.getWorkers();
  }
}
