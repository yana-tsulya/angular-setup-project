import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Logger } from '../core/services/logger';

import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  taskId: string;

  subscriptions: Subscription;

  constructor(
    private logger: Logger,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscriptions = this.route.params.subscribe((params: any) => {
      this.taskId = params['id'];
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
