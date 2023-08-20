import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit{
  constructor(private service:TasksService ){}
  ngOnInit(): void {
   this.AllTasks();
  }

  AllTasks(){
    this.service.getAllTasks().subscribe( (res:any)=>{
      console.log(res);  
    }, (err:any)=>{
      
    })
    
  }
}
