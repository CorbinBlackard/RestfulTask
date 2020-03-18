import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app'
  tasks: object;
  show_task: object;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksFromService();
    this.show_task=undefined;
    //this.getTaskFromService(id);
  };
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data.tasks;
    });
  };
  getTaskIDFromService(id) {
    let observable1 = this._httpService.getTaskID(id);
    observable1.subscribe(data => {
      console.log("Got task by ID!", data);
      this.show_task = data.task;
    })
  }

  showTask(id){
    this.getTaskIDFromService(id)
  }

};

