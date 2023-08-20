import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getAllTasks(){
    let header=new Headers()
    // header.append('Authorization',token);
    return this.http.get("https://crudsystem-52w6.onrender.com/tasks/all-tasks")
  }
}
