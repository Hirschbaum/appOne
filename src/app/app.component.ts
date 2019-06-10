import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sajóörös';
  street = 'Ady Endre utca';
  students = [
    {name: 'Deepthy'},
    {name: 'Rubi'},
    {name: 'Ada'}
  ];
}


