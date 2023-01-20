import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {
httpdata : any=[];
  constructor(private user :HttpClient ) { }

  ngOnInit() {
    this.user.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
      console.log(data)
    this.displaydata(data);

    })
   
  }
  displaydata(data: any) {
    this.httpdata=data
    
  }

}
