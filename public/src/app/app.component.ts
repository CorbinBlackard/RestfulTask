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
  showAllTasks: boolean;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksFromService();
    this.show_task=undefined;
    this.showAllTasks = false;
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
  };
  // showAllTask(){
  //   this.getTasksFromService();
  // }
  showTask(id){
    this.getTaskIDFromService(id)
  };
//   onButtonClick(): void { 
//     console.log(`Click event is working`);
//   };
//   onButtonClickParam1(num: Number): void { 
//       console.log(`Click event is working with num param: ${num}`);
//   };
//   onButtonClickParams(num: Number, str: String): void { 
//       console.log(`Click event is working with num param: ${num} and str param: ${str}`);
//   };
//   onButtonClickEvent(event: any): void { 
//       console.log(`Click event is working with event: ${event}`)

//   };
//   onButtonClickParam2(num: Number): void { 
//     console.log(`Click event is working with num param: ${num}`);
//     // call the service's method to post the data, but make sure the data is bundled up in an object!
//     let observable = this._httpService.postToServer({data: num});
//     observable.subscribe(data => console.log("Got our data!", data));
// }



};