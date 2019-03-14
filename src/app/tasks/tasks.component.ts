import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Logger } from '../core/services/logger';

enum Filters {
  A = 'all',
  R = 'resolved'
}


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  task: string;

  tasks: Array<{text: string, isChecked: boolean, id: number}>;

  filters = Filters;
  activeFilter = Filters['A'];

  get checkedItems() {
    return this.tasks.filter((item) => item.isChecked);
  }

  constructor(private logger: Logger,
              private router: Router,
              private route: ActivatedRoute) {
    this.tasks = [];
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.logger.info(params);
      });
  }

  addTask() {
    if (!this.task.length) {
      return;
    }

    this.tasks.push({
      id: Math.random(),
      text: this.task,
      isChecked: false
    });

    this.task = null;

    this.logger.info('Task added!');
  }

  update(e, idx) {
    switch (e) {
      case 'remove':
        this.tasks.splice(idx, 1);
        break;

      case 'resolve':
        this.tasks[idx].isChecked = true;
        break;

      default:
        this.logger.info('Action not implemented :(');
    }
  }

  show(e) {
    this.activeFilter = e;

    this.router.navigate(['/dashboard'], { queryParams: { filter: e } });
  }
}
