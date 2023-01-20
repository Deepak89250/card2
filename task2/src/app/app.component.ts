import { Component } from '@angular/core';
import usersJson from '../users.json';

interface users {

   firstName: string;
   lastName: string;
   role: string;
   fb: string;
   twitter: string; 
   linkedIn: string;
 
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'task2';
  userdata : users[] = usersJson;

}

