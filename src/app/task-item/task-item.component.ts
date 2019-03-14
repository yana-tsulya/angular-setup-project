import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: {text: string, isChecked: boolean};

  @Output() updateTask = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  removeTask() {
    this.updateTask.emit('remove');
  }

  resolveTask() {
    this.updateTask.emit('resolve');
  }
}
