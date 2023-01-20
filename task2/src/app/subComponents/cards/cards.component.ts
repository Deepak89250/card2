import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  httpdata : any=[];
  constructor( private user : HttpClient) { 
    
  }

  ngOnInit() {
     this.user.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
      console.log(data);
       this.displaydata(data);
     })
    }
displaydata(data:any){
   this.httpdata=data;
 }
 
onClick(data : any){
  console.log(data);
  this.user.get('https://jsonplaceholder.typicode.com/users/'+data).subscribe((data)=>{
    console.log(data);
    this.displaydata(data);
  })
 
}
  //  displaydata(data: any) {
  //   this.httpdata=data
  // }
  
 
  }


